import React from "react";

import FooterPlayer from "../jPlayer/JPlayerPlaylist";
import JPlayerPlaylistStore from "../../stores/JPlayerPlaylistStore";

export default class FooterOld extends React.Component {
    constructor(){
        super();
        this.state = {
            selectors: {
                jPlayer: "#jquery_jplayer_footer_player",
                cssSelectorAncestor: "#jp_container_footer_player"
            },
            selectors2: {
                jPlayer: "#jquery_jplayer_footer_player2",
                cssSelectorAncestor: "#jp_container_footer_player2"
            }
        };
    }
    componentDidMount(){
        $(this.state.selectors.jPlayer).on($.jPlayer.event.loadeddata, function(){
            $("footer").slideDown(400);
        });
    }
    render(){
        return (<div> <FooterPlayer {...this.state.selectors} jpType={"jp-type-footer"} />
         <FooterPlayer {...this.state.selectors2} jpType={"jp-type-footer"} />
          </div>);
    }
}