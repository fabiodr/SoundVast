using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.Components.Quote.Models
{
    public class Quote
    {
        public int Id { get; set; }
        [Required]
        public string Quotation { get; set; }
    }
}
