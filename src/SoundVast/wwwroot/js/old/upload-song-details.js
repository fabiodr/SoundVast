function initAudioDetails() {
    var $dropzones = $(".upload .dropzone.image:visible");

    $(".fileStream-detail-tabs, input[type='submit']").show();

    //initUnobValidation();
    changeBindings($(".required-fileStream-details"));
    changeBindings($(".additional-file-details"));
    changeListBindings($(".additional-file-details"));

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

    $(".bootstrap-tagsinput").addClass("form-control");

    $("select[name*='SelectedCategory']").select2({
        allowClear: true,
        dropdownAutoWidth: true,
        tags: true,
        placeholder: {
            id: "",
            placeholder: ""
        },
        createTag: function (params) {
            return {
                id: params.term,
                text: params.term,
                newOption: true
            }
        },
        templateResult: function (data) {
            var $result = $("<span></span>");

            $result.text(data.text);

            if (data.newOption) {
                $result.append(" <em>(new)</em>");
            }

            return $result;
        },
        templateSelection: function (data) {
            var $option = $(data.element);

            if (data.newOption) {
                var newCategoryTemplate = $(data.element).closest(".required-file-details").siblings("script[type='text/CategoryHidden-template']").html();
                $option.parent().find($option.parent().find("input")).remove();
                $option.append(newCategoryTemplate);
                $option.find("input").val(data.text);
            } else {
                $option.parent().find($option.parent().find("input")).remove();
            }

            data.selected = true;

            return data.text;
        }
    });

    //$(".additional-file-details").on("change", $("input.buy-link"), function (event) {
    //    var $buylink = $(event.target);
    //    var allValuesFilled = true;

    //    $(this).find("input.buy-link").each(function () {
    //        //If the current buylink input has no text in it
    //        if (!$(this).val().trim().length) {
    //            allValuesFilled = false;
    //            return;
    //        }
    //    });

    //    if (allValuesFilled) {
    //        //All buylinks are filled in so lets append another
    //        var $val = $buylink.next();
    //        var $buylinkAndVal = $val.andSelf().clone().insertAfter($val);
    //        $buylinkAndVal.val("");

    //        changeListBindings($(".additional-file-details"));
    //    }
    //});
}