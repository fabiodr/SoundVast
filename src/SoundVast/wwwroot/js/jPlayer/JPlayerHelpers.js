import update from "react-addons-update";

export default {
    updateOptions: function({key = "", callback}={}, ...newOptions) {
        setState(() => newOptions.forEach((v) => v), key, callback);
    },
    updateFunctions: function({key = "", callback}={}, ...newFunctions) {
        setState(() => newFunctions.forEach((v) => update(this.jPlayerPlaylistOptions[key], {$push: v})), key, callback);
    }
};

function setState (key, callback, ...newValues) {  
    this.setState((previousState) => previousState.jPlayerPlaylistOptions[key] = Object.assign({}, previousState.jPlayerPlaylistOptions[key], () => newValue()), callback);
}