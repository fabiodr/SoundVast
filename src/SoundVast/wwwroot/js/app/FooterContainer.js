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
                    play: <i class="fa fa-play"></i>,
                    mute: <i class="fa fa-volume-up"></i>,
                    fullScreen: <i class="fa fa-expand"></i>,
                    repeat: <div><i class="fa fa-repeat"></i><i class="fa fa-bars"></i></div>,
                    shuffle: <i class="fa fa-random"></i>,
                    previous: <i class="fa fa-step-backward"></i>,
                    next: <i class="fa fa-step-forward"></i>,
                    playlistOptions: <div><i class="fa fa-ellipsis-h"></i><i class="fa fa-comment"></i></div>
                },      
                smoothPlayBar: true,
                muted: true,
                autoPlay: true,
                enableRemoveControls: true,
                loopOnPrevious: true,
                // shuffleAnimationConfig: {
                //     stiffness: 220, 
                //     damping: 14
                // },
                // displayAnimationConfig: {
                //     stiffness: 2, 
                //     damping: 20
                // },
                // removeAnimationConfig: {
                //     stiffness: 220, 
                //     damping: 14
                // },
                // addAnimationConfig: {
                //     stiffness: 2, 
                //     damping: 20
                // },
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
    render() {
        return (
            <div class="jp-type-footer" >
                <JPlayerPlaylist {...this.state.jPlayerPlaylistOptions} />
            </div>
        );
    }
}

export default connect()(FooterContainer);