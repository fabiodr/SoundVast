import merge from "lodash.merge";

export default {
    updateOptions: function(newOption, callback) {
        this.props.updateOptions((prevJPlayerOptions) => Object.assign({}, prevJPlayerOptions, newOption), callback);
    },
    mergeOptions: function(newOption, callback) {
        this.props.updateOptions((prevJPlayerOptions) => merge({}, prevJPlayerOptions, newOption), callback);
    },
    modifyOptionsArray: function(newOptions, arrayMethod, key, callback) {
        const handleNewOptions = (prevOptions = []) => arrayMethod.call(prevOptions, [newOptions]);

        this.props.updateOptions((prevJPlayerOptions) => Object.assign({}, prevJPlayerOptions, {[key]: handleNewOptions(prevJPlayerOptions[key])}), callback);
    },
    addClass: function(classToAdd, key) {
		//Use function overload of setState to make sure we have up to date values
		this.setState(previousState => {		
            if (previousState[key] === undefined) {
                previousState[key] = [];
            }
			var found = previousState[key].some((el) => el === classToAdd);

			//Don't add duplicates or empty strings
			if (!found && classToAdd) {
				return {[key]: [...previousState[key], classToAdd]};
			}
		});
    },
    removeClass: function(classToRemove, key) {
		this.setState(previousState => ({[key]: previousState[key].filter((el) => el !== classToRemove)}));
    },
    key: {
        functions: "functions",
        overrideFunctions: "overrideFunctions",
        stateClass: "stateClass",
        volumeBarClass: "volumeBarClass",
        volumeBarValueClass: "volumeBarValueClass",
        volumeMaxClass: "volumeMaxClass",
        playbackRateBarClass: "playbackRateBarClass",
        playbackRateBarValueClass: "playbackRateBarValueClass",
        seekBarClass: "seekBarClass",
        noSolutionClass: "noSolutionClass",
        posterClass: "posterClass",
        videoClass: "videoClass",
        videoPlayClass: "videoPlayClass"
    },
    className: {
        hidden: "jp-hidden",
        seeking: "jp-seeking-bg",
    }
};

export const JPlayerPlaylistHelpers = {
    key: {
        playlist: "playlist",
        detailsClass: "detailsClass",
        shuffleOffClass: "shuffleOffClass"
    },
    className: {
        currentMedia: "jp-playlist-current"
    }
}