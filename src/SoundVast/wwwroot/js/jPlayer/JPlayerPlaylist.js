import React from "react";
import {Motion, spring, presets} from "react-motion";
import update from "react-addons-update";
import JPlayer, {DefaultProps} from "./JPlayer";
import merge from "lodash.merge";
import maxBy from "lodash/maxBy";

export default class JPlayerPlaylist extends React.Component {
    static get defaultProps(){
		return Object.assign({
            shuffleOnLoop: true,
            itemClass: "jp-playlist-item",
            freeItemClass: "jp-playlist-item-free",
            removeItemClass: "jp-playlist-item-remove",
            freeGroupClass: "jp-free-media",
        }, DefaultProps);
    }
    constructor(props)
    {
        super();

        this.playlistContainerMinHeight = this.playlistItemAnimMinHeight = 0;
        this.playlistContainerMaxHeight = this.playlistItemAnimMaxHeight = 1;

        this.state = {
            current: 0,
            playlist: props.playlist, // Array of Objects: The current playlist displayed (Un-shuffled or Shuffled)
            event: {
                onRepeat: (jPlayer) => this.loop = jPlayer.options.loop,
                onEnded: () => this.next(),
                onPlay: () => this.jPlayer.pauseOthers(),
                onResize: () => {
                    if (this.props.fullScreen) {
                        this.setState(previousState => previousState.detailsStyle = Object.assign({}, previousState.detailsStyle, {display: ""}));
                    } else {
                        this.setState(previousState => previousState.detailsStyle = Object.assign({}, previousState.detailsStyle, {display: "none"}));
                    }
                }
            }           
        }

        this.loop = props.loop;

        //Add a new stateClass for the extra loop option
        this.stateClass = merge({
            shuffled: "jp-state-shuffled", 
            playlistLooped: "jp-state-playlist-looped"
        }, props.stateClass);   

        this.keyBindings = merge({
            keyBindings: {
                next: {
                    key: 221, // ]
                    fn: () => this.next()
                },
                previous: {
                    key: 219, // [
                    fn: () => this.previous()
                },
                shuffle: {
                    key: 83, // s
                    fn: () => this.shuffle()
                },
                loop: {
                    key: 76, // l
                    fn: () => this._loop()
                }
            }
        }, props.keyBindings);
    }
    _freeMediaLinkIndex = 0
    _addFreeMediaLinks = (media) => {
        if (!media.free) return;
        
        var firstMediaLinkAdded = true;

        media.freeMediaLinks = [];

        for (var property in media) {        
            // Check property is a media format
            if (JPlayer.format[property]){
                var value = media[property];

                firstMediaLinkAdded ? firstMediaLinkAdded = false : media.freeMediaLinks.push(", ");
                media.freeMediaLinks.push(<a key={this._freeMediaLinkIndex++} class={this.props.freeItemClass} href={value} tabIndex="-1">{property}</a>);
            }
       }
    }
    _removeMediaOnClick = (index, event) => {
        event.preventDefault();

        this.remove(index);
        this.blur(event.target);
    }
    _mediaLinkOnClick = (index, event) => {
        event.preventDefault();

        if(this.state.current !== index) {
            this.play(index);
        } else {
            this.jPlayer.play();
        }
        this.blur(event.target);
    }
    _shuffleOnClick = (event) => {
        event.preventDefault();

        if (this.shuffled && this.props.useStateClassSkin) {
            this.shuffle(false);
        } else {
            this.shuffle(true);
        }
        this.blur(event.target);
    }
    _shuffleOffClick = (event) => {
        event.preventDefault();

        this.shuffle(false);
        this.blur(event.target);
        this.setState(previousState => previousState.shuffleOffClick = Object.assign({}, previousState.shuffleOffClick, {display: "none"}));
    }
    _previousOnClick = (event) => {
        event.preventDefault();

        this.previous();
        this.blur(event.target);
    }
    _nextOnClick = (event) => {
        event.preventDefault();

        this.next();
        this.blur(event.target);
    }
    _setup = () => {
        this.shuffled = false;

        this.cssSelector = Object.assign({}, {cssPlaylistOptionsSelector: this.state.cssSelectorAncestor}, this.state.cssSelector);

        // Put the title in its initial display state
        if (!this.props.fullScreen) {
            this.setState(previousState => previousState.detailsStyle = Object.assign({}, previousState.detailsStyle, {display: "none"}));
        }
        
        //Overwrite the jPlayer repeat
        this.jPlayer.repeat = (event) => {
            var guiAction = typeof event === "object"; // Flags GUI click events so we know this was not a direct command, but an action taken by the user on the GUI.

            if (this.props.useStateClassSkin && guiAction){
                this._loop();
            }
            else {
                if(this.loop === "playlist-loop") {
                    this.setState(previousState => previousState.repeatPlaylistStyle = Object.assign({}, previousState.repeatPlaylistStyle, {display: ""}));
                    this.setState(previousState => previousState.repeatOffStyle = Object.assign({}, previousState.repeatOffStyle, {display: "none"}));
                    this.setState(previousState => previousState.repeatOffStyle = Object.assign({}, previousState.repeatOffStyle, {display: "none"}));
                }
                else {
                    this.setState(previousState => previousState.repeatPlaylistStyle = Object.assign({}, previousState.repeatPlaylistStyle, {display: "none"}));
                }
            }
        };
        this._init();
    }
    _init = () => {
        if (this.props.autoPlay) {
            this.play(this.state.current);
        } else {
            this.select(this.state.current);
        }
    }
    _initPlaylist = (playlist) => {
        this.setState({current: 0});
        this.shuffled = false;
        this.original = [...playlist] // Copy the Array of Objects

        for(var i = 0; i < this.original.length; i++){
            this.original[i].key = i;          
            this._addFreeMediaLinks(this.original[i]);
        }

        this._originalPlaylist();
    }
    _originalPlaylist = (playlistSetCallback) => {
        // Make both arrays point to the same object elements. Gives us 2 different arrays, each pointing to the same actual object. ie., Not copies of the object.
        this.setState({playlist: this.original}, playlistSetCallback); //todo: check equality comparer
    }
    _loop = () => {
        if (this.loop === "playlist-loop") {
            this.jPlayer._loop("off");
            this.jPlayer.removeStateClass("playlistLooped");
        } else if (this.loop === "off") {
            this.jPlayer._loop("loop");
            this.jPlayer.addStateClass("looped");
        }
        else {
            this.jPlayer.removeStateClass("looped");
            this.jPlayer.addStateClass("playlistLooped");
            this.jPlayer._loop("playlist-loop");
        }
    }
    _highlight = (index) => {
        // var currentPlaylistClass = "currentPlaylistClass_" + index;

        // if (this.state.playlist.length && index !== undefined) {
        //     this.setState(previousState => { 
        //         debugger;
        //         if (previousState[currentPlaylistClass]) {
        //             return ({currentPlaylistClass: previousState[currentPlaylistClass].replace("jp-playlist-current", "").trim()})
        //         }
        //     });

        //     this.setState(previousState => {
        //         debugger;
		// 	    if (previousState[currentPlaylistClass] && !previousState[currentPlaylistClass].includes("jp-playlist-current")){
		// 		    return { currentPlaylistClass: previousState[currentPlaylistClass] + " " + "jp-playlist-current" }
        //         }
        //     });
        // }
    }
    setPlaylist = (playlist) => {
        this._initPlaylist(playlist);
        this._init();
    }
    add = (media, playNow) => {
        this._addFreeMediaLinks(media);
        media.key = maxBy(this.state.playlist, "key").key + 1;
        media.isRemoving = false;
        
        this.original.push(media);
        this.setState({playlist: update(this.state.playlist, {$push: [media]})});

        if (playNow) {
            this.play(this.state.playlist.length - 1);
        } else {
            if (this.original.length === 1) {
                this.select(0);
            }
        }
    }
    remove = (index) => {
        if (index === undefined) {
            this._initPlaylist([]);
            this.jPlayer.clearMedia();
            return true;
        } else {           
            this.setState(previousState => previousState.playlist[index] = Object.assign({}, previousState.playlist[index], {isRemoving: true}));
        }
        this.setState({useRemoveConfig: true});
    }
    select = (index) => {
        index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
        if (0 <= index && index < this.state.playlist.length) {
            this.setState({current: index});
            this._highlight(index);
            this.jPlayer.setMedia(this.state.playlist[this.state.current]);
            this.jPlayer.play();
        } else {
            this.setState({current: 0});
        }
    }
    play = (index) => {
        index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
        if (0 <= index && index < this.state.playlist.length) {
            if (this.state.playlist.length) {
                this.select(index);
            }
        } else if (index === undefined) {
            this.jPlayer.play();
        }
    }
    pause = () => {
        this.jPlayer.pause();
    }
    next = (forcePlayNextTrack) => {
        var index = (this.state.current + 1 < this.state.playlist.length) ? this.state.current + 1 : 0;

        if (this.loop === "loop" && !forcePlayNextTrack) {
            this.play(this.state.current);
        }
        else if (this.loop === "playlist-loop") {
            // See if we need to shuffle before looping to start, and only shuffle if more than 1 item.
            if (index === 0 && this.shuffled && this.props.shuffleOnLoop && this.state.playlist.length > 1) {
                this.shuffle(true, true); // playNow
            } else {
                this.play(index);
            }
        }
        else {
            // The index will be zero if it just looped round
            if (index > 0) {
                this.play(index);
            }
        }
    }
    previous = () => {
        var index = (this.state.current - 1 >= 0) ? this.state.current - 1 : this.state.playlist.length - 1;

        if (this.loop === "playlist-loop" && this.props.loopOnPrevious || index < this.state.playlist.length - 1) {
            this.play(index);
        }
    }
    shuffle = (shuffled, playNow) => {
        if(shuffled === undefined) {
            shuffled = !this.shuffled;
        }

        this.shuffled = shuffled;
        this.playNow = playNow;
        this.setState({isPlaylistContainerSlidingUp: true});
        this.setState({useShuffleConfig: true});
    }
    _removeAnimationCallback = (index) => {
        if (this.shuffled) {
            var item = this.state.playlist[index];
            for (var i = 0; i < this.original.length; i++){
                if (this.original[i] === item) {
                    this.original.splice(i, 1);
                    break;
                }
            }
            this.setState({playlist: update(this.state.playlist, {$splice: [[index, 1]]})});
        } else {
            this.original.splice(index, 1);
            this.setState({playlist: update(this.state.playlist, {$splice: [[index, 1]]})});
        }

        if (this.original.length) {
            if (index === this.state.current) {
                this.state.current = (index < this.original.length) ? this.state.current : this.original.length - 1; // To cope when last element being selected when it was removed
                this.select(this.state.current);
            } else if (index < this.state.current) {
                this.setState(previousState => [{current: previousState.current--}]);
            }
        } else {
            this.jPlayer.clearMedia();
            this.setState({current: 0});
            this.shuffled = false;
        }

        this.setState({useRemoveConfig: false});
    }
    _shuffleAnimationCallback = () => {
        if (!this.state.isPlaylistContainerSlidingUp) {
            this.setState({useShuffleConfig: false});
            return;
        }

        function playlistSetCallback() {
            if (this.playNow || !this.jPlayer.status.paused) {
                this.play(0);
            } else {
                this.select(0);
            }
        }

        if (this.shuffled) {
            this.setState({playlist: [...this.state.playlist].sort(() => 0.5 - Math.random())}, playlistSetCallback);
            this.jPlayer.addStateClass("shuffled");
        } else {
            this._originalPlaylist(playlistSetCallback);  
            this.jPlayer.removeStateClass("shuffled");        
        }

        if (!this.props.useStateClassSkin) {
            if (this.shuffled) {
                this.setState(previousState => previousState.shuffleOffStyle = Object.assign({}, previousState.shuffleOffStyle, {display: ""}));
                this.setState(previousState => previousState.shuffle = Object.assign({}, previousState.shuffle, {display: "none"}));
            } else {
                this.setState(previousState => previousState.shuffleOffStyle = Object.assign({}, previousState.shuffleOffStyle, {display: "none"}));
                this.setState(previousState => previousState.shuffle = Object.assign({}, previousState.shuffle, {display: ""}));
            }
        }

        setTimeout(() => this.setState({isPlaylistContainerSlidingUp: false}), 0);
    }
    blur = (that) => {
        if (this.props.autoBlur) {
            that.blur();
        }
    }
    _aditionalControls = () => {
        return [<a class="jp-shuffleOff" key={0} onClick={this._shuffleOffClick} style={this.state.shuffleOffStyle}>{this.props.html.shuffleOff}</a>,
                <a class="jp-shuffle" key={1} onClick={this._shuffleOnClick} style={this.state.shuffleStyle}>{this.props.html.shuffle}</a>,
                <a class="jp-previous" key={3} onClick={this._previousOnClick}>{this.props.html.previous}</a>,
                <a class="jp-next" key={4} onClick={this._nextOnClick}>{this.props.html.next}</a>,
                <a class="jp-playlist-options" key={5}>{this.props.html.playlistOptions}</a>,
                <a class="jp-repeat-playlist" key={6} onClick={this.state.repeatOnClick} style={this.state.repeatPlaylistStyle}>{this.props.html.loopPlaylist}</a>
        ];
    }
    componentDidMount(){
        this._setup();
    }
    componentWillMount(){
        this._initPlaylist(this.state.playlist);  
    }
    render() {
        return (
            <div>
                <div id="jp_container_playlist">
                    <div class="jp-playlist">
                        <Playlist isSlidingUp={this.state.isPlaylistContainerSlidingUp} config={this.state.useShuffleConfig ? this.props.shuffleAnimationConfig : this.props.displayAnimationConfig} onRest={this._shuffleAnimationCallback}>
                            {this.state.playlist.map((media, index) => 
                                <Media key={media.key} id={media.key} isCurrent={index === this.state.current} isRemoving={media.isRemoving} config={this.state.useRemoveConfig ? this.props.removeAnimationConfig : this.props.addAnimationConfig} onRest={() => this._removeAnimationCallback(index)}>
                                    {this.props.enableRemoveControls ? 
                                        <a href="javascript:;" class={this.props.removeItemClass} onClick={this._removeMediaOnClick.bind(this, index)}>&times;</a>
                                    : null}
                                    {media.free ? 
                                        <span class={this.props.freeGroupClass}>
                                            ({media.freeMediaLinks})
                                        </span> 
                                    : null}
                                    <a href="javascript:;"class={index === this.state.current ? this.props.itemClass + " jp-playlist-current" : this.props.itemClass} onClick={this._mediaLinkOnClick.bind(this, index)} tabIndex="0"> 
                                        <img src={media.poster}/>
                                        {media.title}
                                        {media.artist ? <span class="jp-artist">by {media.artist}</span> : null}
                                    </a>
                                </Media>)
                            }   
                        </Playlist> 
                    </div>
                </div>
                <JPlayer ref={(jPlayer) => this.jPlayer = jPlayer} {...this.props} {...this.keyBindings} {...this.state.event} additionalControls={this._aditionalControls()} stateClass={this.stateClass}/>
            </div>
        );
    }
}

const Playlist = (props) => (
    <Motion defaultStyle={{heightToInterpTo: props.minHeight}} style={{heightToInterpTo: spring(props.isSlidingUp ? props.minHeight : props.maxHeight, props.config)}} onRest={props.onRest}>
        {(values) =>
            <ul style={{transform: `scaleY(${values.heightToInterpTo})`, transformOrigin: "50% top"}}>
                {props.children}     
            </ul>
        }
    </Motion>   
);

Playlist.defaultProps = {
    minHeight: 0,
    maxHeight: 1
};

Playlist.propTypes = {
    children: React.PropTypes.array.isRequired
}

const Media = (props) => (
    <Motion defaultStyle={{heightToInterpTo: props.minHeight}} style={{heightToInterpTo: spring(props.isRemoving ? props.minHeight : props.maxHeight, props.config)}} onRest={props.isRemoving ? props.onRest : null}>                
        {(values) => 
            <li class={props.isCurrent ? "jp-playlist-current" : null} style={{transform: `scaleY(${values.heightToInterpTo})`, transformOrigin: "50% top"}}>
                {props.children}       
            </li>
        }
    </Motion>
);

Media.defaultProps = {
    minHeight: 0,
    maxHeight: 1
};