import React from "react";
import {Motion, spring} from "react-motion";
import update from "react-addons-update";
import JPlayer, {DefaultProps, DefaultPropTypes} from "./JPlayer";
import merge from "lodash.merge";
import maxBy from "lodash/maxBy";

export default class JPlayerPlaylist extends React.Component {
    static get propTypes() {
		return {
            updateOptions: React.PropTypes.func.isRequired,
            playlist: React.PropTypes.arrayOf(
                 React.PropTypes.shape({
                    title: React.PropTypes.string,
                    artist: React.PropTypes.string,
                    mp3: React.PropTypes.string,
                    poster: React.PropTypes.string,
                    free: React.PropTypes.bool,
                })
            ),
            enableRemoveControls: React.PropTypes.bool,
            shuffleOnLoop: React.PropTypes.bool,
            itemClass: React.PropTypes.string,
            freeItemClass: React.PropTypes.string,
            removeItemClass: React.PropTypes.string,
            freeGroupClass: React.PropTypes.string
        }
	}
    static get defaultProps(){
		return {
            html: {},
            playlist: [],
            shuffleOnLoop: true,
            itemClass: "jp-playlist-item",
            freeItemClass: "jp-playlist-item-free",
            removeItemClass: "jp-playlist-item-remove",
            freeGroupClass: "jp-free-media"
        };
    }
    constructor(props)
    {
        super();

        this.playlistContainerMinHeight = this.playlistItemAnimMinHeight = 0;
        this.playlistContainerMaxHeight = this.playlistItemAnimMaxHeight = 1;

        this.state = {
            current: 0
        }

        this.event = {
            onEnded: (jPlayer) => { 
                this.next()
                this._trigger(this.props.onEnded, jPlayer);
            },
            onPlay: (jPlayer) => { 
                this.props.updateOptions({functions: update(this.props.functions, {$push: ["pauseOthers"]})});
                this._trigger(this.props.onPlay, jPlayer);
             },
            onResize: (jPlayer) => {
                if (this.props.fullScreen) {
                    this.setState({hideDetails: false});
                } else {
                    this.setState({hideDetails: true});
                }
                this._trigger(this.props.onResize, jPlayer);
            }
        }

        //Add a new stateClass for the extra loop option
        this.stateClass = merge({
            shuffled: "jp-state-shuffled", 
            loopedPlaylist: "jp-state-loop-playlist"
        }, props.stateClass);   

        this.keyBindings = merge({
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
            }
        }, props.keyBindings);

