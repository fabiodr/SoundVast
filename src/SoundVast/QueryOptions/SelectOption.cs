using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace SoundVast.QueryOptions
{
    public class SelectOption<T>
    {
        public SelectOption(Expression<Func<T, T>> selectExpression)
        {
            SelectExpression = selectExpression;
        }

        public Expression<Func<T, T>> SelectExpression { get; private set; }
    }
}