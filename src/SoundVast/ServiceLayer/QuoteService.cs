using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Filters;
using SoundVast.Models.IdentityModels;
using SoundVast.QueryOptions;
using SoundVast.Repository;

namespace SoundVast.ServiceLayer
{
    public interface IQuoteService
    {
        Quote GetQuote(int id);
        Quote GetRandomQuote();
    }

    public class QuoteService : IQuoteService
    {
        private readonly IValidationDictionary _validationDictionary;
        private readonly IRepository<Quote> _repository;

        public QuoteService(IValidationDictionary validationDictionary, IRepository<Quote> repository)
        {
            _validationDictionary = validationDictionary;
            _repository = repository;
        }

        public Quote GetQuote(int id)
        {
            return _repository.Get(id);
        }

        public Quote GetRandomQuote()
        {
            var quotes = _repository.GetAll();

            var random = new Random();
            var randomNumber = random.Next(0, quotes.Count());
            var quote = quotes.WithOrdering(new OrderingOption<Quote, int>(x => x.Id)).GetRandom(randomNumber);

            return quote;
        }
    }
}