        this.freeMediaLinkIndex = 0;
    }
    _trigger = (func, jPlayer) => {
        if (func !== undefined) {
            func.bind(this)(jPlayer);
        }
    }
    _addFreeMediaLinks = (media) => {
        if (!media.free) return;
        
        var firstMediaLinkAdded = true;

        media.freeMediaLinks = [];

        for (var property in media) {        
            // Check property is a media format
            if (JPlayer.format[property]){
                var value = media[property];

                firstMediaLinkAdded ? firstMediaLinkAdded = false : media.freeMediaLinks.push(", ");
                media.freeMediaLinks.push(<a key={this.freeMediaLinkIndex++} className={this.props.freeItemClass} href={value} tabIndex="-1">{property}</a>);
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
            this.props.updateOptions({functions: update(this.props.functions, {$push: ["play"]})});
        }
        this.blur(event.target);
    }
    _shuffleOnClick = (event) => {
        event.preventDefault();

        this.shuffled ? this.shuffle(false) : this.shuffle(true);
        this.blur(event.target);
    }
    _shuffleOffClick = (event) => {
        event.preventDefault();

        this.shuffle(false);
        this.blur(event.target);
        this.setState({hideShuffleOff: true});
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
            this.setState({hideDetails: true});
        }

        this.jPlayer._updateButtons = (() => {
            var originalUpdateButtons = this.jPlayer._updateButtons;

            return function() {
                originalUpdateButtons.apply(this, arguments);

                if (this.props.loop === "loop-playlist") {
                    this.setState({stateClassesToAdd: "loopedPlaylist", stateClassesToRemove: {}});
                }
                else {
                    this.setState({stateClassesToRemove: ["loopedPlaylist"]});
                }
            }.bind(this);
        })();
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
        this.props.updateOptions({playlist: [...this.original]}, playlistSetCallback);
    }
    setPlaylist = (playlist) => {
        this._initPlaylist(playlist);
        this._init();
    }
    add = (media, playNow) => {
        this._addFreeMediaLinks(media);
        media.key = maxBy(this.props.playlist, "key").key + 1;
        media.isRemoving = false;
        
        this.original.push(media);
        this.props.updateOptions({playlist: update(this.props.playlist, {$push: [media]})});

        if (playNow) {
            this.play(this.props.playlist.length - 1);
        } else {
            if (this.original.length === 1) {
                this.select(0);
            }
        }
    }
    remove = (index) => {
        if (index === undefined) {
            this._initPlaylist([]);
            this.props.updateOptions({functions: update(this.props.functions, {$push: ["clearMedia"]})});
            return true;
        } else {           
            this.props.updateOptions({playlist: {[index]: {isRemoving: true}}});
        }
        this.setState({useRemoveConfig: true});
    }
    select = (index, play = false) => {
        index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
        if (0 <= index && index < this.props.playlist.length) {
            this.setState({current: index});
            debugger;
            this.props.updateOptions({functions: update(this.props.functions, {$push: [["setMedia", this.props.playlist[index]]]})});
            //this.props.updateOptions({setMedia: this.props.playlist[index]}, () => this.props.updateOptions({play: play}));
        } else {
            this.setState({current: 0});
        }
    }
    play = (index) => {
        index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
        if (0 <= index && index < this.props.playlist.length) {
            if (this.props.playlist.length) {
                this.select(index, true);
                debugger;
               // this.props.updateOptions({functions: update(this.props.functions, {$push: ["play"]})});
            }
        } else if (index === undefined) {
            this.props.updateOptions({functions: update(this.props.functions, {$push: ["play"]})});
        }
    }
    pause = () => {
        this.props.updateOptions({functions: update(this.props.functions, {$push: ["pause"]})});
    }
    next = () => {
        var index = (this.state.current + 1 < this.props.playlist.length) ? this.state.current + 1 : 0;

        if (this.props.loop === "loop") {
            this.play(this.state.current);
        }
        if (this.props.loop === "loop-playlist") {
            // See if we need to shuffle before looping to start, and only shuffle if more than 1 item.
            if (index === 0 && this.shuffled && this.props.shuffleOnLoop && this.props.playlist.length > 1) {
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
        var index = (this.state.current - 1 >= 0) ? this.state.current - 1 : this.props.playlist.length - 1;

        if (this.props.loop === "loop-playlist" && this.props.loopOnPrevious || index < this.props.playlist.length - 1) {
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
            var item = this.props.playlist[index];
            for (var i = 0; i < this.original.length; i++){
                if (this.original[i].key === item.key) {
                    this.original.splice(i, 1);
                    break;
                }
            }
        } else {
            this.original.splice(index, 1);
        }
        this.props.updateOptions({playlist: update(this.props.playlist, {$splice: [[index, 1]]})});

        if (this.original.length) {
            if (index === this.state.current) {
                this.state.current = (index < this.original.length) ? this.state.current : this.original.length - 1; // To cope when last element being selected when it was removed
                this.select(this.state.current);
            } else if (index < this.state.current) {
                this.setState(previousState => [{current: previousState.current--}]);
            }
        } else {
            this.props.updateOptions({functions: update(this.props.functions, {$push: ["clearMedia"]})});
            this.setState({current: 0});
            this.shuffled = false;
        }

        this.setState({useRemoveConfig: false});
    }
    _jPlayerStatus = () => this.status = status
    _shuffleAnimationCallback = () => {
        if (!this.state.isPlaylistContainerSlidingUp) {
            this.setState({useShuffleConfig: false});
            return;
        }

        var playlistSetCallback = () => {
            this.setState({jPlayerStatus: this._jPlayerStatus }, () => {
                if (this.playNow || !this.status.paused) {
                    this.play(0);
                } else {
                    this.select(0);
                }
            });
        }

        if (this.shuffled) {
            this.props.updateOptions({playlist: [...this.props.playlist].sort(() => 0.5 - Math.random())}, playlistSetCallback);
            this.setState({stateClassesToAdd: "shuffled"});
        } else {
            this._originalPlaylist(playlistSetCallback);  
            this.setState({stateClassesToRemove: "shuffled"});       
        }

        setTimeout(() => this.setState({isPlaylistContainerSlidingUp: false}), 0);
    }
    blur = (that) => {
        if (this.props.autoBlur) {
            that.blur();
        }
    }
    _aditionalControls = () => {
        return [<a className={this.props.hideShuffleOff ? "jp-shuffleOff " + JPlayer.className.hidden : "jp-shuffleOff"} key={0} onClick={this._shuffleOffClick}>{this.props.html.shuffleOff}</a>,
                <a className="jp-shuffle" key={1} onClick={this._shuffleOnClick}>{this.props.html.shuffle}</a>,
                <a className="jp-previous" key={3} onClick={this._previousOnClick}>{this.props.html.previous}</a>,
                <a className="jp-next" key={4} onClick={this._nextOnClick}>{this.props.html.next}</a>,
                <a className="jp-playlist-options" key={5}>{this.props.html.playlistOptions}</a>,
                <a className="jp-repeat-playlist" key={6} onClick={this.state.repeatOnClick}>{this.props.html.repeatPlaylist}</a>
        ];
    }
    componentDidMount() {
        this._setup();
    }
    componentWillMount() {
        this._initPlaylist(this.props.playlist);  
    }
    render() {
        return (
            <div>
                <div id="jp_container_playlist">
                    <div className="jp-playlist">
                        <Playlist isSlidingUp={this.state.isPlaylistContainerSlidingUp} config={this.state.useShuffleConfig ? this.props.shuffleAnimation : this.props.displayAnimation} onRest={this._shuffleAnimationCallback}>
                            {this.props.playlist.map((media, index) => 
                                <Media key={media.key} id={media.key} isCurrent={index === this.state.current} isRemoving={media.isRemoving} config={this.state.useRemoveConfig ? this.props.removeAnimation : this.props.addAnimation} onRest={() => this._removeAnimationCallback(index)}>
                                    {this.props.enableRemoveControls && <a href="javascript:;" className={this.props.removeItemClass} onClick={this._removeMediaOnClick.bind(this, index)}>&times;</a>}
                                    {media.free ? 
                                        <span className={this.props.freeGroupClass}>
                                            ({media.freeMediaLinks})
                                        </span> 
                                    : null}
                                    <a href="javascript:;" className={index === this.state.current ? this.props.itemClass + " jp-playlist-current" : this.props.itemClass} onClick={this._mediaLinkOnClick.bind(this, index)} tabIndex="0"> 
                                        <img src={media.poster}/>
                                        {media.title}
                                        {media.artist ? <span className="jp-artist">by {media.artist}</span> : null}
                                    </a>
                                </Media>)
                            }   
                        </Playlist> 
                    </div>
                </div>
                <JPlayer ref={jPlayer => this.jPlayer = jPlayer} stateClassesToRemove={this.state.stateClassesToRemove} stateClassesToAdd={this.state.stateClassesToAdd} {...this.props} {...this.keyBindings} 
                    {...this.event} additionalControls={this._aditionalControls()} stateClass={this.stateClass} loopOptions={"loop-playlist"} />
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
            <li className={props.isCurrent ? "jp-playlist-current" : null} style={{transform: `scaleY(${values.heightToInterpTo})`, transformOrigin: "50% top"}}>
                {props.children}       
            </li>
        }
    </Motion>
);

Media.defaultProps = {
    minHeight: 0,
    maxHeight: 1
};