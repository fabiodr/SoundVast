using System;
using System.Collections.Generic;
using System.Linq;
using SoundVast.Components.Quote.Models;
using SoundVast.Repository;

namespace SoundVast.Components.Quote
{
    public class QuoteService : IQuoteService
    {
        private readonly IRepository<Models.Quote> _repository;

        public QuoteService(IRepository<Models.Quote> repository)
        {
            _repository = repository;
        }

        public Models.Quote GetRandomQuote()
        {
            var quotes = _repository.GetAll();

            var random = new Random();
            var min = quotes.Min(x => x.Id);
            var max = quotes.Count();
            var randomNumber = random.Next(min, max);
            var quote = quotes.OrderBy(x => x.Id).Single(x => x.Id == randomNumber);

            return quote;
        }
    }
}