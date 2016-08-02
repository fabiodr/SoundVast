using Microsoft.AspNetCore.Mvc;
using SoundVast.Models.SearchViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoundVast.ViewComponents
{
    public class SearchViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var searchViewModel = new SearchViewModel();

            if (!Request.Query.ContainsKey("selectedFilter"))
                return View(searchViewModel);

            SelectedFilter selectedFilter;
            Enum.TryParse(Request.Query.Keys.Single(x => x == "selectedFilter"), out selectedFilter);
            searchViewModel.SelectedFilter = selectedFilter;

            return View(searchViewModel);
        }
    }
}
