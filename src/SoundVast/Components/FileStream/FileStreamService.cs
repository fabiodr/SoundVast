using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Repository;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Text.RegularExpressions;
using System.IO;
using Microsoft.Extensions.Configuration;
using SoundVast.Components.Audio;
using SoundVast.Components.FileStream.Models;
using SoundVast.QueryOptions;
using SoundVast.Storage.CloudStorage;

namespace SoundVast.Components.FileStream
{
    public interface IFileStreamService : IAudioService<FileStreamModel>
    {
        ICollection<FileStreamModel> GetOtherFileStreamNames(int idToExclude);
    }

    public class FileStreamService : AudioService<FileStreamModel>, IFileStreamService
    {
        private readonly IRepository<FileStreamModel> _repository;

        public FileStreamService(IValidationDictionary validationDictionary, IRepository<FileStreamModel> repository, ICloudStorage cloudStorage,
            IConfiguration configuration) 
            : base(validationDictionary, repository, cloudStorage, configuration)
        {
            _repository = repository;
        }

        public ICollection<FileStreamModel> GetOtherFileStreamNames(int idToExclude)
        {
            return _repository.GetAll()
                .Select(new SelectOption<FileStreamModel>(x => new FileStreamModel { Id = x.Id, Name = x.Name + " by " + x.Artist }).SelectExpression)
                .Where(new WhereOption<FileStreamModel>(x => x.Id != idToExclude).WhereExpression).ToList();
        }
    }
}