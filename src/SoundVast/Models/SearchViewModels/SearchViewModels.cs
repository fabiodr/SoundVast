using SoundVast.CustomHelpers;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SoundVast.Models.SearchViewModels
{
    public enum SelectedFilter
    {
        None,
        FileStreams,
        Albums,
        Artists,
        Stations,
        Podcasts
    }

    public class SearchViewModel
    {
        public string Search { get; set; }
        public SelectedFilter SelectedFilter { get; set; }
        public ICollection<string> SelectedFiltersDisplay { get; set; } = new List<string>();

        public SearchViewModel()
        {
            SelectedFiltersDisplay.Add(EnumHelper<Enum>.GetDisplayValue(SelectedFilter.FileStreams));
            SelectedFiltersDisplay.Add(EnumHelper<Enum>.GetDisplayValue(SelectedFilter.Albums));
            SelectedFiltersDisplay.Add(EnumHelper<Enum>.GetDisplayValue(SelectedFilter.Artists));
            SelectedFiltersDisplay.Add(EnumHelper<Enum>.GetDisplayValue(SelectedFilter.Stations));
            SelectedFiltersDisplay.Add(EnumHelper<Enum>.GetDisplayValue(SelectedFilter.Podcasts));
        }
    }
}