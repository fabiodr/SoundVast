var pageNumber = 2;
var noMoreData = false;
var inProgress = false;

$("#comments-sidebar").scroll(function () {
    var scrollTop = $("#comments-sidebar").scrollTop();
    var scrollHeight = $("#comments-sidebar").prop("scrollHeight");
    var innerHeight = $("#comments-sidebar").innerHeight();

    if ((scrollTop + innerHeight >= scrollHeight) && !noMoreData && !inProgress) {
        inProgress = true;          
        $.post($("#comments").data().url, { audioId: footerPlayer.playlist[footerPlayer.current].id, "pageNumber": pageNumber },
        function (data) {
            pageNumber = pageNumber + 1;
            noMoreData = data.NoMoreData;
            $("#comments").append(data.HtmlString);
            inProgress = false;
        });
    }
});