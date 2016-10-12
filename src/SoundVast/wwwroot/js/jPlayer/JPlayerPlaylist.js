import React from "react";
import {Motion, spring, presets} from "react-motion";
import update from "react-addons-update";
import JPlayer, {DefaultProps} from "./JPlayer";
import merge from "lodash.merge";
import maxBy from "lodash/maxBy";

export default class JPlayerPlaylist extends React.Component {
    static get defaultProps(){
		return Object.assign({
            loopOnPrevious: false,
            shuffleOnLoop: true,
            enableRemoveControls: false,
            displayTime: 'slow',
            addTime: 'fast',
            removeTime: 'fast',
            shuffleTime: 400,
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
            isPlaylistContainerSlidingUp: false,
            playlist: props.playlist, // Array of Objects: The current playlist displayed (Un-shuffled or Shuffled)
            event: {
                onRepeat: (jPlayer) => this.loop = jPlayer.options.loop,
                onEnded: () => this.next(),
                onPlay: () => this.jPlayer.pauseOthers(),
                onReady: () => this._init(),
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
        var firstMediaLinkAdded = true;

        media.freeMediaLinks = [];

        for (var property in media) {        
            // Check property is a media format
            if (JPlayer.format[property]){
                var value = media[property];

                firstMediaLinkAdded ? firstMediaLinkAdded = false : media.freeMediaLinks.push(",");
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

        if(this.current !== index) {
            this.play(index);
        } else {
            this.jPlayer.play();
        }
    }
    _shuffleOnClick = (event) => {
        event.preventDefault();
        debugger;

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
        this.current = 0;
        this.shuffled = false;

        this.cssSelector = Object.assign({}, {cssPlaylistOptionsSelector: this.state.cssSelectorAncestor}, this.state.cssSelector);

        // Put the title in its initial display state
        if (!this.props.fullScreen) {
            this.setState(previousState => previousState.detailsStyle = Object.assign({}, previousState.detailsStyle, {display: "none"}));
        }

        // Create .on() handlers for the playlist items along with the free media and remove controls.
        this._createItemHandlers();
        
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

        this.jPlayer.setMedia(this.state.playlist[0]);

        if (this.props.autoPlay){
            this.jPlayer.play();
        }
    }
    option = (option, value) => { // For changing playlist options only
        if (value === undefined) {
            return this.options.playlistOptions[option];
        }

        this.options.playlistOptions[option] = value;

        switch (option) {
            case "enableRemoveControls":
                this._updateControls();
                break;
            case "itemClass":
            case "freeGroupClass":
            case "freeItemClass":
            case "removeItemClass":
                this._refresh(true); // Instant
                this._createItemHandlers();
                break;
        }
        return this;
    }
    _init = () => {
        this._refresh(function () {
            if (this.props.autoPlay) {
                this.play(this.current);
            } else {
                this.select(this.current);
            }
        });
    }
    _initPlaylist = (playlist) => {
        this.current = 0;
        this.shuffled = false;
        this.original = Object.assign([], playlist); // Copy the Array of Objects

        for(var i = 0; i < this.original.length; i++){
            this.original[i].key = i;          
            this._addFreeMediaLinks(this.original[i]);
        }

        this._originalPlaylist();
    }
    _originalPlaylist = (playlistSetCallback) => {
        // Make both arrays point to the same object elements. Gives us 2 different arrays, each pointing to the same actual object. ie., Not copies of the object.
        this.setState({playlist: [...this.original]}, playlistSetCallback);
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
    _refresh = (instant) => {
        /* instant: Can be undefined, true or a function.
            *	undefined -> use animation timings
            *	true -> no animation
            *	function -> use animation timings and excute function at half way point.
            */

        // if (instant && !$.isFunction(instant)) {
        //     $(this.cssSelector.playlist + " ul").empty();
        //     $.each(this.playlist, function (i) {
        //         $(this.cssSelector.playlist + " ul").append(this._createListItem(this.playlist[i]));
        //     });
        //     this._updateControls();
        // } else {
        //     var displayTime = $(this.cssSelector.playlist + " ul").children().length ? this.options.displayTime : 0;

        //     $(this.cssSelector.playlist + " ul").isPlaylistContainerSlidingUp(displayTime, function () {
        //         var $this = $(this);
        //         $(this).empty();

        //         $.each(this.playlist, function (i) {
        //             $this.append(this._createListItem(this.playlist[i]));
        //         });
        //         this._updateControls();
        //         if ($.isFunction(instant)) {
        //             instant();
        //         }
        //         if (this.playlist.length) {
        //             $(this).slideDown(this.options.displayTime);
        //         } else {
        //             $(this).show();
        //         }
        //     });
        // }
    }
    _createListItem = (media, index) => {
        var freeMedia;
        
        // Create links to free media
        // if (media.free) {
        //     var first = true;
        //     listItem += "<span class='" + this.props.freeGroupClass + "'>(";

        //     for(var i = 0; i < media.length; i++){
        //         var value = media[i];

        //         // Check property is a media format.
        //         if (this.jPlayer.format[i]){
        //             if (first) {
        //                 first = false;
        //             } else {
        //                 listItem += " | ";
        //             }
        //             listItem += "<a class='" + this.props.freeItemClass + "' href='" + value + "' tabindex='-1'>" + i + "</a>";
        //         }
        //     }
        //     listItem += ")</span>";
        // }
        // <Motion style={{heightToInterpTo: spring(this.state.isPlaylistContainerSlidingUp ? this.playlistContainerMaxHeight : this.playlistContainerMinHeight, this.props.shuffleAnimation)}} onRest={() => this.state.isPlaylistContainerSlidingUp ? this._shuffleAnimationCallback() : null}>
        //     {(values) => <ul style={{
        //         transform: `translate3d(0, ${values.heightToInterpTo}%, 0)`}}>
        //             {this.state.playlistComponent}
        //         </ul>}
        // </Motion>      

        return listItem;
    }
    _createItemHandlers = () => {
        // // Create live handlers for the playlist items
        // $(this.cssSelector.playlist).off("click", "a." + this.options.itemClass).on("click", "a." + this.options.itemClass, function (e) {
        //     e.preventDefault();
        //     var index = $(this).parent().parent().index();
        //     if (this.current !== index) {
        //         this.play(index);
        //     } else {
        //         $(this.cssSelector.jPlayer).jPlayer("play");
        //     }
        //     this.blur(this);
        // });

        // // Create live handlers that disable free media links to force access via right click
        // $(this.cssSelector.playlist).off("click", "a." + this.options.freeItemClass).on("click", "a." + this.options.freeItemClass, function (e) {
        //     e.preventDefault();
        //     $(this).parent().parent().find("." + this.options.itemClass).click();
        //     this.blur(this);
        // });

        // // Create live handlers for the remove controls
        // $(this.cssSelector.playlist).off("click", "a." + this.options.removeItemClass).on("click", "a." + this.options.removeItemClass, function (e) {
        //     e.preventDefault();
        //     var index = $(this).parent().parent().index();
        //     this.remove(index);
        //     this.blur(this);
        // });
    }
    _updateControls = () => {
        if (this.props.enableRemoveControls) {
            this.setState(previousState => previousState.removeItemClassStyle = Object.assign({}, previousState.removeItemClassStyle, {display: ""}));
        } else {
            this.setState(previousState => previousState.removeItemClassStyle = Object.assign({}, previousState.removeItemClassStyle, {display: "none"}));
        }

        if (this.shuffled) {
            this.jPlayer.addStateClass("shuffled");
        } else {
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
    }
    _highlight = (index) => {
        var currentPlaylistClass = "currentPlaylistClass_" + index;

        if (this.state.playlist.length && index !== undefined) {
            this.setState(previousState => { 
                if (previousState[currentPlaylistClass]) {
                    return ({currentPlaylistClass: previousState[currentPlaylistClass].replace("jp-playlist-current", "").trim()})
                }
            });
            this.setState(previousState => {
			    if (previousState[currentPlaylistClass] && !previousState[currentPlaylistClass].includes("jp-playlist-current")){
				    return { currentPlaylistClass: previousState[currentPlaylistClass] + " " + "jp-playlist-current" }
                }
            });
        }
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
            this._refresh(function () {
                this.jPlayer.clearMedia();
            });
            return true;
        } else {           
            this.setState(previousState => previousState.playlist[index] = Object.assign({}, previousState.playlist[index], {isRemoving: true}));
        }
    }
    select = (index) => {
        index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
        if (0 <= index && index < this.state.playlist.length) {
            this.current = index;
            this._highlight(index);
            this.jPlayer.setMedia(this.state.playlist[this.current]);
            this.jPlayer.play();
        } else {
            this.current = 0;
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
        var index = (this.current + 1 < this.state.playlist.length) ? this.current + 1 : 0;

        if (this.loop === "loop" && !forcePlayNextTrack) {
            this.play(this.current);
        }
        else if (this.loop === "playlist-loop") {
            debugger;
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
        var index = (this.current - 1 >= 0) ? this.current - 1 : this.state.playlist.length - 1;

        if (this.loop === "playlist-loop" && this.props.loopOnPrevious || index < this.state.playlist.length - 1) {
            this.play(index);
        }
    }
    shuffle = (shuffled, playNow) => {

        this.setState({isPlaylistContainerSlidingUp: true});
        this.playNow = playNow;  

        if(shuffled === undefined) {
            shuffled = !this.shuffled;
        }

        this.shuffled = shuffled;
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
            if (index === this.current) {
                this.current = (index < this.original.length) ? this.current : this.original.length - 1; // To cope when last element being selected when it was removed
                this.select(this.current);
            } else if (index < this.current) {
                this.current--;
            }
        } else {
            this.jPlayer.clearMedia();
            this.current = 0;
            this.shuffled = false;
            this._updateControls();
        }
    }
    _shuffleAnimationCallback = () => {
        debugger
        function playlistSetCallback() {
            if (this.playNow || !this.jPlayer.status.paused) {
                this.play(0);
            } else {
                this.select(0);
            }
        }

        if (this.shuffled) {
            this.setState({playlist: [...this.state.playlist].sort(() => 0.5 - Math.random())}, playlistSetCallback);
        } else {
            this._originalPlaylist(playlistSetCallback);          
        }
        this._refresh(true); // Instant    

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
                        <Playlist isSlidingUp={this.state.isPlaylistContainerSlidingUp} config={this.props.shuffleAnimation} onRest={this._shuffleAnimationCallback}>
                            {this.state.playlist.map((media, index) =>
                                <Media key={media.key} id={media.key} isRemoving={media.isRemoving} config={this.props.playlistItemAnimation} onRest={() => this._removeAnimationCallback(index)}>
                                    <a href="javascript:;" class={this.props.removeItemClass} onClick={this._removeMediaOnClick.bind(this, index)}>&times;</a>
                                    {media.free ? 
                                        <span class={this.props.freeGroupClass}>
                                            ({media.freeMediaLinks})
                                        </span> 
                                    : null}
                                    <a href="javascript:;" class={this.props.itemClass} onClick={this._mediaLinkOnClick.bind(this, index)} tabIndex="0"> 
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
    <Motion style={{heightToInterpTo: spring(props.isSlidingUp ? props.minHeight : props.maxHeight, props.config)}} onRest={props.isSlidingUp ? props.onRest : null}>
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
            <li style={{transform: `scaleY(${values.heightToInterpTo})`, transformOrigin: "50% top"}}>
                {props.children}       
            </li>
        }
    </Motion>
);

Media.defaultProps = {
    minHeight: 0,
    maxHeight: 1
};