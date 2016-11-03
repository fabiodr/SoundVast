export default {
    updateOptions: function(newOption, callback) {
        this.props.updateOptions(function() {
            this.setState((prevState) => prevState.jPlayerPlaylistOptions = Object.assign({}, prevState.jPlayerPlaylistOptions, newOption), callback);
        });
    },
    concatOptionsArray: function(newOptionsArray, key, callback) {
        const newOptionsCallback = (prevOptionsArray = []) => prevOptionsArray.concat(newOptionsArray);

        this.props.updateOptions(function() {
            this.setState((prevState) => prevState.jPlayerPlaylistOptions = Object.assign({}, prevState.jPlayerPlaylistOptions, {[key]: newOptionsCallback(prevState.jPlayerPlaylistOptions[key])}), callback);
        });
    },
    functionsKey: "functions",
    overrideFunctionsKey: "overrideFunctions"
};