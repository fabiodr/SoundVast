import merge from "lodash.merge";
import filter from "lodash/filter";

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
        debugger
        var prevObject = byString(prevOptions, key);
        var object = byString(this.props, key);
        var found = prevObject.some((el) => el === classToAdd);

        //Don't add duplicates or empty strings
        if (!found && classToAdd) {
            byString(prevOptions, key, [...prevObject, classToAdd]);
            return prevOptions;
        }
    });
}
export const removeClass = function(classToRemove, key) {
    this.props.updateOptions((prevOptions) => {
        debugger; 
        var prevObject = byString(prevOptions, key);
        var object = byString(this.props, key);

        return object = prevObject.filter((el) => el !== classToRemove);
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

const byString = (o, s, newValue) => {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
debugger
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (newValue !== undefined) {
            o[k] = newValue;
        }
        else if (k in o) {
            o = o[k];
        } else {
            i + 1 === n ? o[k] = [] : {};
            o = o[k];
        }
    }
    return o;
}