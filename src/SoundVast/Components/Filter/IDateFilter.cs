using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Filter
{
    public interface IDateFilter
    {
        int From { get; set; }
        int To { get; set; }
    }
}
