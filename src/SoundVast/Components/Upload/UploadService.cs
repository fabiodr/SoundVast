using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using ByteSizeLib;
using SoundVast.Components.Audio.Models;
using SoundVast.Repository;
using SoundVast.Storage.CloudStorage;
using SoundVast.Validation;

namespace SoundVast.Components.Upload
{
    public class UploadService : IUploadService
    {
        private readonly IValidationProvider _validationProvider;
      //  private readonly IUploadValidator _uploadValidator;
        private readonly IRepository<AudioModel> _repository;

        public UploadService(IValidationProvider validationProvider, /*IUploadValidator uploadValidator,*/
            IRepository<AudioModel> repository)
        {
            _validationProvider = validationProvider;
            //_uploadValidator = uploadValidator;
            _repository = repository;
        }

        public async Task UploadCoverImage(ICloudBlob blob, Stream stream, string contentType)
        {
            var fileSize = ByteSize.FromBytes(stream.Length);

           // _uploadValidator.ValidateUploadCoverImage(fileSize.MegaBytes);

            await blob.UploadFromStreamAsync(stream, contentType);
        }

        public void Add(AudioModel model)
        {
            _validationProvider.Validate(model);

            _repository.Add(model);
        }
    }
}
