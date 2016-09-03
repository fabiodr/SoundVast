import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import JPlayerPlaylist from "../jPlayer/JPlayerPlaylist";

class FooterContainer extends React.Component {
    constructor(){
        super();
        
        this.state = {
            jPlayerPlaylistOptions: {
                jPlayerSelector: "#jplayer_footer_player",
                cssSelectorAncestor: "#jp_container_footer_player",
                cssClassAncestor: "jp-type-footer",
                smoothPlaybar: true,
                muted: true,
                loop: false,
                sizeFull: {
                    width: "90%",
                    height: "90%"
                },
                size: {
                    width: 300,
                    height: 200
                },
                html: {
                    //Toggle between play and pause in css based on playing or not
                    play: <i class="fa fa-play"></i>,
                    mute: <i class="fa fa-volume-up"></i>,
                    fullScreen: <i class="fa fa-expand"></i>,
                    repeat: <div><i class="fa fa-repeat"></i><i class="fa fa-bars"></i></div>,
                },
                ready: function(){
                    this.setMedia({
                        title: "Bubble",
                        artist: "The Stark Palace",
                        mp3: "http://jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
                        poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
                    });
                },
                error: function(e){
                    console.error(e.jPlayer.error);
                }
            }
        };
    }
    test(){
        this.setState(previousState => previousState.jPlayerPlaylistOptions = Object.assign({}, previousState.jPlayerPlaylistOptions, {loop: !previousState.jPlayerPlaylistOptions.loop}));
    }
    render() {
        return (
            <div>
                <div onClick={this.test.bind(this)}>Click Me</div>
                <JPlayerPlaylist jPlayerPlaylistOptions={this.state.jPlayerPlaylistOptions} />
            </div>
        );
    }
}

export default connect()(FooterContainer);