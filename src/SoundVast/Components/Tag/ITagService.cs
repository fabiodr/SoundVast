using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Tag
{
    public interface ITagService
    {
        Tag GetTag(int id);
        IEnumerable<Tag> GetTags();
    }
}
