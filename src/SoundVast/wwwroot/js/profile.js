function initProfile() {
    $(".playlist-cover").click(function () {
        initFooterPlayer($(this).data().url);
    });
}