export default {
    updateOptions: function(newOption, callback) {
        this.props.updateOptions(function() {
            this.setState((prevState) => prevState.jPlayerPlaylistOptions = Object.assign({}, prevState.jPlayerPlaylistOptions, newOption), callback);
        });
    },
    addFunctions: function(newFunctions, callback) {
        const newFunctionsCallback = (prevFunctionArray = []) => prevFunctionArray.concat(newFunctions);

        this.props.updateOptions(function() {
            this.setState((prevState) => prevState.jPlayerPlaylistOptions = Object.assign({}, prevState.jPlayerPlaylistOptions, {functions: newFunctionsCallback(prevState.jPlayerPlaylistOptions.functions)}), callback);
        });
    }
};