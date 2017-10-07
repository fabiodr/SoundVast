using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SoundVast.Components.Audio;
using SoundVast.Components.Genre.Models;
using SoundVast.Components.Radio.Models;
using SoundVast.Repository;
using SoundVast.Validation;

namespace SoundVast.Components.Radio
{
    public class RadioService : AudioService<RadioModel>, IRadioService
    {
        public RadioService(IRepository<RadioModel> repository, IValidationProvider validationProvider) : base(repository, validationProvider)
        {
        }
    }
}
