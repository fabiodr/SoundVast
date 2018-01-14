using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SoundVast.Components.Audio.Models;
using SoundVast.Repository;
using SoundVast.Validation;

namespace SoundVast.Components.Rating
{
    public class RatingService : IRatingService
    {
        private readonly IRepository<Models.Rating> _repository;

        public RatingService(IRepository<Models.Rating> repository)
        {
            _repository = repository;
        }

        public Models.Rating Get(int id)
        {
            return _repository.GetAll().BuildRating().Single(x => x.Id == id);
        }
    }
}
