using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Utilities
{
	public class Stream : IActionResult
	{
		private readonly string _fileName;
        private readonly ICloudStorage _cloudStorage;

        public Stream(ICloudStorage cloudStorage, string filename)
        {
            _cloudStorage = cloudStorage;
			_fileName = filename;
		}

	    public async Task ExecuteResultAsync(ActionContext context)
	    {
            var response = context.HttpContext.Response;
            var request = context.HttpContext.Request;
	        var blob = _cloudStorage.GetBlob(CloudStorageType.Audio, _fileName);
	        var fileProperties = blob.FileProperties;
            var fileExists = fileProperties.Size > 0;
            var responseLength = fileProperties.Size;
            long startIndex = 0;

            //if the "If-Match" exists and is different to etag (or is equal to any "*" with no resource) then return 412 precondition failed
            if ((string)request.Headers["If-Match"] == "*" && !fileExists ||
                (string)request.Headers["If-Match"] != null && request.Headers["If-Match"] != "*" && request.Headers["If-Match"] != fileProperties.ETag)
            {
                response.StatusCode = (int)HttpStatusCode.PreconditionFailed;
                return;
            }

            if (!fileExists)
            {
                response.StatusCode = (int)HttpStatusCode.NotFound;
                return;
            }

            if (request.Headers["If-None-Match"] == fileProperties.ETag)
            {
                response.StatusCode = (int)HttpStatusCode.NotModified;
                return;
            }

            if ((string)request.Headers["Range"] != null && ((string)request.Headers["If-Range"] == null || request.Headers["IF-Range"] == fileProperties.ETag))
            {
                string range = request.Headers["Range"];
                var ranges = range.Split('=', '-');

                startIndex = Convert.ToInt64(ranges[1]);

                if (range.Length > 2 && ranges[2] != string.Empty)
                {
                    responseLength = Convert.ToInt64(range[2]) + 1;
                }
                else
                {
                    responseLength = fileProperties.Size;
                }

                responseLength -= startIndex;
                response.StatusCode = (int)HttpStatusCode.PartialContent;
                response.Headers.Add("Content-Range", $"bytes {startIndex}-{startIndex + responseLength - 1}/{fileProperties.Size}");
            }

            response.Headers.Add("Accept-Ranges", "bytes");
            response.Headers.Add("Content-Length", responseLength.ToString());
            //response.Cache.SetCacheability(HttpCacheability.Public); //required for etag output
            //  response.Cache.SetETag(etag); //required for IE9 resumable downloads
            response.ContentType = fileProperties.ContentType;

	        await blob.DownloadRangeToStreamAsync(response.Body, startIndex, responseLength);
        }
    }
}