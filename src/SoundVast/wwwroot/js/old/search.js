$(function () {
    $.ajax({
        url: $("form#search").children("input[type='hidden']").first().val(),
        method: "post",
        datatype: "json",
        success: function (data) {
            $("input[type=search]").catcomplete({
                source: data,
              //  appendTo: "#filter",
                minLength: 1,
                open: function () {
                    $("#filter > ul").css({
                        width: $("#filter").outerWidth(),
                        left: $("#filter").offset().left,
                        top: $("#filter").position().top + $("#filter").outerHeight()
                    });
                }
            });
        }
    });
});

$("form#search").submit(function (e) {
    e.preventDefault();

    $.get(this.action, $(this).serialize()).success(function (data) {
        $("#body-content").html(data);
        updateHistory(this.url);
    });
});

$("#filter div").click(function () {
    if ($(this).hasClass("filter-clicked")) {
        $("input#SelectedFilter").val("None");
    } else {
        $("input#SelectedFilter").val($(this).text().trim());
    }

    $(this).toggleClass("filter-clicked");
    $(this).siblings().removeClass("filter-clicked");
});

$("input[type=search]").focusin(function () {
    $(this).addClass("search-focus");
    $(this).attr("placeholder", "Search. Select the filters below to narrow the search.");
    $(this).next().show();
});

$(document).click(function (event) {
    if (!$(event.target).closest("#filter").length && !$(event.target).is("#filter") && !$(event.target).is("input[type=search]")) {
        if ($("#filter").is(":visible")) {
            hideSearch();
        }
    }
});

function hideSearch() {
    $("input[type=search]").next().hide();
    $("input[type=search]").removeClass("search-focus");
    $("input[type=search]").delay(200).queue(function (next) {
        $("input[type=search]").attr("placeholder", "Search");
        next();
    });
}

$(".fa-search").click(function () {
    $("form#search").submit();
    return false;
});