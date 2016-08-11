function initRequestDeletion() {
    var $selectDir = $("input[value='Duplicate']").parent().next();

    $(".radio-button-list").change(function () {
        if ($("input[value='Duplicate']").prop("checked")) {
            $selectDir.fadeIn("fast");
        } else {
            $selectDir.fadeOut("fast");
        }
    });

    $selectDir.find("select").prepend("<option></option>");
    $selectDir.find("select").val('').trigger('change')
    $selectDir.find("select").select2({
        placeholder: "Select the fileStream that this fileStream is a duplicate of",
        allowClear: true,
        dropdownAutoWidth: true
    });
    $(".radio-button-list").trigger("change");
}