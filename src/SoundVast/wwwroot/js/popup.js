function clearPopup() {
    //Clear the popup so that it doesn't show the other popup html content that was loaded before the server can give us the new content
    $("#popup").empty();
    $("#popup").fadeOut("fast");
    $("#popup").removeClass("popup-wide");
    $("#cover").fadeOut("fast");
}

function showPopup(data) {
    $("#popup").hide().html(data).fadeIn("fast");
    $("#cover").fadeIn("fast");
}

$("#cover").click(function () {
    clearPopup();
});

$(".close-popup-symbol").click(function () {
    clearPopup();
});