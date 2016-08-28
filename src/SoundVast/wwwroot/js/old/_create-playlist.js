
function initCreatePlaylist() {
    $("select").select2({
        allowClear: true,
        dropdownAutoWidth: true
    });

    initUnobValidation();
}