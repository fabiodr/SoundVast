using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.QueryOptions;
using SoundVast.Repository;

namespace SoundVast.Components.Tag
{
    public class TagService : ITagService
    {
        private readonly IRepository<Tag> _repository;

        public TagService(IRepository<Tag> repository)
        {
            _repository = repository;
        }

        public Tag GetTag(int id)
        {
            return _repository.GetAll().BuildTag().Single(x => x.Id == id);
        }

        public IEnumerable<Tag> GetTags()
        {
            var tags = _repository.GetAll().BuildTag();

            return tags;
        }
    }
}