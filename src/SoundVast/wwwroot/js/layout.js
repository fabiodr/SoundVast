Dropzone.autoDiscover = false;
var footerPlayer;

$(function () {
    //$(document).ajaxError(function (e, xhr, settings, exception) {
    //    e.stopPropagation();

    //    if (xhr.status == 403) {
    //        var response = $.parseJSON(xhr.responseText);
    //        location = response.logInUrl;
    //    }
    //    else {
    //        location = $("#InternalServerError").val();
    //    }
    //});

    $("#logout-form").find("a").click(function () {
        $(this).closest("#logout-form").submit();
    });

    $("[data-toggle=\"tooltip\"]").tooltip();

    $(".misc-links").mouseenter(function () {
        $(this).children("ul.menu").fadeIn("fast");
    });

    $(".misc-links").mouseleave(function () {
        if (!($(".misc-links").is(":hover")) &&
            !($(".misc-links > .menu").is(":hover"))) {
            $(".misc-links > .menu").fadeOut("fast");
        }
    });

    $(".user-links").mouseenter(function () {
        $(this).children("ul.menu").fadeIn("fast");
    });

    $(".user-links, .user-links + .menu").mouseleave(function () {
        if (!($(".user-links").is(":hover")) &&
            !($(".user-links > .menu").is(":hover"))) {
            $(".user-links > .menu").fadeOut("fast");
        }
    });

    $(".jp-playlist-options .fa-ellipsis-h").click(function () {
        $(".jp-playlist").fadeToggle();
        $(this).toggleClass("clicked-button");
    });

    $(".jp-playlist-options .fa-comment").click(function () {
        $("#comments-sidebar").fadeToggle();
        $(this).toggleClass("clicked-button");
    });

    $(".jp-playlist").on("click", ".jp-playlist-item-remove", function () {
        if (footerPlayer.current === $(".jp-playlist-item-remove").index(this)) {
            var $audioWrapper = $(".audio-wrapper[data-audio-id=" + footerPlayer.playlist[footerPlayer.current].id + "]");

            $audioWrapper.find(".fa-pause").switchClass("fa-pause", "fa-play", 0).hide();
        }
    });

    $("#comments-sidebar").on("click", ".fa-arrow-up", function () {
        rate($(this), $(this).siblings(".fa-arrow-down"), $(this).data().url);
    });

    $("#comments-sidebar").on("click", ".fa-arrow-down", function () {
        rate($(this), $(this).siblings(".fa-arrow-up"), $(this).data().url);
    });

    ajaxLinkRegister(".nav-link.logo");
    ajaxLinkRegister(".nav-link.audio", initFrontpageAudio);
    ajaxLinkRegister(".nav-link.live-stream", initLiveStream);
    ajaxLinkRegister(".nav-link.upload", initUploadAudio);
    ajaxLinkRegister(".nav-link.profile", initProfile);
    ajaxLinkRegister(".nav-link#login-link");
    ajaxLinkRegister(".nav-link#register-link");
    ajaxLinkRegister(".nav-link.about-us");
    ajaxLinkRegister(".nav-link.privacy");
    ajaxLinkRegister(".nav-link.copyright");
    ajaxLinkRegister(".nav-link.terms-of-use");

    function ajaxLinkRegister(selector, initFunction) {
        $(selector).click(function (e) {
            e.preventDefault();

            $.get($(this).attr("href"), function (data) {
                $("#body-content").html(data);
                updateHistory(e.currentTarget.pathname);

                if (typeof (initFunction) !== "undefined") {
                    initFunction();
                }
            });
        });
    }
});

function initFooterPlayer(playlistData) {
    window.footerPlayer = new jPlayerPlaylistExtended({
        jPlayer: "#jquery_jplayer_footer_player",
        cssSelectorAncestor: "#jp_container_footer_player",
        cssPlaylistOptionsSelector: "#jp_container_playlist"
    }, playlistData, {
        playlistOptions: {
            enableRemoveControls: true,
            shuffleOnLoop: true,
            removeTime: 0,
            displayTime: 0,
            addTime: 0,
            shuffleTime: 0,
            autoPlay: true
        },
        swfPath: "~Scripts/Jplayer/jquery.jplayer.swf",
        useStateClassSkin: true,
        keyEnabled: true,
        muted: true,
        loop: "off",
        preload: "metadata",
        ready: function () {
            changeShuffleIcon(footerPlayer);
            changeRepeatIcon(footerPlayer);
            changeVolumeIcon($("#jquery_jplayer_footer_player").data().jPlayer);

            $(".jp-type-footer .jp-shuffle").click(function () {
                changeShuffleIcon(footerPlayer);
            });

            $(".jp-type-footer .jp-repeat").click(function () {
                changeRepeatIcon(footerPlayer);
            });

            $(".jp-playlist-options .fa-ellipsis-h").click();
            $(".jp-playlist-options .fa-comment").click();
            $("#jp_container_footerPlayer, footer").slideDown(400);
        },
        play: function () {
            var $audioWrapper = $(".audio-wrapper[data-audio-id=" + footerPlayer.playlist[footerPlayer.current].id + "]");

            $(".audio-wrapper").find(".fa-pause").switchClass("fa-pause", "fa-play", 0).hide();
            $(".audio-wrapper").find(".poster-wrapper").not(".hovered").find(".fa-play").hide();

            $audioWrapper.find(".fa-play").switchClass("fa-play", "fa-pause", 0).show();
        },
        pause: function () {
            var $audioWrapper = $(".audio-wrapper[data-audio-id=" + footerPlayer.playlist[footerPlayer.current].id + "]");

            $audioWrapper.find(".fa-pause").switchClass("fa-pause", "fa-play", 0);
        },
        error: function (event) {
            console.log(event.jPlayer.error);
            console.log(event.jPlayer.error.type);
        },
        loadstart: function () {
            $("#comments-sidebar").html($("script[type='text/loading-template']").html());
            var $loading = $("#comments-sidebar").find(".loading");

            $.ajax({
                url: footerPlayer.playlist[footerPlayer.current].comment,
                method: "post",
                beforeSend: function () {
                    $loading.show();
                },
                complete: function () {
                    $loading.hide();
                },
                success: function (data) {
                    $("#comments-sidebar").html(data);
                    commentsInit(footerPlayer.playlist[footerPlayer.current].id);
                }
            });
        },
        volumechange: function () {
            changeVolumeIcon($("#jquery_jplayer_footer_player").data().jPlayer);
        }
    });
}

