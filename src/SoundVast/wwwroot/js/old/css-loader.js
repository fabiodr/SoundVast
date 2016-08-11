//Use local CSS file as fallback if Bootstrap CDN fails
if ($('#bootstrap-fail-check').is(':visible') === true) {
    $('<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css" />').prependTo('head');
}
