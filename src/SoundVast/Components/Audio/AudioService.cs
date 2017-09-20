﻿using System.Collections.Generic;
using System.Linq;
using SoundVast.Components.Audio.Models;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Rating.Models;
using SoundVast.Components.User;
using SoundVast.Repository;

namespace SoundVast.Components.Audio
{
    public class AudioService : IAudioService
    {
        private readonly IRepository<AudioModel> _repository;

        public AudioService(IRepository<AudioModel> repository)
        {
            _repository = repository;
        }

        public ICollection<AudioModel> GetSongs(int current, int amount)
        {
            return _repository.GetAll().Where(x => x.Genre.GenreType == nameof(GenreType.Song)).Skip(current).Take(amount).ToList();
        }

        public AudioModel GetAudio(int id)
        {
            return _repository.Get(id);
        }

        public void RateAudio(int audioId, bool liked, string userId)
        {
            var audio = _repository.Include(x => x.Rating).Single(x => x.Id == audioId);
            var existingRating = audio.Rating?.SingleOrDefault(x => x.UserId == userId);

            if (existingRating != null)
            {
                existingRating.Liked = liked;
            }
            else
            {
                audio.Rating.Add(new RatingModel
                {
                    Liked = liked,
                    UserId = userId,
                    AudioId = audioId
                });
            }

            _repository.Save();
        }
    }
}
