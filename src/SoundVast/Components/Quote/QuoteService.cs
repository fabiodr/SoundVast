using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Components.Quote.Models;
using SoundVast.QueryOptions;
using SoundVast.Repository;

namespace SoundVast.Components.Quote
{
    public interface IQuoteService
    {
        QuoteModel GetQuote(int id);
      //  QuoteModel GetRandomQuote();
    }

    public class QuoteService : IQuoteService
    {
        private readonly IValidationDictionary _validationDictionary;
        private readonly IRepository<QuoteModel> _repository;

        public QuoteService(IValidationDictionary validationDictionary, IRepository<QuoteModel> repository)
        {
            _validationDictionary = validationDictionary;
            _repository = repository;
        }

        public QuoteModel GetQuote(int id)
        {
            return _repository.Get(id);
        }

        //public QuoteModel GetRandomQuote()
        //{
        //    var quotes = _repository.GetAll();

        //    var random = new Random();
        //    var randomNumber = random.Next(0, quotes.Count());
        //    var quote = quotes.WithOrdering(new OrderingOption<QuoteModel, int>(x => x.Id)).Single(x => x.Id == randomNumber);

        //    return quote;
        //}
    }
}