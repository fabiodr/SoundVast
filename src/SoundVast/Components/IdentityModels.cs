using System.Collections.Generic;
using System;
using SoundVast.Components.Category;
using SoundVast.Components.Rating;
using SoundVast.Components.User;

namespace SoundVast.Components
{
    public class LinkModel
    {
        public int Id { get; set; }
        private string _linkUrl;
        public string LinkUrl
        {
            get => _linkUrl;
            set
            {
                if (!string.IsNullOrWhiteSpace(value))
                {
                    _linkUrl = value;
                }
            }
        }

        protected LinkModel()
        {

        }

        public LinkModel(string linkUrl)
        {
            LinkUrl = linkUrl;
        }
    }

    public abstract class FileModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        protected FileModel() { }

        protected FileModel(string name)
        {
            Name = name;
        }
    }

}