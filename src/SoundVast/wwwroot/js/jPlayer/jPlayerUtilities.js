import merge from "lodash.merge";
import remove from "lodash/remove";
import get from "lodash/get";
import set from "lodash/set";

export const assignOptions = function(newOption, callback) {
    this.props.updateOptions((prevOptions) => Object.assign({}, prevOptions, newOption), callback);
}
export const mergeOptions = function(newOption, callback) {
    this.props.updateOptions((prevOptions) => merge({}, prevOptions, newOption), callback);
}
export const modifyOptionsArray = function(newOptions, arrayMethod, key, callback) {
    const handleNewOptions = (prevOptions = []) => arrayMethod.call(prevOptions, newOptions);

    this.props.updateOptions((prevOptions) => Object.assign({}, prevOptions, {[key]: handleNewOptions(prevOptions[key])}), callback);
}
export const addClass = function(classToAdd, key) {
    //Use function overload of setState to make sure we have up to date values
    this.props.updateOptions((prevOptions) => {	      
        const prevObject = get(prevOptions, key, []);
        const found = prevObject.some((v) => v === classToAdd); 

        //Don't add duplicates or empty strings
        if (!found && classToAdd !== undefined) {
            set(prevOptions, key, [...prevObject, classToAdd]);    
        }
         return prevOptions;
    });
}
export const removeClass = function(classToRemove, key) {
    this.props.updateOptions((prevOptions) => {
        remove(prevOptions, key, classToRemove);
        return prevOptions;
    });
}
export const assignStyle = function(newOption, styleKey, callback) { 
    this.setState((prevState) => prevState[styleKey] = Object.assign({}, prevState[styleKey], newOption), callback);
}
export const key = {
    functions: "functions",
    overrideFunctions: "overrideFunctions",
    stateClass: "status.stateClass"
}
export const className = {
    hidden: "jp-hidden"
}