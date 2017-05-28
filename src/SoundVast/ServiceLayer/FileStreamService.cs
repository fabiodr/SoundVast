﻿using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Repository;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Text.RegularExpressions;
using System.IO;
using Microsoft.Extensions.Configuration;
using SoundVast.Filters;
using SoundVast.QueryOptions;
using SoundVast.Storage.CloudStorage;
using SoundVast.Storage.CloudStorage.AzureStorage;
using SoundVast.Utilities;
using FileStream = SoundVast.Models.FileStreamModels.FileStream;

namespace SoundVast.ServiceLayer
{
    public interface IFileStreamService : IAudioService<FileStream>
    {
        ICollection<FileStream> GetOtherFileStreamNames(int idToExclude);
    }

    public class FileStreamService : AudioService<FileStream>, IFileStreamService
    {
        private readonly IRepository<FileStream> _repository;

        public FileStreamService(IValidationDictionary validationDictionary, IRepository<FileStream> repository, ICloudStorage cloudStorage,
            IConfiguration configuration) 
            : base(validationDictionary, repository, cloudStorage, configuration)
        {
            _repository = repository;
        }

        public ICollection<FileStream> GetOtherFileStreamNames(int idToExclude)
        {
            return _repository.GetAll()
                .WithSelect(new SelectOption<FileStream>(x => new FileStream { Id = x.Id, Name = x.Name + " by " + x.Artist }))
                .WithWhere(new WhereOption<FileStream>(x => x.Id != idToExclude)).ToList();
        }
    }
}