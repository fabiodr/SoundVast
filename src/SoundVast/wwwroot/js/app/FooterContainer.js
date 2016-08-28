import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import JPlayerPlaylist from "../jPlayer/JPlayerPlaylist";
import FooterPlayer from "./FooterPlayer";

class FooterContainer extends React.Component {
    constructor(){
        super();
        
        this.state = {
            jPlayerPlaylistOptions: {
                jPlayerSelector: "#jplayer_footer_player",
                cssSelectorAncestor: "#jp_container_footer_player",    
                supplied: "mp3",
                ready: function(){
                    this.setMedia({
                        title: "Bubble",
                        artist:"The Stark Palace",
                        mp3: "http://jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
                        poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
                    });
                }
            }
        };
    }
    render() {
        return (
            <footer>     
                <JPlayerPlaylist jPlayerPlaylistOptions={this.state.jPlayerPlaylistOptions}>
                    <FooterPlayer />
                </JPlayerPlaylist>
            </footer>
        );
    }
}

export default connect()(FooterContainer);