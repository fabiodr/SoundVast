$(".dl_OtherFileStreams").select2({
    placeholder: "Add related fileStreams",
    allowClear: true
});

$(".dl_OtherFileStreams").on("change", function(e) {
    var ids = [];

    $("select[name=OtherFileStreams] option:selected").each(function() {
        ids = $(this).data().fileStream;
    });

    $.ajax({
        url: window.rootAction + "AddRelatedFileStream",
        data: { fileStreamsToAddId: ids },
        method: "GET",
        success: function(data) {
            $("#tab-content").replaceWith(data);
        }
    });
});