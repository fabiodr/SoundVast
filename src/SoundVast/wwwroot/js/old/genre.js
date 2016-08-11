function initGenre() {
    $(".genre-image").parent().click(function (e) {
        e.preventDefault();

        $.get($(this).attr("href")).success(function (data) {
            $("#body-content").html(data);
            updateHistory(e.currentTarget.pathname);
        });
    });
}