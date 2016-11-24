import React from "react";

export const jPlayerWrapper = (WrappedPlayer, options) => class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jPlayerOptions: options
        }
    }
    updateOptions = (update, callback) => {debugger; return this.setState((prevState) => prevState.jPlayerOptions = update(prevState.jPlayerOptions), callback)};
    render() {
        return <WrappedPlayer {...this.state.jPlayerOptions} updateOptions={this.updateOptions} />
    }
}