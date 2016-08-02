//function jpPlayClick() {
//    initPlayer("jp-music");
//};

//$(".jp-fake-play").one("click", function() {
//    jpPlayClick();
//});

//$(document).on("click", ".jp-next", function() {
//    var nextFileStream = "";
//    nextFileStream = $("#" + id).closest(".container").nextAll(".container").first().find(".jp-jplayer").first();

//    if (nextFileStream.length > 0) {
//        nextFileStream.jPlayer("play");
//        $("#" + id).trigger($.jPlayer.event.ended);
//    }

//});

//$(document).on("click", ".jp-previous", function() {
//    var previousFileStream = "";
//    previousFileStream = $("#" + id).closest(".container").prevAll(".container").first().find(".jp-jplayer").first();

//    if (previousFileStream.length > 0) {
//        $("#" + id).trigger($.jPlayer.event.ended);
//        previousFileStream.jPlayer("play");
//    }
//});

//$(".fa-pencil").click(function() {
//    var index = $(".fa-pencil").index(this);
//    var id = $(this).attr("id");

//    $.ajax({
//        url: window.href.location + "/Upload/Edit",
//        method: "GET",
//        data: { id: id },
//        success: function(data) {
//            $("#report").hide().html(data).fadeIn();
//            $("#report").fadeIn();
//            $("#cover").fadeIn();
//        }
//    });
//});

//$(".fa-trash").click(function() {
//    var id = $(this).attr("id");

//    $("#delete-confirm").dialog({
//        resizable: false,
//        modal: true,
//        buttons: {
//            "Delete": function() {
//                $(this).dialog("close");
//                $.ajax({
//                    url: window.href.location + "/Upload/Delete",
//                    method: "POST",
//                    data: { id: id },
//                    success: function() {
//                        window.location.reload();
//                    }
//                });
//            },
//            Cancel: function() {
//                $(this).dialog("close");
//            }
//        }
//    });
//});