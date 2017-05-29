import React from "react";

export default class FooterContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="jp-type-footer">   
                    {this.props.children} 
                    {/*<JPlayerPlaylist ref={jPlayerPlaylist => this.jPlayerPlaylist = jPlayerPlaylist} {...this.state.jPlayerPlaylistOptions} updateOptions={this.updateOptions} />*/}
                </div>
            </div>
        );
    }
}