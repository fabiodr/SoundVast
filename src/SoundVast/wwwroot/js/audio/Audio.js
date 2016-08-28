import React from "react";
import { Link } from "react-router";

import Sorting from "../components/Audio/Sorting";
import Rating from "../components/Audio/Rating";

class Audio extends React.Component {
    constructor(){
        super();

        this.state = {
            playButtonDisplay: "none",
            jPlayerPaused: true
        };
    }
    componentWillMount(){
        //this._linkVirtualStateClassToJPlayer();
    }
    onMouseEnterPoster = () => {
       // this.setState({playButtonDisplay: "initial"});
    }
    onMouseLeavePoster = () => {
        // if (!this.state.virtualPlayMatchesJplayer){
        //     this.setState({playButtonDisplay: "none"});
        // }     
    }
    onClickStateClass = () => {
    //    if (this.state.jPlayerPaused){
    //         JPlayerPlaylistStore.changePlaylistOrPlay(this.props.id, "filestream/playlist");
    //    } 
    //    else{
    //        $(this.state.jPlayerPlaylist.cssSelector.jPlayer).jPlayer("pause");
    //    }
    }
    _linkVirtualStateClassToJPlayer(){
        // $(this.state.jPlayerPlaylist.cssSelector.jPlayer).on($.jPlayer.event.play, function(){
        //     this.setState({virtualPlayMatchesJplayer: this.props.id === this.state.jPlayerPlaylist.playlist[this.state.jPlayerPlaylist.current].id});

        //     if (this.state.virtualPlayMatchesJplayer){
        //         this.setState({playButtonDisplay: "initial"});
        //         this.setState({jPlayerPaused: false});
        //     }
        //     else{
        //         this.setState({jPlayerPaused: true});
        //         this.setState({playButtonDisplay: "none"});
        //     }
        // }.bind(this));

        // $(this.state.jPlayerPlaylist.cssSelector.jPlayer).on($.jPlayer.event.pause, function(){
        //     if (this.state.virtualPlayMatchesJplayer){
        //         this.setState({jPlayerPaused: true});
        //     }
        // }.bind(this));
    }
    render(){
        let faStateClass = (this.state.jPlayerPaused) ? "fa fa-play" : "fa fa-pause";

        return (
            <div class="col-md-5ths">
                <div class="audio-wrapper">
                    <div class="poster-wrapper" onMouseEnter={this.onMouseEnterPoster} onMouseLeave={this.onMouseLeavePoster}>
                        <img src={this.props.imagePath} class="cover-image" />
                        <i class={faStateClass} style={{display: this.state.playButtonDisplay}} onClick={this.onClickStateClass}></i>

                        <div class="controls">
                            <Link to={`rate/${this.props.id}/true`} class="rating">
                                <i class="fa fa-arrow-up"></i>
                            </Link>
                            <Link to={`rate/${this.props.id}/false`} class="rating">
                                <i class="fa fa-arrow-down"></i>
                            </Link>
                            <Link to={`create-playlist/${this.props.id}`}>
                                <i class="fa fa-plus"></i>
                            </Link>
                            <Link to={`request-deletion/${this.props.id}`}>
                                <i class="fa fa-flag"></i>
                            </Link>
                            <Link to={`download/${this.props.id}`}>
                                <i class="fa fa-download"></i>
                            </Link>
                        </div>
                    </div>

                    <div class="display">
                        {this.props.name}
                        {this.props.artist}
                    </div>

                    <div class="view-counts">
                        {this.props.uniqueViews}
                        <i class="fa fa-eye"></i>
                    </div>

                    <Rating likes={this.props.likes} dislikes={this.props.dislikes}/>
                </div>
            </div>
        );
    }
}