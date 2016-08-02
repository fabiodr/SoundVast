$.widget("custom.catcomplete", $.ui.autocomplete, {
    _create: function () {
        this._super();
        this.widget().menu("option", "items", "> :not(.ui-autocomplete-genre)");
    },
    _renderMenu: function (ul, items) {
        var that = this,
          currentGenre = "";
        $.each(items, function (index, item) {
            if (item.genre != currentGenre) {
                ul.append("<li class='ui-autocomplete-genre'>" + item.genre + "</li>");
                currentGenre = item.genre;
            }
            var li = that._renderItemData(ul, item);
            if (item.genre) {
                li.attr("aria-label", item.genre + " : " + item.label);
            }
        });
    }
});