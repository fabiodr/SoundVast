function initFileStreamRequestEdit() {
    var editUrl = $("input#ImageData").val();

    $(function initDropzoneImage() {
        var $dropzone = $(".dropzone.image");
        $dropzone.dropzone({
            url: $dropzone.data().url,
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
                var fileName = $("input#ImageViewModel_Name").val();

                dzImageOptions.init(self);

                $.ajax({
                    url: editUrl,
                    data: { fileName: fileName },
                    method: "post",
                    dataType: "json",
                    success: function (file) {
                        // Create the mock file:
                        var mockFile = { name: fileName, size: file.size };

                        // Call the default addedfile event handler
                        self.emit("addedfile", mockFile);

                        // And optionally show the thumbnail of the file:
                        self.emit("thumbnail", mockFile, file.uri);

                        // Make sure that there is no progress bar, etc...
                        self.emit("complete", mockFile);
                    }
                });

                this.on("thumbnail", function (file, dataUri) {
                    dzImageOptions.thumbnail(self, file, dataUri);
                });

                this.on("success", function (file) {
                    file.previewElement.classList.add("dz-success");
                    $(self.element).siblings("input[name*='ImageViewModel.Name']").val(file.name);
                });
            }
        });
    });
}