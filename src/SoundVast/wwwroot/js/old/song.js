function initFileStream() {
    $(".fa-download").click(function () {
        window.location.href = $(this).data().url;
    });
}