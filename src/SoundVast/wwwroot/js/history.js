var manualStateChange = true;

$(function () {
    var history = window.History;
    var state;

    if (history.enabled) {
        state = history.getState();
        // set initial state to first page that was loaded
        history.pushState({ urlPath: window.location.pathname }, state.title, state.urlPath);

    } else {
        return false;
    }

    History.Adapter.bind(window, "statechange", function () {
        if (manualStateChange === true) {
            state = History.getState();

            $.ajax({
                url: window.location.href,
                method: "get",
                success: function (data) {
                    $("#body-content").html(data);

                    //if (!$(footerPlayer.cssSelector.jPlayer).data().jPlayer.status.paused) {
                    //    var $audioWrapper = $(".audio-wrapper[data-audio-id=" + footerPlayer.playlist[footerPlayer.current].id + "]");
                    //    $audioWrapper.find(".fa-play").switchClass("fa-play", "fa-pause", 0).show();
                    //}
                }
            });

            History.log(state);
        }

        manualStateChange = true;
    });
});

function updateHistory(path) {
    clearPopup();

    //if (!$(footerPlayer.cssSelector.jPlayer).data().jPlayer.status.paused) {
    //    var $audioWrapper = $(".audio-wrapper[data-audio-id=" + footerPlayer.playlist[footerPlayer.current].id + "]");
    //    $audioWrapper.find(".fa-play").switchClass("fa-play", "fa-pause", 0).show();
    //}

    pushState(path);
};

function pushState(target) {
    manualStateChange = false;
    History.pushState(null, $("input#Title").val(), target);
}