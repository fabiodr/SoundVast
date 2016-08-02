function changeBindings($elemsToSearchIn) {
    var regex = /[_\[]\d+[\]_]/g;

    for (var i = 0; i < $elemsToSearchIn.length; i++) {
        changeAttributes($elemsToSearchIn.eq(i).find("input"), i);
        changeAttributes($elemsToSearchIn.eq(i).find("select"), i);
        changeAttributes($elemsToSearchIn.eq(i).find("textarea"), i);
        changeAttributes($elemsToSearchIn.eq(i).find("span.field-validation-valid"), i);
    }

    function changeAttributes($elemsToChange, parentIndex) {
        $elemsToChange.each(function () {
            if (typeof ($(this).attr("name")) !== "undefined") {
                if (!regex.test($(this).attr("name"))) {
                    $(this).attr("name", "[" + parentIndex + "]." + $(this).attr("name"));
                } else {
                    $(this).attr("name", $(this).attr("name").replace(regex, "[" + parentIndex + "]"));
                }
            }

            if (typeof ($(this).attr("id")) !== "undefined") {
                if (!regex.test($(this).attr("id"))) {
                    $(this).attr("id", "_" + parentIndex + "__" + $(this).attr("id"));
                } else {
                    $(this).attr("id", $(this).attr("id").replace(regex, "_" + parentIndex + "_"));
                }
            }

            if (typeof ($(this).attr("data-valmsg-for")) !== "undefined") {
                if (!regex.test($(this).attr("data-valmsg-for"))) {
                    $(this).attr("data-valmsg-for", "[" + parentIndex + "]." + $(this).attr("data-valmsg-for"));
                } else {
                    $(this).attr("data-valmsg-for", $(this).attr("data-valmsg-for").replace(regex, "[" + parentIndex + "]"));
                }
            }
        });
    };
}

function changeListBindings($elemsToSearchIn) {
    //Replaces the last numbers index in the list
    var listRegex = /\d+(?![\s\S]*[\d+])/g;

    for (var i = 0; i < $elemsToSearchIn.length; i++) {
        var $elemToSearchIn = $elemsToSearchIn.eq(i);

        changeAttributes($elemToSearchIn.find($("input.dynamic-list")));
        changeAttributes($elemToSearchIn.find($("span.field-validation-valid.dynamic-list")));
    }

    function changeAttributes($elemsToChange) {
        $elemsToChange.each(function (j) {
            if (typeof ($(this).attr("name")) !== "undefined") {
                $(this).attr("name", $(this).attr("name").replace(listRegex, j));
            }

            if (typeof ($(this).attr("id")) !== "undefined") {
                $(this).attr("id", $(this).attr("id").replace(listRegex, j));
            }

            if (typeof ($(this).attr("data-valmsg-for")) !== "undefined") {
                $(this).attr("data-valmsg-for", $(this).attr("data-valmsg-for").replace(listRegex, j));
            }
        });
    }
}

function hasValue(obj, key, value) {
    return obj.hasOwnProperty(key) && obj[key] === value;
}

function formAjax($form, options) {
    $.ajax({
        url: $form.data().url,
        method: $form.attr("method"),
        data: $form.serialize(),
        success: options.success,
        statusCode: {
            400: function (jqXrh) {
                $form.html(jqXrh.responseText);
            }
        }
    });
}

$(function () {
    $(document).on("change", "textarea.resize", function () { }).keydown(autoSize).keyup(autoSize);
});

function autoSize() {
    // Copy textarea contents; browser will calculate correct height of copy,
    // which will make overall container taller, which will make textarea taller.
    $("textarea.resize").each(function () {
        var text = $(this).val().replace(/\n/g, "<br/>");
        $(this).next(".text-copy").html(text);
    });
}