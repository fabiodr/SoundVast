function incrementViews($viewCounts) {
    var id = $(this).find("input#Id").val();

    if (typeof (Storage) !== "undefined" && !localStorage.getItem("HasUserAlreadySeen_" + id)) {
        $.ajax({
            url: $viewCounts.data().url,
            method: "post",
            dataType: "json",
            success: function (data) {
                $viewCounts.first().text(data.UniqueViews);
                localStorage.setItem("HasUserAlreadySeen_" + id, true);
            }
        });
    }
}

function initFrontpageAudio() {
    $("#sorting-text").html($("script[type='text/SortingText-template']").html());

    $(".audio-wrapper .controls .fa-arrow-up").click(function () {
        rate($(this), $(this).siblings(".fa-arrow-down"), $(this).data().url);
    });
    $(".audio-wrapper .controls .fa-arrow-down").click(function () {
        rate($(this), $(this).siblings(".fa-arrow-up"), $(this).data().url);
    });

    $(".controls .fa-flag").click(function () {
        $.ajax({
            url: $(this).data().url,
            success: function (data) {
                $("#popup").hide().html(data).fadeIn();
                $("#cover").fadeIn();
                $("#popup").addClass("popup-wide");
                initRequestDeletion();
            }
        });
    });

    $(".controls .fa-plus").click(function () {
        $.ajax({
            url: $(this).data().url,
            success: function (data) {
                $("#popup").hide().html(data).fadeIn();
                $("#cover").fadeIn();
                $("#popup").addClass("popup-wide");
                initCreatePlaylist();
            }
        });
    });

    $(".controls .fa-download").click(function () {
        window.location.href = $(this).data().url;
    });

    $(".poster-wrapper").hover(function () {
        $(this).children(".controls").slideDown("fast");
        $(this).find(".fa-play").fadeIn("fast");
        $(this).addClass("hovered");
    }, function () {
        $(this).children(".controls").slideUp("fast");
        $(this).find(".fa-play").fadeOut("fast");
        $(this).removeClass("hovered");
    });

    $(".audio-wrapper").on("click", ".fa-play", function (e) {
        var audioId = $(e.delegateTarget).data("audio-id");

        //There is no jPlayer instansiated
        if (typeof (footerPlayer) === "undefined") {
            initPlayer($(e.delegateTarget).data("playlist-url"), initFooterPlayer);
            return;        
        }
        else {
            changeOrPlayPlayer(footerPlayer, $(e.delegateTarget).data("playlist-url"), audioId);
        }
    });

    $(".audio-wrapper").on("click", ".fa-pause", function () {
        $(footerPlayer.cssSelector.jPlayer).jPlayer("pause");
    });

    $(".rating.title, .commented.title, .played.title").click(function () {
        $(this).next().fadeToggle("fast");
    });

    $(".title").parent().mouseleave(function () {
        $(this).children(".menu").fadeOut("fast");
    });

    $("#body-header .fa-random").click(function () {
        var $audioWrappers = $(".audio-wrapper");
        var allAudiosLength = $audioWrappers.length;
        var rnd = Math.floor(Math.random() * allAudiosLength);

        if (allAudiosLength <= 0)
            return;

        //There is no jPlayer instansiated
        if (typeof (footerPlayer) === "undefined") {
            initPlayer($(".audio-wrapper").eq(rnd).data("playlist-url"), initFooterPlayer);
            return;
        }
        else {
            changeOrPlayPlayer(footerPlayer, $(".audio-wrapper").eq(rnd).data("playlist-url"), $(".audio-wrapper").eq(rnd).data("audio-id"))
        }
    });

    $(".ratings-container").each(function (i, object) {
        calcRatingsBar(object);
    });
}