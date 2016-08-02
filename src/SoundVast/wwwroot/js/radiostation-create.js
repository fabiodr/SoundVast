function initLiveStreamCreate() {
    var $dropzones = $(".upload .dropzone.image");
    $("select").select2({
        allowClear: true,
        dropdownAutoWidth: true
    });
    initUnobValidation();
    changeBindings($(".radiostation-details"));

    $dropzones.each(function () {
        //Dropzone already defined
        if ($(this).find(".dz-default").length > 0)
            return;

        $(this).dropzone({
            url: $(this).data().url,
            maxFiles: 1,
            acceptedFiles: dzImageOptions.acceptedFiles,
            dictDefaultMessage: dzImageOptions.dictDefaultMessage,
            dictInvalidFileType: dzImageOptions.dictInvalidFileType,
            thumbnailWidth: dzImageOptions.thumbnailWidth,
            thumbnailHeight: dzImageOptions.thumbnailHeight,
            maxFilesize: dzImageOptions.maxFileSize,
            addRemoveLinks: dzImageOptions.addRemoveLinks,
            init: function () {
                var self = this;
                dzImageOptions.init(this);

                this.on("thumbnail", function (file, dataUri) {
                    dzImageOptions.thumbnail(self, file, dataUri);
                });

                this.on("success", function (file) {
                    $(self.element).siblings("input[name*='.Image']").val(file.name);
                });
            }
        });
    });
}