using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Quote
{
    public interface IQuoteService
    {
        Models.Quote GetRandomQuote();
    }
}
