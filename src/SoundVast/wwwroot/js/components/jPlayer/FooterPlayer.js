import React from "react";

export default class FooterPlayer extends React.Component {
    render(){
        return (
          <div>
              <div id="jquery_jplayer_footer_player" class="jp-jplayer"></div>
              <div id="jp_container_footer_player" class="jp-audio">
                 <div class="jp-type-footer">
                    <div class="jp-controls">
                        <a class="jp-play">
                            <i class="fa fa-play"></i>
                        </a>
                        <a class="jp-pause">
                            <i class="fa fa-pause"></i>
                        </a>
                        <a class="jp-mute">
                            <i class="fa fa-volume-up"></i>
                        </a>
                        <a class="jp-repeat">
                            <i class="fa fa-bars"></i>
                            <i class="fa fa-repeat"></i>
                        </a>
                        <a class="jp-shuffle">
                            <i class="fa fa-random"></i>
                        </a>
                        <a class="jp-previous">
                            <i class="fa fa-step-backward"></i>
                        </a>
                        <a class="jp-next">
                            <i class="fa fa-step-forward"></i>
                        </a>
                        <div class="jp-volume-bar">
                            <div class="jp-volume-bar-value"></div>
                        </div>
                        <a class="jp-playlist-options">
                            <i class="fa fa-ellipsis-h"></i>
                            <i class="fa fa-comment"></i>
                        </a>
                    </div>
                    <div class="jp-progress">
                        <div class="jp-seek-bar">
                            <div class="jp-play-bar"></div>
                            <div class="jp-current-time"></div>
                            <div class="jp-duration"></div>
                        </div>
                     </div>
                     <div class="jp-no-solution">
                        Media Player Error
                        <br />
                        Update your browser or Flash plugin
                     </div>
                 </div>
              </div>
          </div>
        );
    }
}