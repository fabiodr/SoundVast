import React from "react";
import {Motion, spring} from "react-motion";

export default function FooterPlayer (jPlayerPlaylist) {
    return (
        <div id={this.state.options.cssSelectorAncestor.slice(1)} class={this.state.stateClass}>
            <div class="jp-type-footer">
                <div class="jp-controls">
                    <a class="jp-play" style={this.state.playStyle} onClick={this.state.event.playOnClick}>
                        {/*Toggle between play and pause in css based on playing or not*/}
                        <i class="fa fa-play"></i>
                    </a>
                    <a class="jp-mute" onClick={this.state.event.muteOnClick}>
                        <i class="fa fa-volume-up"></i>
                    </a>
                    <a class="jp-repeat" onClick={this.state.event.repeatOnClick}>
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
                    <div class="jp-title">{this.state.title}</div>
                    <div class="jp-playback-rate-bar" style={this.state.playbackRateBarStyle} onClick={this.state.event.playbackRateBarOnClick}>
                        <div class="jp-playback-rate-bar-value" style={this.state.playbackRateBarValueStyle} />
                    </div>
                    <div class="jp-volume-bar" style={this.state.volumeBarStyle} onClick={this.state.event.volumeBarOnClick}>
                        <div class="jp-volume-bar-value" style={this.state.volumeBarValueStyle}></div>
                    </div>
                    <a class="jp-playlist-options">
                        <i class="fa fa-ellipsis-h"></i>
                        <i class="fa fa-comment"></i>
                    </a>
                </div>
                <div class="jp-progress">
                    <div class={this.state.seekBarClass} style={this.state.seekBarStyle} onClick={this.state.event.seekBarOnClick}>                         
                        <Motion style={{smoothWidth: spring(this.status.currentPercentAbsolute, [250])}}>
                            {(values) => <div class="jp-play-bar" style={{width: values.smoothWidth + "%"}} /> }
                        </Motion>
                        <div class="jp-current-time">{this.state.currentTimeText}</div>
                        <div class="jp-duration" onClick={this.state.event.durationOnClick}>{this.state.durationText}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}