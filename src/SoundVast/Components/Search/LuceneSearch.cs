using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Lucene.Net.Documents;
using Lucene.Net.Index;
using Lucene.Net.Search;
using Lucene.Net.Store;
using Lucene.Net.Analysis.Standard;
using Lucene.Net.QueryParsers.Classic;
using Lucene.Net.Util;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.PlatformAbstractions;

namespace SoundVast.Components.Search
{
    // TODO: Remove index on delete. Clear indexes on schema change.
    public class LuceneSearch
    {
        private static readonly string LuceneDir = Path.Combine(PlatformServices.Default.Application.ApplicationBasePath, "lucene_index");
        private static FSDirectory _directoryTemp;
       
        private static FSDirectory Directory
        {
            get
            {
                if (_directoryTemp == null)
                {
                    _directoryTemp = FSDirectory.Open(new DirectoryInfo(LuceneDir));
                }

                if (IndexWriter.IsLocked(_directoryTemp))
                {
                    IndexWriter.Unlock(_directoryTemp);
                }

                var lockFilePath = Path.Combine(LuceneDir, "write.lock");

                if (File.Exists(lockFilePath))
                {
                    File.Delete(lockFilePath);
                }

                return _directoryTemp;
            }
        }

        private static void AddToLuceneIndex(Audio.Models.Audio audio, IndexWriter writer)
        {
            var searchQuery = new TermQuery(new Term("Id", audio.Id.ToString()));

            writer.DeleteDocuments(searchQuery);

            var doc = new Document
            {
                new StringField("Id", audio.Id.ToString(), Field.Store.YES),
                new TextField("Name", audio.Name, Field.Store.YES)
            };

            writer.AddDocument(doc);
        }

        public static void AddOrUpdateLuceneIndex(IEnumerable<Audio.Models.Audio> audios)
        {
            var analyzer = new StandardAnalyzer(LuceneVersion.LUCENE_48);
            var indexWriterConfig = new IndexWriterConfig(LuceneVersion.LUCENE_48, analyzer);

            using (var writer = new IndexWriter(Directory, indexWriterConfig))
            {
                foreach (var audio in audios)
                {
                    AddToLuceneIndex(audio, writer);
                }
            }
        }

        public static void AddOrUpdateLuceneIndex(Audio.Models.Audio audio)
        {
            AddOrUpdateLuceneIndex(new List<Audio.Models.Audio> { audio });
        }

        public static void ClearLuceneIndexRecord(int id)
        {
            var analyzer = new StandardAnalyzer(LuceneVersion.LUCENE_48);
            var indexWriterConfig = new IndexWriterConfig(LuceneVersion.LUCENE_48, analyzer);

            using (var writer = new IndexWriter(Directory, indexWriterConfig))
            {
                var searchQuery = new TermQuery(new Term("Id", id.ToString()));

                writer.DeleteDocuments(searchQuery);
            }
        }

        public static bool ClearLuceneIndex()
        {
            try
            {
                var analyzer = new StandardAnalyzer(LuceneVersion.LUCENE_48);
                var indexWriterConfig = new IndexWriterConfig(LuceneVersion.LUCENE_48, analyzer);

                using (var writer = new IndexWriter(Directory, indexWriterConfig))
                {
                    writer.DeleteAll();
                }
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        private static int MapLuceneDocumentToId(Document doc)
        {
            return Convert.ToInt32(doc.Get("Id"));
        }

        private static IEnumerable<int> MapLuceneToIdList(IEnumerable<Document> hits)
        {
            return hits.Select(MapLuceneDocumentToId).ToList();
        }

        private static IEnumerable<int> MapLuceneToIdList(IEnumerable<ScoreDoc> hits, IndexSearcher searcher)
        {
            return hits.Select(hit => MapLuceneDocumentToId(searcher.Doc(hit.Doc))).ToList();
        }

        private static Query ParseQuery(string searchQuery, QueryParserBase parser)
        {
            Query query;

            try
            {
                query = parser.Parse(searchQuery.Trim());
            }
            catch (ParseException)
            {
                query = parser.Parse(QueryParserBase.Escape(searchQuery.Trim()));
            }
            return query;
        }

        private static IEnumerable<int> Search(string searchQuery, string searchField = "")
        {
            if (string.IsNullOrEmpty(searchQuery.Replace("*", "").Replace("?", ""))) return new List<int>();

            using (var reader = DirectoryReader.Open(Directory))
            {
                using (var analyzer = new StandardAnalyzer(LuceneVersion.LUCENE_48))
                {
                    var searcher = new IndexSearcher(reader);
                    const int hitsLimit = 1000;
                    QueryParser parser;
                    Query query;
                    ScoreDoc[] hits;
                    IEnumerable<int> results;

                    if (!string.IsNullOrEmpty(searchField))
                    {
                        parser = new QueryParser(LuceneVersion.LUCENE_48, searchField, analyzer);
                        query = ParseQuery(searchQuery, parser);
                        hits = searcher.Search(query, hitsLimit).ScoreDocs;
                        results = MapLuceneToIdList(hits, searcher);

                        return results;
                    }

                    parser = new MultiFieldQueryParser(LuceneVersion.LUCENE_48, new[] { "Id", "Name" }, analyzer);
                    query = ParseQuery(searchQuery, parser);
                    hits = searcher.Search(query, null, hitsLimit, Sort.RELEVANCE, true, false).ScoreDocs;
                    results = MapLuceneToIdList(hits, searcher);

                    return results;
                }
            }
        }

        public static IEnumerable<int> SearchAudios(string input, string fieldName = "")
        {
            if (string.IsNullOrEmpty(input)) return new List<int>();

            var terms = input.Trim().Split(' ').Where(x => !string.IsNullOrEmpty(x)).Select(x => x.Trim() + "*");

            input = string.Join(" ", terms);

            return Search(input, fieldName);
        }
    }
}
