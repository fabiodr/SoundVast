using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SoundVast.Components.Tag
{
    public class TagController : Controller
    {
        private readonly ITagService _tagService;

        public TagController(ITagService tagService)
        {
            _tagService = tagService;
        }

        public IActionResult TagsForSelect(string input)
        {
            var tags = _tagService.GetTags().Select(x => new
            {
                label = x.Name,
                value = x.Id
            });

            return Ok(new
            {
                tags
            });
        }
    }
}