using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Audio
{
    public class ImagePayload : ObjectGraphType<Image>
    {
        public ImagePayload()
        {
            Name = nameof(Image);

            Field(x => x.Dimention).Description("The dimention of the image");
            Field(x => x.ImageUrl).Description("The absolute image url");
        }
    }
}
