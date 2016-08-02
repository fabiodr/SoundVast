using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace SoundVast.QueryOptions
{
    public class WhereOption<T>
    {
        public WhereOption(Expression<Func<T, bool>> whereExpression)
        {
            WhereExpression = whereExpression;
        }

        public Expression<Func<T, bool>> WhereExpression { get; private set; }
    }
}