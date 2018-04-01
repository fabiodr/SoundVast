using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SoundVast.Utilities;

namespace SoundVast.Components.Dirble
{
    public class DirbleController : Controller
    {
        private readonly IDirble _dirble;

        public DirbleController(IDirble dirble)
        {
            _dirble = dirble;
        }

        [HttpGet]
        public async Task<IActionResult> GetListenersForStation(int id)
        {
            var station = await _dirble.GetStation(id, TimeSpan.FromMinutes(20));

            return Ok(new
            {
                listeners = station.TotalListeners
            });
        }
    }
}