function changePlayOrInitPlayer(jPlayerPlaylist, url, audioId, initjPlayerPlaylistFunc) {
    //There is no jPlayer instansiated
    if (typeof (jPlayerPlaylist) === "undefined") {
        $.ajax({
            url: url,
            method: "post",
            success: function (data) {
                initjPlayerPlaylistFunc(data);
            }
        });
        return;
    }

    //If the audio the user clicked is already in the playlist then play it, else change playlists
    var current = $.grep(jPlayerPlaylist.playlist, function (o, i) {
        //Same audio
        if (jPlayerPlaylist.current === i && o.id === audioId) {
            $(jPlayerPlaylist.cssSelector.jPlayer).jPlayer("play");
            return o;
        }
            //Different audio
        else if (o.id === audioId) {
            jPlayerPlaylist.play(i);
            return o;
        }
    });

    //Audio that the user clicked on is not in the playlist
    if (!current.length) {
        $.ajax({
            url: url,
            method: "post",
            success: function (data) {
                jPlayerPlaylist.setPlaylist(data);
            }
        });
    }
}

function changeShuffleIcon(jPlayerPlaylist) {
    var $shuffled = $(jPlayerPlaylist.cssSelector.cssSelectorAncestor).find(".jp-shuffle .fa-random");

    if (jPlayerPlaylist.shuffled) {
        $shuffled.addClass("clicked-button");
    } else {
        $shuffled.removeClass("clicked-button");
    }
}

function changeRepeatIcon(jPlayerPlaylist) {
    var $repeat = $(jPlayerPlaylist.cssSelector.cssSelectorAncestor).find(".jp-repeat .fa-repeat");
    var $playlistBars = $(jPlayerPlaylist.cssSelector.cssSelectorAncestor).find(".jp-repeat .fa-bars");

    if (jPlayerPlaylist.loop === "loop") {
        $repeat.addClass("clicked-button");
    } else if (jPlayerPlaylist.loop === "loop-playlist") {
        $playlistBars.show();
    }
    else {
        $repeat.removeClass("clicked-button");
        $playlistBars.hide();
    }
}

function changeVolumeIcon(jPlayer) {
    var $mute = $(jPlayer.ancestorJq.selector).find(".jp-mute").children();
    var volumeValue = jPlayer.options.volume;
    var muted = jPlayer.options.muted;

    if (muted || volumeValue <= 0) {
        $mute.removeClass();
        $mute.addClass("fa fa-volume-off");
    } else if (volumeValue < 0.5) {
        $mute.removeClass();
        $mute.addClass("fa fa-volume-down");
    } else {
        $mute.removeClass();
        $mute.addClass("fa fa-volume-up");
    }
}

function calcRatingsBar(ratingsContainer) {
    var $likeBar = $(ratingsContainer).find(".like-bar");
    var $dislikeBar = $(ratingsContainer).find(".dislike-bar");
    //   var $arrowUp = $(object).find(".fa-arrow-up");
    //   var $arrowDown = $(object).find(".fa-arrow-down");

    var likes = $likeBar.data().likes;
    var dislikes = $dislikeBar.data().dislikes;
    var likePercent = likes / (likes + dislikes) * 100;
    var dislikePercent = dislikes / (likes + dislikes) * 100;

    //Dividing by 0 equals NaN, so convert to 0 instead
    if (isNaN(likePercent)) {
        likePercent = 0;

        //Neither have been voted on, so show dislikeBar instead by setting 
        //the percent to 100
        if (isNaN(dislikePercent)) {
            dislikePercent = 100;
        }
    }

    ////If the user has liked the fileStream
    //if ($arrowUp.data().rating === 1) {
    //    $(this).addClass("clicked");
    //} else {
    //    $(this).removeClass("clicked");
    //}

    //if ($arrowDown.data().rating === -1) {
    //    $(this).addClass("clicked");
    //} else {
    //    $(this).removeClass("clicked");
    //}

    $likeBar.css("width", likePercent + "%");
    $dislikeBar.css("width", dislikePercent + "%");

    //prepend it so we don't overwrite the fa icon
    $(ratingsContainer).prev(".like-percentage").prepend(likePercent + "%");
}

function rate($elem, $otherElem, url) {
    $.ajax({
        url: url,
        method: "post",
        dataType: "json",
        success: function (data) {
            $elem.siblings(".likes").html(data.Likes);
            $elem.siblings(".dislikes").html(data.Dislikes);

            if ($elem.hasClass("clicked")) {
                //User has already rated, so set color to default
                $elem.removeClass("clicked");
            } else {
                //Already rated, so change rating colour to default
                if ($otherElem.hasClass("clicked"))
                    $otherElem.removeClass("clicked");

                //User has not liked, so set colour to new colour
                $elem.addClass("clicked");
            }
        }
    });
}

function initUnobValidation() {
    $("form").each(function () {
        $(this).removeData("validator");
        $(this).removeData("unobtrusiveValidation");
        $.validator.unobtrusive.parse(this);
        $.validator.setDefaults({ ignore: null });
    });
}