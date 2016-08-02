var dzImageOptions = {
    acceptedFiles: "image/*",
    dictDefaultMessage: "Drag cover image here or click to upload",
    dictInvalidFileType: "Only images are accepted",
    thumbnailWidth: 351,
    thumbnailHeight: 321,
    maxFileSize: 20,
    addRemoveLinks: true,
    init: function (dropzone) {
        $(dropzone.element).find(".dz-message").append("<span class='note'>(<strong>" + dzImageOptions.acceptedFiles + "</strong>)</span>");
    },
    thumbnail: function (dropzone) {
        $(dropzone.element).find(".dz-image").width("100%").height("auto");
        $(dropzone.element).find("img").width("100%").height("100%");
    }
};

function addLiveStream() {
    $.ajax({
        url: $("input#LiveStreamCreateUrl").val(),
        method: "post",
        success: function (data) {
            $("#livestream-container").append(data);
            initLiveStreamCreate();
        }
    });
}

function initUploadAudio() {
    initDropzoneAudio($(".dropzone#file"));
    addLiveStream();

    $("form.radiostation").next("a[href='#']").click(function () {
        addLiveStream();
    });

    $("form.radiostation").on("click", "a[href='#']", function (obj) {
        $(obj.target).parent().remove();
        changeBindings($(".radiostation-details"));
    });

    function initDropzoneAudio($dropzone) {
        var allowedAudioFiles = "audio/*";

        $dropzone.dropzone({
            addRemoveLinks: true,
            maxFilesize: 40,
            acceptedFiles: allowedAudioFiles,
            dictDefaultMessage: "Drag audio files here or click to upload",
            dictInvalidFileType: "Wrong file type has been chosen. See the accepted files at the bottom of this page",
            uploadMultiple: true,
            paramName: "files",
            init: function () {
                var self = this;
                $(this.element).find(".dz-message").append("<span class='note'>(<strong>" + allowedAudioFiles + "</strong>)</span>");

                this.on("addedfile", function (file) {
                    if (this.files.length) {
                        var _i, _len;

                        for (_i = 0, _len = this.files.length; _i < _len - 1; _i++) {
                            //User is trying to upload same file, don't let them
                            if (this.files[_i].name === file.name && this.files[_i].size === file.size && this.files[_i].lastModifiedDate.toString() === file.lastModifiedDate.toString()) {
                                this.removeFile(file);
                            }
                        }
                    }
                });

                this.on("removedfile", function (file, event) {
                    $(".required-file-details[data-file-index='" + file.index + "']").remove();
                    $(".additional-file-details[data-file-index='" + file.index + "']").remove();

                    //Assign the correct indexes and bindings again and change the file indexes to match too
                    $(".required-file-details").each(function (i) {
                        self.files[i].index = i;

                        $(this).attr("data-file-index", i);
                    });

                    $(".additional-file-details").each(function (i) {
                        $(this).attr("data-file-index", i);
                    });

                    changeBindings($(".required-file-details"));
                    changeBindings($(".additional-file-details"));
                });

                this.on("reset", function (file) {
                    $(".file-detail-tabs, input[type='submit']").hide();
                });

                this.on("successmultiple", function (files, response) {
                    $("#upload-file-required-tab").append(response.requiredFileDetailsPartialView);
                    $("#upload-file-additional-tab").append(response.additionalFileDetailsPartialView);

                    for (var i = 0; i < files.length; i++) {
                        files[i].index = $(self.element).find(".dz-preview").index(files[i].previewElement);

                        $(".required-file-details").eq(files[i].index).attr("data-file-index", files[i].index);
                        $(".additional-file-details").eq(files[i].index).attr("data-file-index", files[i].index);
                    }

                    initAudioDetails();
                });

                this.on("error", function (file, errorMessage, xhrObject) {
                    console.log("file: " + file + "error: " + errorMessage + "xhrObject :" + xhrObject);
                });
            }
        });
    }
}