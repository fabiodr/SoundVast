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
                html: {
                    //Toggle between play and pause in css based on playing or not
                    play: <i className="fa fa-play"></i>,
                    mute: <i className="fa fa-volume-up"></i>,
                    fullScreen: <i className="fa fa-expand"></i>,
                    repeat: <div><i className="fa fa-repeat"></i><i className="fa fa-bars"></i></div>,
                    shuffle: <i className="fa fa-random"></i>,
                    previous: <i className="fa fa-step-backward"></i>,
                    next: <i className="fa fa-step-forward"></i>,
                    playlistOptions: <div><i className="fa fa-ellipsis-h"></i><i className="fa fa-comment"></i></div>
                },      
                smoothPlayBar: true,
                muted: true,
                enableRemoveControls: true,
                loopOnPrevious: true,
                sizeFull: {
                    width: "90%",
                    height: "90%"
                },
                size: {
                    width: 300,
                    height: 200
                },
                keyEnabled: true,
                playlist: [
                    {
                        title:"Cro Magnon Man",
                        artist:"The Stark Palace",
                        mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
                        poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png",
                        free: true
                    },
                    {
                        title:"Tempered Song",
                        artist:"Miaow",
                        mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
                        oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
                        poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png",
                        free: true
                    },
                    {
                        title:"Das Song",
                        artist:"Miaow",
                        mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
                        oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
                        poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
                    },
                    {
                        title:"Song",
                        artist:"Miaow",
                        mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
                        oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
                        poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png",
                        free: true
                    }
                ],
                onError: (jPlayer) => console.error(jPlayer.error)       
            }
        };
    }
    test = () => {
        document.addEventListener("keydown", (e) => {   
			if (e.keyCode == '38') {
				this.setState(previousState => previousState.jPlayerPlaylistOptions = Object.assign({}, previousState.jPlayerPlaylistOptions, {functions: ["play"]})); 
			}		
		});     
    }
    updateOptions = (update) => update.call(this);
    componentDidMount() {
        this.test();
    }
    render() {
        return (
            <div>
                <div className="jp-type-footer" >
                    <JPlayerPlaylist ref={jPlayerPlaylist => this.jPlayerPlaylist = jPlayerPlaylist} {...this.state.jPlayerPlaylistOptions} updateOptions={this.updateOptions} updateOptionsd={this.updateOptionsd} />
                </div>
            </div>
        );
    }
}

export default connect()(FooterContainer);