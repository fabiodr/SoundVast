using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace SoundVast.QueryOptions
{
    public class OrderingOption<T, TKey>
    {
        public OrderingOption(Expression<Func<T, TKey>> orderingKey, bool sortDescending = false)
        {
            OrderingKey = orderingKey;
            SortDescending = sortDescending;
        }

        public Expression<Func<T, TKey>> OrderingKey { get; private set; }
        public bool SortDescending { get; private set; }
    }
}