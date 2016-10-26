import React from "react";
import {Motion, spring} from "react-motion";

export default function FooterPlayer (jPlayerPlaylist) {
    return (
        <div id={this.state.options.cssSelectorAncestor.slice(1)} className={this.state.stateClass}>
            <div className="jp-type-footer">
                <div className="jp-controls">
                    <a className="jp-play" style={this.state.playStyle} onClick={this.state.event.playOnClick}>
                        {/*Toggle between play and pause in css based on playing or not*/}
                        <i className="fa fa-play"></i>
                    </a>
                    <a className="jp-mute" onClick={this.state.event.muteOnClick}>
                        <i className="fa fa-volume-up"></i>
                    </a>
                    <a className="jp-repeat" onClick={this.state.event.repeatOnClick}>
                        <i className="fa fa-bars"></i>
                        <i className="fa fa-repeat"></i>
                    </a>
                    <a className="jp-shuffle">
                        <i className="fa fa-random"></i>
                    </a>
                    <a className="jp-previous">
                        <i className="fa fa-step-backward"></i>
                    </a>
                    <a className="jp-next">
                        <i className="fa fa-step-forward"></i>
                    </a>
                    <div className="jp-title">{this.state.title}</div>
                    <div className="jp-playback-rate-bar" style={this.state.playbackRateBarStyle} onClick={this.state.event.playbackRateBarOnClick}>
                        <div className="jp-playback-rate-bar-value" style={this.state.playbackRateBarValueStyle} />
                    </div>
                    <div className="jp-volume-bar" style={this.state.volumeBarStyle} onClick={this.state.event.volumeBarOnClick}>
                        <div className="jp-volume-bar-value" style={this.state.volumeBarValueStyle}></div>
                    </div>
                    <a className="jp-playlist-options">
                        <i className="fa fa-ellipsis-h"></i>
                        <i className="fa fa-comment"></i>
                    </a>
                </div>
                <div className="jp-progress">
                    <div className={this.state.seekBarClass} style={this.state.seekBarStyle} onClick={this.state.event.seekBarOnClick}>                         
                        <Motion style={{smoothWidth: spring(this.status.currentPercentAbsolute, [250])}}>
                            {(values) => <div className="jp-play-bar" style={{width: values.smoothWidth + "%"}} /> }
                        </Motion>
                        <div className="jp-current-time">{this.state.currentTimeText}</div>
                        <div className="jp-duration" onClick={this.state.event.durationOnClick}>{this.state.durationText}</div>
                    </div>
                </div>
            </div>
            <div className="jp-no-solution" style={this.state.noSolutionStyle}>
            <span>Update Required</span>
                To play the media you will need to update your browser to a recent version.
            </div>
        </div>
    );
}