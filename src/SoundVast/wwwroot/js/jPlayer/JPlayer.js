import React from "react";
import {Motion, spring} from "react-motion";
import merge from "lodash.merge";
import update from "react-addons-update";
import isEqual from "lodash/isEqual";

export const DefaultProps = {
	cssSelectorAncestor: "#jp_container_1",
	jPlayerSelector: "#jplayer_1",
	preload: "metadata", // HTML5 Spec values: none, metadata, auto.
	supplied: ["mp3"], // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,		
	captureDuration: true, // When true, clicks on the duration are captured and no longer propagate up the DOM.
	playbackRate: 1.0,
	defaultPlaybackRate: 1.0,
	minPlaybackRate: 0.5,
	maxPlaybackRate: 4,
	volume: 0.8, // The volume. Number 0 to 1.
	nativeVideoControls: {
		// Works well on standard browsers.
		// Phone and tablet browsers can have problems with the controls disappearing.
	},
	guiFadeInAnimation: {
		stiffness: 40 // Velocity of the animation (higher the faster), other properties automatically set in the Motion component
	},
	guiFadeOutAnimation: {
		stiffness: 40 
	},
	html: {}
}

export default class JPlayer extends React.Component {
	static get propTypes() {
		return {
			updateOptions: React.PropTypes.func.isRequired,
			jPlayerSelector: React.PropTypes.string,
			cssSelectorAncestor: React.PropTypes.string,
			html: React.PropTypes.objectOf(React.PropTypes.element),
			supplied: React.PropTypes.array,
			preload: React.PropTypes.string,
			volume: React.PropTypes.number,
			muted: React.PropTypes.bool,
			remainingDuration: React.PropTypes.bool,
			toggleDuration: React.PropTypes.bool,
			captureDuration: React.PropTypes.bool,
			playbackRate: React.PropTypes.number,
			defaultPlaybackRate: React.PropTypes.number,
			minPlaybackRate: React.PropTypes.number,
			maxPlaybackRate: React.PropTypes.number,
			stateClass: React.PropTypes.objectOf(React.PropTypes.string),
			smoothPlayBar: React.PropTypes.bool,
			fullScreen: React.PropTypes.bool,
			fullWindow: React.PropTypes.bool,
			autoHide: React.PropTypes.shape({
				restored: React.PropTypes.bool, // Controls the interface autohide feature.
				full: React.PropTypes.bool, // Controls the interface autohide feature.
				hold: React.PropTypes.number, // Milliseconds. The period of the pause before autohide beings.
			}),
			loop: React.PropTypes.string,
			nativeVideoControls: React.PropTypes.objectOf(React.PropTypes.string),
			noFullWindow: React.PropTypes.objectOf(React.PropTypes.string),
			noVolume: React.PropTypes.objectOf(React.PropTypes.string),
			timeFormat: React.PropTypes.shape({
				showHour: React.PropTypes.bool,
				showMin: React.PropTypes.bool,
				showSec: React.PropTypes.bool,
				padHour: React.PropTypes.bool,
				padMin: React.PropTypes.bool,
				padSec: React.PropTypes.bool,
				sepHour: React.PropTypes.string,
				sepMin: React.PropTypes.string,
				sepSec: React.PropTypes.string
			}),
			keyEnabled: React.PropTypes.bool,
			audioFullScreen: React.PropTypes.bool,
			keyBindings: React.PropTypes.shape({
				play: React.PropTypes.shape({
					key: React.PropTypes.number, 
					fn: React.PropTypes.func
				}),
				fullScreen: React.PropTypes.shape({
					key: React.PropTypes.number, 
					fn: React.PropTypes.func
				}),
				muted: React.PropTypes.shape({
					key: React.PropTypes.number, 
					fn: React.PropTypes.func
				}),
				volumeUp: React.PropTypes.shape({
					key: React.PropTypes.number, 
					fn: React.PropTypes.func
				}),
				volumeDown: React.PropTypes.shape({
					key: React.PropTypes.number,
					fn: React.PropTypes.func
				}),
				loop: React.PropTypes.shape({
					key: React.PropTypes.number, 
					fn: React.PropTypes.func
				})
			}),
			verticalVolume: React.PropTypes.bool,
			verticalPlaybackRate: React.PropTypes.bool,
			globalVolume: React.PropTypes.bool, // Set to make volume and muted changes affect all jPlayer instances with this option enabled
			size: React.PropTypes.shape({
				width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
				height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
				cssClass: React.PropTypes.string
			}),
			sizeFull: React.PropTypes.shape({
				width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
				height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
				cssClass: React.PropTypes.string
			}),
			shuffleAnimation: React.PropTypes.shape({
				stiffness: React.PropTypes.number, 
				damping: React.PropTypes.number, 
				precision: React.PropTypes.number
			}),
			displayAnimation: React.PropTypes.shape({
				stiffness: React.PropTypes.number, 
				damping: React.PropTypes.number, 
				precision: React.PropTypes.number
			}),
			removeAnimation: React.PropTypes.shape({
				stiffness: React.PropTypes.number, 
				damping: React.PropTypes.number, 
				precision: React.PropTypes.number
			}),
			addAnimation: React.PropTypes.shape({
				stiffness: React.PropTypes.number, 
				damping: React.PropTypes.number, 
				precision: React.PropTypes.number
			}),
			onProgress: React.PropTypes.func,
			onLoadedData: React.PropTypes.func,
			onTimeUpdate: React.PropTypes.func,
			onDurationChange: React.PropTypes.func,
			onPlay: React.PropTypes.func,
			onPlaying: React.PropTypes.func,
			onPause: React.PropTypes.func,
			onWaiting: React.PropTypes.func,
			onSeeking: React.PropTypes.func,
			onSeeked: React.PropTypes.func,
			onVolumeChange: React.PropTypes.func,
			onRateChange: React.PropTypes.func,
			onSuspend: React.PropTypes.func,
			onEnded: React.PropTypes.func,
			onError: React.PropTypes.func,
			onLoadStart: React.PropTypes.func,
			onAbort: React.PropTypes.func,
			onEmptied: React.PropTypes.func,
			onStalled: React.PropTypes.func,
			onLoadedMetadata: React.PropTypes.func,
			onCanPlay: React.PropTypes.func,
			onCanPlayThrough: React.PropTypes.func,
		}
	}
	static get defaultProps(){
		return DefaultProps
	}
    constructor(props){
        super();

		this.state = {
			stateClass: []
		};	

		this._setupInternalProperties(props);
		this._setupOptions(props);
		this._setupEvents();
		this._setupErrors();
    }
	_extendStyle = (styleKey, values) => {
		// Sets the style without overwriting previous
		this.setState(previousState => previousState[styleKey] = Object.assign({}, previousState[styleKey], values));
	}
	_setupInternalProperties = (props) => {
		this.defaultStatus = { // Instanced in _init()
			src: "",
			media: {},
			paused: true,
			format: {},
			formatType: "",
			waitForPlay: true, // Same as waitForLoad except in case where preloading.
			waitForLoad: true,
			srcSet: false,
			video: false, // True if playing a video
			seekPercent: 0,
			currentPercentRelative: 0,
			currentPercentAbsolute: 0,
			currentTime: 0,
			duration: 0,
			remaining: 0,
			videoWidth: 0, // Intrinsic width of the video in pixels.
			videoHeight: 0, // Intrinsic height of the video in pixels.
			readyState: 0,
			networkState: 0,
			playbackRate: 1, // Warning - Now both an option and a status property
			ended: 0

	/*		Persistant status properties created dynamically at _init():
				width
				height
				cssClass
				nativeVideoControls
				noFullWindow
				noVolume
				playbackRateEnabled
	*/
		};
		this.status = Object.assign({}, this.defaultStatus);
		this.solution = "html";
		this.timeFormat = merge(JPlayer.timeFormat, props.timeFormat);
		this.internal = {
			// instance: undefined
			// htmlDlyCmdId: undefined
			// mouse: undefined
			// cmdsIgnored
		};
	}
	_setupOptions = (props) => {
		this.loopOptions = [
			"off",
			"loop"
		].concat(props.loopOptions);
		this.currentLoopIndex = props.loop !== undefined ? props.loopOptions.indexOf(props.loop) : 0;

		// Classes added to the cssSelectorAncestor to indicate the state.
		this.stateClass = merge({ 
			playing: "jp-state-playing",
			seeking: "jp-state-seeking",
			muted: "jp-state-muted",
			looped: "jp-state-looped",
			fullScreen: "jp-state-full-screen",
			noVolume: "jp-state-no-volume"
		}, props.stateClass);

		this.autoHide = merge({
			restored: false, // Controls the interface autoHide feature.
			full: true, // Controls the interface autoHide feature.
			hold: 2000 // Milliseconds. The period of the pause before autoHide beings.
		}, props.autoHide);

		this.noFullWindow = merge({
			msie: /msie [0-6]\./,
			ipad: /ipad.*?os [0-4]\./,
			iphone: /iphone/,
			ipod: /ipod/,
			android_pad: /android [0-3]\.(?!.*?mobile)/,
			android_phone: /(?=.*android)(?!.*chrome)(?=.*mobile)/,
			blackberry: /blackberry/,
			windows_ce: /windows ce/,
			iemobile: /iemobile/,
			webos: /webos/
		}, props.noFullWindow);

		this.noVolume = merge({
			ipad: /ipad/,
			iphone: /iphone/,
			ipod: /ipod/,
			android_pad: /android(?!.*?mobile)/,
			android_phone: /android.*?mobile/,
			blackberry: /blackberry/,
			windows_ce: /windows ce/,
			iemobile: /iemobile/,
			webos: /webos/,
			playbook: /playbook/
		}, props.noVolume);
		
		// The key control object, defining the key codes and the functions to execute.
		this.keyBindings = merge({
			// The parameter, f = this.focusInstance, will be checked truethy before attempting to call any of these functions.
			// Properties may be added to this object, in key/fn pairs, to enable other key controls. EG, for the playlist add-on.
			play: {
				key: 80, // p
				fn: () => {
					if(this.status.paused) {
						this.play();
					} else {
						this.pause();
					}
				}
			},
			fullScreen: {
				key: 70, // f
				fn: () => {
					if(this.status.video || this.props.audioFullScreen) {
						this.props.updateOptions({fullScreen: !this.props.fullScreen});
					}
				}
			},
			muted: {
				key: 77, // m
				fn: () => this.props.updateOptions({muted: !this.props.muted})
			},
			volumeUp: {
				key: 190, // .
				fn: () => this.props.updateOptions({volume: this.props.volume + 0.1})
			},
			volumeDown: {
				key: 188, // ,
				fn: () => this.props.updateOptions({volume: this.props.volume - 0.1})
			},
			loop: {
				key: 76, // l
				fn: () => this.props.updateOptions({loop: this._getCurrentLoop()}, () => this.currentMedia.loop = this.props.loop === "loop" ? true : false) //Todo: change callback
			}
		}, props.keyBindings);
	}
	_setupEvents = () => {
		this.mediaEvent = {
			onProgress: () => {
				if(this.internal.cmdsIgnored && this.readyState > 0) { // Detect iOS executed the command
					this.internal.cmdsIgnored = false;
				}
				this._getHtmlStatus(this.currentMedia);
				this._updateInterface();
				this._trigger(this.props.onProgress);
			},
			onLoadedData: () => {				
				this.androidFix.setMedia = false; // Disable the fix after the first progress event.
				if(this.androidFix.play) { // Play Android audio - performing the fix.
					this.androidFix.play = false;
					this.play(this.androidFix.time);
				}
				if(this.androidFix.pause) { // Pause Android audio at time - performing the fix.
					this.androidFix.pause = false;
					this.pause(this.androidFix.time);
				}
				this._trigger(this.props.onLoadedData);
			},
			onTimeUpdate: () => {			
				this._getHtmlStatus(this.currentMedia);
				this._updateInterface();
				this._trigger(this.props.onTimeUpdate);
			},
			onDurationChange: () => {			
				this._getHtmlStatus(this.currentMedia);
				this._updateInterface();
				this._trigger(this.props.onDurationChange);
			},
			onPlay: () => {			
				this._updateButtons(true);
				this._htmlCheckWaitForPlay(); // So the native controls update this variable and puts the hidden interface in the correct state. Affects toggling native controls.
				this._trigger(this.props.onPlay);
			},
			onPlaying: () => {			
				this._updateButtons(true);
				this._seeked();
				this._trigger(this.props.onPlaying);
			},
			onPause: () => {				
				this._updateButtons(false);
				this._trigger(this.props.onPause);
			},
			onWaiting: () => {			
				this._seeking();
				this._trigger(this.props.onWaiting);
			},
			onSeeking: () => {
				this._seeking();
				this._trigger(this.props.onSeeking);
			},
			onSeeked: () => {				
				this._seeked();
				this._trigger(this.props.onSeeked);
			},
			onVolumeChange: () => {	
				this._updateMute();
				this._updateVolume();
				this._trigger(this.props.onVolumeChange);
			},
			onRateChange: () => {				
				this._updatePlaybackRate();
				this._trigger(this.props.onRateChange);
			},
			onSuspend: () => { // Seems to be the only way of capturing that the iOS4 browser did not actually play the media from the page code. ie., It needs a user gesture.				
				this._seeked();
				this._trigger(this.props.onSuspend);
			},
			onEnded: () => {			
				// Order of the next few commands are important. Change the time and then pause.
				// Solves a bug in Firefox, where issuing pause 1st causes the media to play from the start. ie., The pause is ignored.
				if(!JPlayer.platform.webkit) { // Chrome crashes if you do this in conjunction with a setMedia command in an ended event handler. ie., The playlist demo.
					this.currentMedia.currentTime = 0; // Safari does not care about this command. ie., It works with or without this line. (Both Safari and Chrome are Webkit.)
				}
				this.currentMedia.pause(); // Pause otherwise a click on the progress bar will play from that point, when it shouldn't, since it stopped playback.
				this._updateButtons(false);
				this._getHtmlStatus(this.currentMedia, true); // With override true. Otherwise Chrome leaves progress at full.
				this._updateInterface();		
				this._trigger(this.props.onEnded);

				if (this.props.loop === "loop") {	
					this._trigger(this.props.onRepeat);
				}
			},
			onError: () => {		
				this._updateButtons(false);
				this._seeked();
				if(this.status.srcSet) { // Deals with case of clearMedia() causing an error event.
					clearTimeout(this.internal.htmlDlyCmdId); // Clears any delayed commands used in the HTML solution.
					this.status.waitForLoad = true; // Allows the load operation to try again.
					this.status.waitForPlay = true; // Reset since a play was captured.
					
					if(this.status.video && !this.status.nativeVideoControls) {
						this.setState({hideVideo: true});
					}

					if(this._validString(this.status.media.poster) && !this.status.nativeVideoControls) {
						this.setState({hidePoster: false});
					}
					this.setState({hideVideoPlay: false});

					this._error( {
						type: this.error.URL,
						context: this.status.src, // this.src shows absolute urls. Want context to show the url given.
						message: this.errorMsg.URL,
						hint: this.errorHint.URL
					});
				}
				this._trigger(this.props.onError);
			},
			onLoadStart: () => this._trigger(this.props.onLoadStart),
			onAbort: () => this._trigger(this.props.onAbort),
			onEmptied: () => this._trigger(this.props.onEmptied),
			onStalled: () => this._trigger(this.props.onStalled),
			onLoadedMetadata: () => this._trigger(this.props.onLoadedMetadata),
			onCanPlay: () => this._trigger(this.props.onCanPlay),
			onCanPlayThrough: () => this._trigger(this.props.onCanPlayThrough)
		};
	}
	_setupErrors = () => {
		this.error = {
			NO_SOLUTION: "e_no_solution",
			NO_SUPPORT: "e_no_support",
			URL: "e_url",
			URL_NOT_SET: "e_url_not_set",
			VERSION: "e_version"
		};
		this.errorMsg = {
			NO_SOLUTION: "No solution can be found by jPlayer in this browser. HTML can not be used.", // Used in: _init()
			NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.", // Used in: setMedia()
			URL: "Media URL could not be loaded.",
			URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set." // Used in: load(), play(), pause(), stop() and playHead()
		};
		this.errorHint = {
			NO_SOLUTION: "Review the jPlayer supplied option.",
			NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
			URL: "Check media URL is valid.",
			URL_NOT_SET: "Use setMedia() to set the media URL.",
			VERSION: "Update jPlayer files."
		};
	}
	_initBeforeRender = () => {
		// On iOS, assume commands will be ignored before user initiates them.
		this.internal.cmdsIgnored = JPlayer.platform.ipad || JPlayer.platform.iphone || JPlayer.platform.ipod;

		// Add key bindings focusInstance to 1st jPlayer instanced with key control enabled.
		if(this.props.keyEnabled && !JPlayer.focusInstance) {
			JPlayer.focusInstance = this;
		}

		// A fix for Android where older (2.3) and even some 4.x devices fail to work when changing the *audio* SRC and then playing immediately.
		this.androidFix = {
			setMedia: false, // True when media set
			play: false, // True when a progress event will instruct the media to play
			pause: false, // True when a progress event will instruct the media to pause at a time.
			time: NaN // The play(time) parameter
		};

		this.formats = []; // Array based on supplied string option. Order defines priority.
		this.require = {}; // Which media types are required: video, audio.

		// In _init()'s this.desired code and setmedia(): Accessed via this[solution], where solution from this.solutions array.
		this.html = {
			audio: {},
			video: {}
		}; 

		this.css = {};
		this.css.cs = {}; // Holds the css selector strings

		//TODO: Warning instead of _limitValue for integers not between expected value

		// Create the formats array, with prority based on the order of the supplied formats string
		for (var index1 = 0; index1 < this.props.supplied.length; index1++) {
			var format = this.props.supplied[index1].replace(/^\s+|\s+$/g, ""); //trim

			if(JPlayer.format[format]) { // Check format is valid.
				var dupFound = false;

				for (var index2 = 0; index2 < this.formats.length; index2++) {
					var value2 = this.formats[index2];

					if(format === value2) {
						dupFound = true;
						break;
					}
				}

				if(!dupFound) {
					this.formats.push(format);
				}
			}
		}

		// Determine if we require solutions for audio, video or both media types.
		this.require.audio = false;
		this.require.video = false;

		for (var priority in this.formats) {
			var format = this.formats[priority];

			this.require[JPlayer.format[format].media] = true;
		}

		// Now required types are known, finish the options default settings.
		if(this.require.video) {
			this.props.updateOptions({
				size: merge({width: "480px", height: "270px", cssClass: "jp-video-270p"}, this.props.size),
				sizeFull: merge({width: "100%", height: "100%", cssClass: "jp-video-full"}, this.props.sizeFull)
			});
			this.setState({stateClass: ["jp-video"]});
		} else {
			this.props.updateOptions({
				size: merge({width: "0px", height: "0px", cssClass: ""}, this.props.size),
				sizeFull: merge({width: "0px", height: "0px", cssClass: ""}, this.props.sizeFull)
			});
			this.setState({stateClass: ["jp-audio"]});
		}

		this._setNextProps();
		
		this._extendStyle("posterStyle", {width: this.status.width, height: this.status.height});
		this.setState({hidePoster: true});

		// Determine the status for Blocklisted options.
		this.status.nativeVideoControls = this._uaBlocklist(this.props.nativeVideoControls);
		this.status.noVolume = this._uaBlocklist(this.props.noVolume);
		this.status.noFullWindow = this._uaBlocklist(this.noFullWindow);

		// Create event handlers if native fullscreen is supported
		if(JPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled) {
			this._fullscreenAddEventListeners();
		}

		// The native controls are only for video and are disabled when audio is also used.
		this._restrictNativeVideoControls();
	}
	_initAfterRender = () => {
		this.currentMedia.volume = this.props.volume;
		this.currentMedia.muted = this.props.muted;
		this.currentMedia.autoplay = this.props.autoPlay;
		this.currentMedia.loop = this.props.loop === "loop" ? true : false;

		JPlayer.instances[this.internal.instance] = this;

		for (var priority = 0; priority < this.formats.length; priority++) {
			var format = this.formats[priority];

			this.html.canPlay = {
				[format]: this.html[JPlayer.format[format].media].available && "" !== this._testCanPlayType(JPlayer.format[format].codec)
			}
		}

		this.html.desired = this.require.audio || this.require.video;
		
		// This is what jPlayer will support, based on solution and supplied.
		this.html.support = {};

		for (var priotity = 0; priotity < this.formats.length; priotity++) {
			var format = this.formats[priotity];

			this.html.support[format] = this.html.canPlay[format] && this.html.desired;
		}

		// If jPlayer is supporting any format in a solution, then the solution is used.
		this.html.used = false;

		for (var formatPriority in this.formats) {
			var format = this.formats[formatPriority];

			if(this.html.support[format]) {
				this.html.used = true;
				break;
			}
		}

		if (JPlayer.platform.android) {
			this.props.updateOptions({preload: this.props.preload !== 'auto' ? 'metadata' : 'auto'});
		}

		// Init solution active state and the event gates to false.
		this._resetActive();

		// Set up the css selectors for the control and feedback entities.
		this._cssSelectorAncestor(this.props.cssSelectorAncestor);

		// If html is not being used by this browser, then media playback is not possible. Trigger an error event.
		if(!(this.html.used)) {
			this._error({
				type: this.error.NO_SOLUTION, //Todo: fix errors
				context: "{solution:'" + this.props.solution + "', supplied:'" + this.props.supplied.join(", ") + "'}",
				message: this.errorMsg.NO_SOLUTION,
				hint: this.errorHint.NO_SOLUTION
			});
			this.setState({hideNoSolution: false});
		} else {
			this.setState({hideNoSolution: true});
		}

		// Using the audio element capabilities for playbackRate. ie., Assuming video element is the same.
		this.status.playbackRateEnabled = this._testPlaybackRate();

		if(this.status.playbackRateEnabled) {
			this.currentMedia.defaultPlaybackRate = this.props.defaultPlaybackRate;
			this.currentMedia.playbackRate = this.props.playbackRate;
		}

		this._updatePlaybackRate();
	
		if(this.status.nativeVideoControls) {
			this._extendStyle("videoStyle", {display: "", width: this.status.width, height: this.status.height})
		} else {
			this.setState({hideVideo: true});
		}

		// Initialize the interface components with the options.
		this._updateNativeVideoControls();

		// The other controls are now setup in _cssSelectorAncestor()
		this.setState({hideVideoPlay: true});
	}
	_testCanPlayType = (codec) => {
		// IE9 on Win Server 2008 did not implement canPlayType(), but it has the property.
		try {
			this.currentMedia.canPlayType(codec); // The type is irrelevant.
			return true;
		} catch(err) {
			return false;
		}
	}
	_testPlaybackRate = () => {
		var rate = 0.5;

		// Wrapping in a try/catch, just in case older HTML5 browsers throw and error.
		try {
			if('playbackRate' in this.audio.element()) {
				this.audio.element().playbackRate = rate;
				return this.audio.element().playbackRate === rate;
			} else {
				return false;
			}
		} catch(err) {
			return false;
		}
	}
	_uaBlocklist = (list) => {
		// list : object with properties that are all regular expressions. Property names are irrelevant.
		// Returns true if the user agent is matched in list.
		var	ua = navigator.userAgent.toLowerCase(),
			block = false;

		for (var p in list) {
			var re = list[p];

			if(re && re.test(ua)) {
				block = true;
				break;
			}
		}

		return block;
	}
	_restrictNativeVideoControls = () => {
		// Fallback to noFullWindow when nativeVideoControls is true and audio media is being used. Affects when both media types are used.
		if(this.require.audio) {
			if(this.status.nativeVideoControls) {
				this.status.nativeVideoControls = false;
				this.status.noFullWindow = true;
			}
		}
	}
	_updateNativeVideoControls = () => {
		if(this.html.video.available && this.html.used) {
			// Turn the HTML Video controls on/off
			this.setState({videoControls: this.status.nativeVideoControls});
			// For when option changed. The poster image is not updated, as it is dealt with in setMedia(). Acceptable degradation since seriously doubt these options will change on the fly. Can again review later.
			if(this.status.nativeVideoControls && this.require.video) {
				this.setState({hidePoster: true});
				this._extendStyle("videoStyle", {display: "", width: this.status.width, height: this.status.height});
			} else if(this.status.waitForPlay && this.status.video) {
				this.setState({hidePoster: false, hideVideo: true});
			}
		}
	}
	_removeEventListeners = () => {
		//Remove the fullscreen event listeners
		var fs = JPlayer.nativeFeatures.fullscreen;

		if(this.internal.fullscreenchangeHandler) {
			document.removeEventListener(fs.event.fullscreenchange, this.internal.fullscreenchangeHandler, false);
		}
	}
	_getHtmlStatus = (media, override) => {
		var ct = 0, cpa = 0, sp = 0, cpr = 0;

		// Fixes the duration bug in iOS, where the durationchange event occurs when media.duration is not always correct.
		// Fixes the initial duration bug in BB OS7, where the media.duration is infinity and displays as NaN:NaN due to Date() using inifity.
		if(isFinite(media.duration)) {
			this.status.duration = media.duration;
		}

		ct = media.currentTime;
		cpa = (this.status.duration > 0) ? 100 * ct / this.status.duration : 0;
		if((typeof media.seekable === "object") && (media.seekable.length > 0)) {
			sp = (this.status.duration > 0) ? 100 * media.seekable.end(media.seekable.length-1) / this.status.duration : 100;
			cpr = (this.status.duration > 0) ? 100 * media.currentTime / media.seekable.end(media.seekable.length-1) : 0; // Duration conditional for iOS duration bug. ie., seekable.end is a NaN in that case.
		} else {
			sp = 100;
			cpr = cpa;
		}

		if(override) {
			ct = 0;
			cpr = 0;
			cpa = 0;
		}

		this.status.seekPercent = sp;
		this.status.currentPercentRelative = cpr;
		this.status.currentPercentAbsolute = cpa;
		this.status.currentTime = ct;

		this.status.remaining = this.status.duration - this.status.currentTime;

		this.status.videoWidth = media.videoWidth;
		this.status.videoHeight = media.videoHeight;

		this.status.readyState = media.readyState;
		this.status.networkState = media.networkState;
		this.status.playbackRate = media.playbackRate;
		this.status.ended = media.ended;
	}
	_resetStatus = () => {
		this.status = Object.assign({}, this.status, this.defaultStatus); // Maintains the status properties that persist through a reset.
	}
	_trigger = (func, error) => {
		var jPlayer = {
			version: Object.assign({}, JPlayer.version),
			element: this.currentMedia,
			status: merge({}, this.status), // Deep copy
			html: merge({}, this.html), // Deep copy
			error: Object.assign({}, error)
		}

		if (func !== undefined) {
			func.bind(this)(jPlayer);
		}
	}
	_updateButtons = (playing) => {
		if(playing === undefined) {
			playing = !this.status.paused;
		} else {
			this.status.paused = !playing;
		}

		if(playing) {
			this.addStateClass('playing');
		} else {
			this.removeStateClass('playing');
		}
		if(!this.status.noFullWindow && this.nextProps.fullWindow) {
			this.addStateClass('fullScreen');
		} else {
			this.removeStateClass('fullScreen');
		}
		if(this.nextProps.loop === "loop") {
			this.addStateClass('looped');
		} else {
			this.removeStateClass('looped');
		}
	}
	_updateInterface = () => {
		this._extendStyle("seekBarStyle", {width: this.status.seekPercent+"%"});	

		if (this.props.smoothPlayBar) {
			this._extendStyle("playBarStyle", {width: this.status.currentPercentRelative+"%"});		
		}	

		var currentTimeText = this._convertTime(this.status.currentTime);

		this.setState({currentTimeText: currentTimeText});

		var durationText = '',
			duration = this.status.duration,
			remaining = this.status.remaining;

		if(typeof this.status.media.duration === 'string') {
			durationText = this.status.media.duration;
		} else {
			if(typeof this.status.media.duration === 'number') {
				duration = this.status.media.duration;
				remaining = duration - this.status.currentTime;
			}
			if(this.nextProps.remainingDuration) {
				durationText = (remaining > 0 ? '-' : '') + this._convertTime(remaining);
			} else {
				durationText = this._convertTime(duration);
			}
		}

		this.setState({durationText: durationText});
	}
	_convertTime = ConvertTime.prototype.time
	_seeking = () => {
		this.setState({seeking: true});
		this.addStateClass('seeking');
	}
	_seeked = () => {
		this.setState({seeking: false});
		this.removeStateClass('seeking');
	}
	_resetActive = () => {
		this.html.active = false;
	}
	_escapeHtml = (s) => {
		return s.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;');
	}
	_qualifyURL = (url) => {
		var el = document.createElement('div');
		el.innerHTML= '<a href="' + this._escapeHtml(url) + '">x</a>';
		return el.firstChild.href;
	}
	_absoluteMediaUrls = (media) => {
		for (var type in media) {
			var url = media[type];

			if(url && JPlayer.format[type] && url.substr(0, 5) !== "data:") {
				media[type] = this._qualifyURL(url);
			}
		}

		return media;
	}
	addStateClass = (...stateClasses) => stateClasses.forEach((v, i) => { 
		var stateClass = stateClasses[i];	

		//Use function overload of setState to make sure we have up to date values for duplication check
		this.setState(previousState => {
			var found = previousState.stateClass.some((el) => el === this.stateClass[stateClass]);

			//Don't add duplicates
			if (!found) {
				return {stateClass: [...previousState.stateClass, this.stateClass[stateClass]]};
			}
		});
	});
	removeStateClass = (...stateClasses) => stateClasses.forEach((v, i) => {
		var stateClass = stateClasses[i];

		//ToDo: Fix loop click frame.
		//Use function overload of setState otherwise the queued changes from addStateClass won't have been updated yet and therefore it will act on a 'stale' state
		this.setState(previousState => ({stateClass: previousState.stateClass.filter((el) => el !== this.stateClass[stateClass])}));
	}); 
	
	setMedia = (media) => {
		/*	media[format] = String: URL of format. Must contain all of the supplied option's video or audio formats.
			*	media.poster = String: Video poster URL.
			*	media.track = Array: Of objects defining the track element: kind, src, srclang, label, def.
			*	media.stream = Boolean: * NOT IMPLEMENTED * Designating actual media streams. ie., "false/undefined" for files.
			*/
		var	supported = false,
			posterChanged = this.status.media.poster !== media.poster; // Compare before reset. Important for OSX Safari as this.htmlElement.poster.src is absolute, even if original poster URL was relative.

		this._resetMedia();
		this._resetActive();

		// Clear the Android Fix.
		this.androidFix.setMedia = false;
		this.androidFix.play = false;
		this.androidFix.pause = false;

		// Convert all media URLs to absolute URLs.
		media = this._absoluteMediaUrls(media);

		for (var formatPriority = 0; formatPriority < this.formats.length; formatPriority++) {
			var format = this.formats[formatPriority];
			var isVideo = JPlayer.format[format].media === 'video';

			if(this.html.support[format] && this._validString(media[format])) { // Format supported in solution and url given for format.

			if(isVideo) {
				this._htmlSetVideo(media);
				this.html.active = true;
				this.status.video = true;
				this.setState({hideVideoPlay: false});
			} else {
				this._htmlSetAudio(media);
				this.html.active = true;

				// Setup the Android Fix - Only for HTML audio.
				if(JPlayer.platform.android) {
					this.androidFix.setMedia = true;
				}

				this.status.video = false;
				this.setState({hideVideoPlay: true});
			}
			supported = true;
			break;
			}
		}

		if(supported) {
			if(!(this.status.nativeVideoControls && this.html.video.gate)) {
				// Set poster IMG if native video controls are not being used
				// Note: With IE the IMG onload event occurs immediately when cached.
				// Note: Poster hidden by default in _resetMedia()
				if(this._validString(media.poster)) {
					if(posterChanged) { // Since some browsers do not generate img onload event.
						this.setState({posterSrc: media.poster});
					} else {
						this.setState({hidePoster: false});
					}
				}
			}

			if(typeof media.title === 'string') {
				this.setState({titleText: media.title});
			}

			this.status.srcSet = true;
			this.status.media = Object.assign({}, media);
			this._updateButtons(false);
			this._updateInterface();

			this._trigger(this.props.onSetMedia);
		} else { // jPlayer cannot support any formats provided in this browser
			// Send an error event
			this._error( {
				type: this.error.NO_SUPPORT,
				context: "{supplied:'" + this.props.supplied.join(", ") + "'}",
				message: this.errorMsg.NO_SUPPORT,
				hint: this.errorHint.NO_SUPPORT
			});
		}
	}
	_resetMedia = () => {
		this._resetStatus();
		this._updateButtons(false);
		this._updateInterface();
		this._seeked();
		this.setState({hidePoster: true});

		clearTimeout(this.internal.htmlDlyCmdId);

		if(this.html.active) {
			this._htmlResetMedia();
		}
	}
	clearMedia = () => {
		this._resetMedia();

		if(this.html.active) {
			this._htmlClearMedia();
		}

		this._resetActive();
	}
	load = () => {
		if(this.status.srcSet) {
			if(this.html.active) {
				this._htmlLoad();
			}
		} else {
			this._urlNotSetError("load");
		}
	}
	focus = () => {
		if(this.props.keyEnabled) {
			JPlayer.focusInstance = this;
		}
	}
	play = (time) => {
		var guiAction = typeof time === "object"; // Flags GUI click events so we know this was not a direct command, but an action taken by the user on the GUI.
		if(guiAction && !this.status.paused) {
			this.pause(time); // The time would be the click event, but passing it over so info is not lost.
		} else {
			time = (typeof time === "number") ? time : NaN; // Remove the event from click handler
			if(this.status.srcSet) {
				this.focus();
				if(this.html.active) {
					this._htmlPlay(time);
				}
			} else {
				this._urlNotSetError("play");
			}
		}
	}
	videoPlay = (e) => {// Handles clicks on the play button over the video poster
		this.play();
	}
	pause = (time) => {
		time = (typeof time === "number") ? time : NaN; // Remove the event from click handler
		if(this.status.srcSet) {
			if(this.html.active) {
				this._htmlPause(time);
			}
		} else {
			this._urlNotSetError("pause");
		}
	}
	tellOthers = (command, conditions, ...others) => {
		var	hasConditions = typeof conditions === 'function';

		if(typeof command !== 'string') { // Ignore, since no command.
			return; // Return undefined to maintain chaining.
		}

		for (var index in JPlayer.instances) {
			var instance = JPlayer.instances[index];

			if(this.jPlayerElement !== instance.jPlayerElement) { // Do not tell this instance.
				if(!hasConditions || conditions.bind(instance)()) {
					this.setOptions.bind(instance)(command, ...others);
				}
			}
		}
	}
	pauseOthers = (time) => {
		this.tellOthers("pause", function() {
			// In the conditions function, the "this" context is the other instance's jPlayer object.
			return this.status.srcSet;
		}, time);
	}
	stop = () => {
		if(this.status.srcSet) {
			if(this.html.active) {
				this._htmlPause(0);
			}
		} else {
			this._urlNotSetError("stop");
		}
	}
	playHead = (p) => {
		p = this._limitValue(p, 0, 100);
		if(this.status.srcSet) {
			if(this.html.active) {
				this._htmlPlayHead(p);
			}
		} else {
			this._urlNotSetError("playHead");
		}
	}
	mute = (mute) => {	 // mute is either: undefined (true), an event object (true) or a boolean (muted).									
		var guiAction = typeof mute === "object"; // Flags GUI click events so we know this was not a direct command, but an action taken by the user on the GUI.
		if(guiAction && this.props.muted) {
			this.props.updateOptions({muted: false});
		} else {
			mute = mute === undefined ? true : !!mute;
			this.props.updateOptions({muted: mute});
		}
	}
	unmute = (unmute) => {	 // unmute is either: undefined (true), an event object (true) or a boolean (!muted).
		unmute = unmute === undefined ? true : !!unmute;
		this.props.updateOptions({muted: !unmute});
	}
	_updateMute = (mute) => {
		if(mute === undefined) {
			mute = this.props.muted;
		}
		if(mute) {
			this.addStateClass('muted');
		} else {
			this.removeStateClass('muted');
		}	
	}
	volumeBar = (e) => {	 // Handles clicks on the volumeBar
		// Using $(e.currentTarget) to enable multiple volume bars

		var bar = e.currentTarget,
			offset = getOffset(bar),
			x = e.pageX - offset.left,
			w = getWidth(bar),
			y = getHeight(bar) - e.pageY + offset.top,
			h = getHeight(bar);

		if(this.props.verticalVolume) {
			this.props.updateOptions({volume: y/h});
		} else {
			this.props.updateOptions({volume: x/w});
		}

		if(this.props.muted) {
			this.props.updateOptions({muted: false});
		}
	}
	_updateVolume = (v) => {
		v = this._limitValue(v, 0, 1);
		if(v === undefined) {
			v = this.props.volume;
		}
		v = this.props.muted ? 0 : v;

		if(this.status.noVolume) {
			this.addStateClass('noVolume');
			this.setState({hideVolumeBar: true, hideVolumeBarValue: true, hideVolumeMax: true});
		} else {
			this.removeStateClass('noVolume');

			var volumeBarDimensionValue = (v*100)+"%";
			this._extendStyle("volumeBarValueStyle", {display: "", width: !this.props.verticalVolume ? volumeBarDimensionValue : null, height: this.props.verticalVolume ? volumeBarDimensionValue : null});	
			this.setState({hideVolumeBar: false, hideVolumeMax: false});
		}
	}
	volumeMax = () => {	 // Handles clicks on the volume max
		this.props.updateOptions({volume: 1});

		if(this.props.muted) {
			this.props.updateOptions({muted: false});
		}
	}
	_cssSelectorAncestor = (ancestor) => {
		this._removeUiClass();
		this._addUiClass();
							
		// Set the GUI to the current state.
		this._updateInterface();
		this._updateButtons();
		this._updateVolume();
		this._updateMute();
	}
	duration = (e) => {
		if(this.props.toggleDuration) {
			if(this.props.captureDuration) {
				e.stopPropagation();
			}
			this.props.updateOptions({remainingDuration: !this.props.remainingDuration});
		}
	}
	seekBar = (e) => {	 // Handles clicks on the seekBar
		// Using $(e.currentTarget) to enable multiple seek bars
		var bar = e.currentTarget,
			offset = getOffset(bar),
			x = e.pageX - offset.left,
			w = getWidth(bar),
			p = 100 * x / w;

		this.playHead(p);
	}
	playbackRateBar = (e) => {	 // Handles clicks on the playbackRateBar
		// Using e.currentTarget to enable multiple playbackRate bars
		var bar = e.currentTarget,
			offset = getOffset(bar),
			x = e.pageX - offset.left,
			w = getWidth(bar),
			y = getHeight(bar) - e.pageY + offset.top,
			h = getHeight(bar),
			ratio,
			pbr;

		if(this.props.verticalPlaybackRate) {
			ratio = y/h;
		} else {
			ratio = x/w;
		}

		pbr = ratio * (this.props.maxPlaybackRate - this.props.minPlaybackRate) + this.props.minPlaybackRate;
		this.props.updateOptions({playbackRate: pbr});
	}
	_updatePlaybackRate = () => {
		var pbr = this.nextProps.playbackRate,
			ratio = (pbr - this.props.minPlaybackRate) / (this.props.maxPlaybackRate - this.props.minPlaybackRate);
		if(this.status.playbackRateEnabled) {
			this.setState({hidePlaybackRateBar: false});

			var playbackRateBarDimensionValue = (ratio*100)+"%";

			this._extendStyle("playbackRateBarValueStyle", {display: "", width: !this.props.verticalPlaybackRate ? playbackRateBarDimensionValue : null, 
				height: this.props.verticalPlaybackRate ? playbackRateBarDimensionValue : null});
		} else {
			this.setState({hidePlaybackRateBar: true, hidePlaybackRateBarValue: true});
		}
	}
	// Handle clicks on the repeat button	
	repeat = () => this.props.updateOptions({loop: this._getCurrentLoop()}, () => this.currentMedia.loop = this.props.loop === "loop" ? true : false);
	// Handle clicks on the repeatOff button
	repeatOff = () => this.props.updateOptions({loop: "off"});
	_getCurrentLoop = () => {	
		if (this.currentLoopIndex >= this.loopOptions.length - 1) {
			this.currentLoopIndex = -1;
		}
		return this.loopOptions[++this.currentLoopIndex];
	}
	_loop = () => {
		this._updateButtons(); 
		this._trigger(this.props.onRepeat);
	}
	_setNextProps = (nextProps = {}) => {
		//Props that get updated within the JPlayer component as well as through props
		this.nextProps = {
			playbackRate: nextProps.playbackRate === undefined ? this.props.playbackRate : nextProps.playbackRate,
			fullWindow: nextProps.fullWindow === undefined ? this.props.fullWindow : nextProps.fullWindow,
			remainingDuration: nextProps.remainingDuration === undefined ? this.props.remainingDuration : nextProps.remainingDuration,
			loop: nextProps.loop === undefined ? this.props.loop : nextProps.loop,
			size: merge({}, this.nextProps === undefined ? {} : this.nextProps.size, this.props.size, nextProps.size),
			sizeFull: merge({}, this.nextProps === undefined ? {} : this.nextProps.sizeFull, this.props.sizeFull, nextProps.sizeFull)
		};
	}
	_setOptions = (options) => {	
		for (var key in options) {
			var option = options[key];
			
			if (options.hasOwnProperty(key)) {
				if (!isEqual(this.props[key], option)) {		
					this._setOption(key, option);
				}
			}
		}
	}
	_setOption = (key, value) => {
		switch(key) {
			case "volume":
				if(this.html.used) {
					this.currentMedia.volume = value;
				}
				if(this.props.globalVolume) {
					this.tellOthers("volumeWorker", function() {
						// Check the other instance has global volume enabled.
						return this.props.globalVolume;
					}, value);
				}
				break;
			case "muted":
				if(this.html.used) {
					this.currentMedia.muted = value;
				}
				if(this.props.globalVolume) {
					this.tellOthers("mutedWorker", function() {
						// Check the other instance has global volume enabled.
						return this.props.globalVolume;
					}, value);
				}
				break;
			case "autoPlay":
				if(this.html.used) {
					this.currentMedia.autoplay = value;
				}
				break;
			case "playbackRate":
				if(this.html.used) {
					this.currentMedia.playbackRate = value;
				}
				this._setNextProps({playbackRate: value});
				this._updatePlaybackRate();
				break;
			case "defaultPlaybackRate":
				if(this.html.used) {
					this.currentMedia.defaultPlaybackRate = value;
				}
				this._updatePlaybackRate();
				break;
			case "minPlaybackRate":
				this._updatePlaybackRate();
				break;
			case "maxPlaybackRate":
				this._updatePlaybackRate();
				break;
			case "fullScreen":
				var wkv = JPlayer.nativeFeatures.fullscreen.used.webkitVideo;
				if(!wkv || wkv && !this.status.waitForPlay) {
					if(value) {
						this._requestFullscreen();
					} else {
						this._exitFullscreen();
					}
					if(!wkv) {
						this.props.updateOptions({fullWindow: value});
					}
				}
				break;
			case "fullWindow":
				this._removeUiClass();
				this._setNextProps({fullWindow: value});
				this._refreshSize();
				break;
			case "size":
				if(!this.props.fullWindow && this.props[key].cssClass !== value.cssClass) {
					this._removeUiClass();
				}
				this._setNextProps({size: value});
				this._refreshSize();
				break;
			case "sizeFull":
				if(this.props.fullWindow && this.props[key].cssClass !== value.cssClass) {
					this._removeUiClass();
				}
				this._setNextProps({sizeFull: value});
				this._refreshSize();
				break;
			case "loop":
				this._setNextProps({loop: value});
				this._loop();
				break;
			case "remainingDuration":
				this._setNextProps({remainingDuration: value});
				this._updateInterface();
				break;
			case "nativeVideoControls":
				this.status.nativeVideoControls = this._uaBlocklist(this.props.nativeVideoControls);
				this._restrictNativeVideoControls();
				this._updateNativeVideoControls();
				break;
			case "noFullWindow":
				this.status.nativeVideoControls = this._uaBlocklist(this.props.nativeVideoControls); // Need to check again as noFullWindow can depend on this flag and the restrict() can override it.
				this.status.noFullWindow = this._uaBlocklist(this.props.noFullWindow);
				this._restrictNativeVideoControls();
				this._updateButtons();
				break;
			case "noVolume":
				this.status.noVolume = this._uaBlocklist(this.props.noVolume);
				this._updateVolume();
				this._updateMute();
				break;
			case "keyEnabled" :
				if(!value && this === JPlayer.focusInstance) {
					JPlayer.focusInstance = null;
				}
				break;
		}
	}
	_refreshSize = () => {
		this._setSize(); // update status and jPlayer element size
		this._addUiClass(); // update the ui class
		this._updateSize(); // update internal sizes
		this._updateButtons();
		this._trigger(this.props.onResize);
	}
	_setSize = () => {
		// Determine the current size from the options
		if(this.nextProps.fullWindow) {
			this.status.width = this.nextProps.sizeFull.width;
			this.status.height = this.nextProps.sizeFull.height;
			this.status.cssClass = this.nextProps.sizeFull.cssClass;
		} else {
			this.status.width = this.nextProps.size.width;
			this.status.height = this.nextProps.size.height;
			this.status.cssClass = this.nextProps.size.cssClass;
		}

		// Set the size of the jPlayer area.
		this._extendStyle("jPlayerStyle", {width: this.status.width, height: this.status.height});
	}
	_addUiClass = () => {
		//Cache the value in a variable as otherwise it will change before setState is called
		var cssClassToRemove = this.status.cssClass;
		//Use function overload of setState to make sure we have up to date values
		this.setState(previousState => {		
			var found = previousState.stateClass.some((el) => el === cssClassToRemove);

			//Don't add duplicates or empty strings
			if (!found && cssClassToRemove) {
				return {stateClass: [...previousState.stateClass, cssClassToRemove]};
			}
		});
	}
	//Use function overload of setState otherwise the queued changes from _addUiClass won't have been updated yet and therefore it will act on a 'stale' state
	_removeUiClass = () => {
		//Cache the value in a variable as otherwise it will change before setState is called
		var cssClassToRemove = this.status.cssClass;
		this.setState(previousState => ({stateClass: previousState.stateClass.filter((el) => el !== cssClassToRemove)}));
	}
	_updateSize = () => {
		this._extendStyle("posterStyle", {width: this.status.width, height: this.status.height});

		// Video html resized if necessary at this time, or if native video controls being used.
		if(!this.status.waitForPlay && this.html.active && this.status.video
				|| this.html.video.available && this.html.used && this.status.nativeVideoControls) {
			this._extendStyle("videoStyle", {width: this.status.width, height: this.status.height});
		}
	}
	fullScreen = (event) => {
		var guiAction = typeof event === "object"; // Flags GUI click events so we know this was not a direct command, but an action taken by the user on the GUI.
		
		if(guiAction && this.props.fullScreen) {
			this.props.updateOptions({fullScreen: false});
		} else {
			this.props.updateOptions({fullScreen: true});
		}
	}
	restoreScreen = () => {
		this.props.updateOptions({fullScreen: false});
	}
	_fullscreenAddEventListeners = () => {
		var	fs = JPlayer.nativeFeatures.fullscreen;

		if(fs.api.fullscreenEnabled) {
			if(fs.event.fullscreenchange) {
				// Create the event handler function and store it for removal.
				if(typeof this.internal.fullscreenchangeHandler !== 'function') {
					this.internal.fullscreenchangeHandler = () => {
						this._fullscreenchange();
					};
				}
				document.addEventListener(fs.event.fullscreenchange, this.internal.fullscreenchangeHandler, false);
			}
			// No point creating handler for fullscreenerror.
			// Either logic avoids fullscreen occurring (w3c/moz), or their is no event on the browser (webkit).
		}
	}
	_fullscreenchange = () => {
		// If nothing is fullscreen, then we cannot be in fullscreen mode.
		if(this.props.fullScreen && !JPlayer.nativeFeatures.fullscreen.api.fullscreenElement()) {
			this.props.updateOptions({fullScreen: false});
		}
	}
	_requestFullscreen = () => {
		var e = document.querySelector(this.props.cssSelectorAncestor),
			fs = JPlayer.nativeFeatures.fullscreen;

		// This method needs the video element. For iOS and Android.
		if(fs.used.webkitVideo) {
			e = this.currentMedia;
		}

		if(fs.api.fullscreenEnabled) {
			fs.api.requestFullscreen(e);
		}
	}
	_posterLoad = () => {
		if(!this.status.video || this.status.waitForPlay) {
			this.setState({hidePoster: false});
		}
	}
	_exitFullscreen = () => {
		var fs = JPlayer.nativeFeatures.fullscreen,
			e;

		// This method needs the video element. For iOS and Android.
		if(fs.used.webkitVideo) {
			e = this.video.element();
		}

		if(fs.api.fullscreenEnabled) {
			fs.api.exitFullscreen(e);
		}
	}
	_htmlInitMedia = (media) => {
		var mediaArray = media.track || [];
		var tracks = [];

		// Create any track elements given with the media, as an Array of track Objects.
		for (var index = 0; index < mediaArray.length; index++) {
			var v = array[index];
			var vDef = undefined

			if(v.def) {
				vDef = v.def;
			}

			trackElements.push(<track kind={v.Kind} src={v.src} srclang={v.srclang} label={v.label} default={vDef}/>);
		}

		this.setState({tracks: tracks});
		this.currentMedia.src = this.status.src;

		if(this.props.preload !== 'none') {
			this._htmlLoad(); // See function for comments
		}
		this._trigger(this.props.onTimeUpdate);
	}
	_htmlSetFormat = (media) => {
		// Always finds a format due to checks in setMedia()
		for (var priority = 0; priority < this.formats.length; priority++) {
			var format = this.formats[priority];

			if(this.html.support[format] && media[format]) {
				this.status.src = media[format];
				this.status.format[format] = true;
				this.status.formatType = format;
				break;
			}
		}
	}
	_htmlSetAudio = (media) => {
		this._htmlSetFormat(media);							
		this._htmlInitMedia(media);
	}
	_htmlSetVideo = (media) => {
		this._htmlSetFormat(media);
		if(this.status.nativeVideoControls) {
			this.video.element().poster = this._validString(media.poster) ? media.poster : "";
		}
		this._htmlInitMedia(media);
	}
	_htmlResetMedia = () => {
		if(!this.status.nativeVideoControls) {
			this.setState({hideVideo: true});
		}

		this.currentMedia.pause();
	}
	_htmlClearMedia = () => {
		if(this.currentMedia) {
			this.currentMedia.src = "about:blank";

			// The following load() is only required for Firefox 3.6 (PowerMacs).
			// Recent HTMl5 browsers only require the src change. Due to changes in W3C spec and load() effect.
			this.currentMedia.load(); // Stops an old, "in progress" download from continuing the download. Triggers the loadstart, error and emptied events, due to the empty src. Also an abort event if a download was in progress.
		}
	}
	_htmlLoad = () => {
		// This function remains to allow the early HTML5 browsers to work, such as Firefox 3.6
		// A change in the W3C spec for the media.load() command means that this is no longer necessary.
		// This command should be removed and actually causes minor undesirable effects on some browsers. Such as loading the whole file and not only the metadata.
		if(this.status.waitForLoad) {
			this.status.waitForLoad = false;
			this.currentMedia.load();
		}
		clearTimeout(this.internal.htmlDlyCmdId);
	}
	_htmlPlay = (time) => {
		this.androidFix.pause = false; // Cancel the pause fix.

		this._htmlLoad(); // Loads if required and clears any delayed commands.

		// Setup the Android Fix.
		if(this.androidFix.setMedia) {
			this.androidFix.play = true;
			this.androidFix.time = time;

		} else if(!isNaN(time)) {

			// Attempt to play it, since iOS has been ignoring commands
			if(this.internal.cmdsIgnored) {
				this.currentMedia.play();
			}

			try {
				// !this.currentMedia.seekable is for old HTML5 browsers, like Firefox 3.6.
				// Checking seekable.length is important for iOS6 to work with setMedia().play(time)
				if(!this.currentMedia.seekable || typeof this.currentMedia.seekable === "object" && this.currentMedia.seekable.length > 0) {
					this.currentMedia.currentTime = time;
					this.currentMedia.play();
				} else {
					throw 1;
				}
			} catch(err) {
				this.internal.htmlDlyCmdId = setTimeout(() => {
					this.play(time);
				}, 250);
				return; // Cancel execution and wait for the delayed command.
			}
		} else {
			this.currentMedia.play();
		}

		this._htmlCheckWaitForPlay();
	}
	_htmlPause = (time) => {
		this.androidFix.play = false; // Cancel the play fix.

		if(time > 0) { // We do not want the stop() command, which does pause(0), causing a load operation.
			this._htmlLoad(); // Loads if required and clears any delayed commands.
		} else {
			clearTimeout(this.internal.htmlDlyCmdId);
		}

		// Order of these commands is important for Safari (Win) and IE9. Pause then change currentTime.
		this.currentMedia.pause();

		// Setup the Android Fix.
		if(this.androidFix.setMedia) {
			this.androidFix.pause = true;
			this.androidFix.time = time;

		} else if(!isNaN(time)) {
			try {
				if(!this.currentMedia.seekable || typeof this.currentMedia.seekable === "object" && this.currentMedia.seekable.length > 0) {
					this.currentMedia.currentTime = time;
				} else {
					throw 1;
				}
			} catch(err) {
				this.internal.htmlDlyCmdId = setTimeout(() => {
					this.pause(time);
				}, 250);
				return; // Cancel execution and wait for the delayed command.
			}
		}
		if(time > 0) { // Avoids a setMedia() followed by stop() or pause(0) hiding the video play button.
			this._htmlCheckWaitForPlay();
		}
	}
	_htmlPlayHead = (percent) => {
		this._htmlLoad(); // Loads if required and clears any delayed commands.

		// This playHead() method needs a refactor to apply the android fix.

		try {
			if(typeof this.currentMedia.seekable === "object" && this.currentMedia.seekable.length > 0) {
				this.currentMedia.currentTime = percent * this.currentMedia.seekable.end(this.currentMedia.seekable.length-1) / 100;
			} else if(this.currentMedia.duration > 0 && !isNaN(this.currentMedia.duration)) {
				this.currentMedia.currentTime = percent * this.currentMedia.duration / 100;
			} else {
				throw "e";
			}
		} catch(err) {
			this.internal.htmlDlyCmdId = setTimeout(() => {
				this.playHead(percent);
			}, 250);
			return; // Cancel execution and wait for the delayed command.
		}
		if(!this.status.waitForLoad) {
			this._htmlCheckWaitForPlay();
		}
	}
	_htmlCheckWaitForPlay = () => {
		if(this.status.waitForPlay) {
			this.status.waitForPlay = false;
			this.setState({hideVideoPlay: true});

			if(this.status.video) {
				this.setState({hidePoster: true});
				this._extendStyle("videoStyle", {width: this.status.width, height: this.status.height});
			}
		}
	}
	_validString = (url) => {
		return (url && typeof url === "string"); // Empty strings return false
	}
	_limitValue = (value, min, max) => {
		return (value < min) ? min : ((value > max) ? max : value);
	}
	_urlNotSetError = (context) => {
		this._error( {
			type: this.error.URL_NOT_SET,
			context: context,
			message: this.errorMsg.URL_NOT_SET,
			hint: this.errorHint.URL_NOT_SET
		});
	}
	_error = (error) => {
		this._trigger(this.props.onError, error);
	}
	componentWillReceiveProps(nextProps) {
		this._setOptions(nextProps);

		if (nextProps.stateClassesToAdd !== undefined) {
			Array.isArray(nextProps.stateClassesToAdd) ? this.addStateClass(...nextProps.stateClassesToAdd) : this.addStateClass(nextProps.stateClassesToAdd);
		}

		if (nextProps.stateClassesToRemove !== undefined) {
			Array.isArray(nextProps.stateClassesToRemove) ? this.removeStateClass(...nextProps.stateClassesToRemove) : this.removeStateClass(nextProps.stateClassesToRemove);
		}
	}
	componentWillUnmount() {
		this._removeEventListeners();
		document.documentElement.removeEventListener("keydown", this._keyBindings);
	}
	componentWillMount() {
		this._initBeforeRender();
	}
	componentDidMount() {
		if (this.audio.element()){
			this.currentMedia = this.audio.element();
			this.html.audio.available = !!this.audio.element().canPlayType && this._testCanPlayType(JPlayer.format.mp3.codec); // Test is for IE9 on Win Server 2008. 
		}

		if (this.video.element()){
			this.currentMedia = this.video.element();
			this.html.video.available = !!this.video.element().canPlayType && this._testCanPlayType(JPlayer.format.m4v.codec);
		}

		this._initAfterRender();
	}
	render() {
		return (
			<div id={this.props.cssSelectorAncestor.slice(1)} class={this.state.stateClass.join(" ")}>
				<div ref={(jPlayerElement) => this.jPlayerElement = jPlayerElement} id={this.props.jPlayerSelector.slice(1)} class="jp-jplayer" style={this.state.jPlayerStyle}>
					<Poster hidePoster={this.state.hidePoster} src={this.state.posterSrc} style={this.state.posterStyle} onLoad={this._posterLoad} onClick={() => this._trigger(this.props.onClick)} /> 
					<Audio ref={(audio) => this.audio = audio} require={this.require.audio} events={this.mediaEvent}>
						{this.state.videoTracks}
					</Audio>
					<Video ref={(video) => this.video = video} require={this.require.video} hideVideo={this.state.hideVideo} style={this.state.videoStyle} onClick={() => this._trigger(this.props.onClick)} events={this.mediaEvent}>
						{this.state.videoTracks}
					</Video>
				</div>
				<GUI nativeVideoControls={this.status.nativeVideoControls} fullWindow={this.props.fullWindow} autoHide={this.autoHide} fadeInConfig={this.props.guiFadeInAnimation} fadeOutConfig={this.props.guiFadeOutAnimation}>
					<div class="jp-controls">
						<a class="jp-play" onClick={this.play}>
							{this.props.html.play}
						</a>
						<a class="jp-mute" onClick={this.mute}>
							{this.props.html.mute}
						</a>
						<a class="jp-repeat" onClick={this.repeat}>							
							{this.props.html.repeat}			
						</a>																
						<a class="jp-full-screen" onClick={this.fullScreen}>
							{this.props.html.fullScreen}
						</a>
						<div class={this.state.hideVolumeBar ? "jp-volume-bar " + JPlayer.className.hidden : "jp-volume-bar"} style={this.state.volumeBarStyle} onClick={this.volumeBar}>
							<div class={this.state.hideVolumeBarValue ? "jp-volume-bar-value " + JPlayer.className.hidden : "jp-volume-bar-value"} style={this.state.volumeBarValueStyle} />
						</div>
						{
						/*<div class="jp-title">
							{this.state.titleText}
						</div>*/
						}
						<div class={this.state.hidePlaybackRateBar ? "jp-playback-rate-bar " + JPlayer.className.hidden : "jp-playback-rate-bar"} style={this.state.playbackRateBarStyle} onClick={this.playbackRateBar}>
							<div class={this.state.hidePlaybackRateBarValue ? "jp-playback-rate-bar-value " + JPlayer.className.hidden : "jp-playback-rate-bar-value"} style={this.state.playbackRateBarValueStyle} />
						</div>						
						{this.props.additionalControls}	
					</div>
					<div class="jp-progress">
						<div class={this.state.seeking ? "jp-seek-bar " + JPlayer.className.seeking : "jp-seek-bar"} style={this.state.seekBarStyle} onClick={this.seekBar}>                         
							<PlayBar smoothPlayBar={this.props.smoothPlayBar} currentPercentAbsolute={this.status.currentPercentAbsolute} playBarStyle={this.state.playBarStyle} />
							<div class="jp-current-time">{this.state.currentTimeText}</div>
							<div class="jp-duration" onClick={this.state.durationOnClick}>{this.state.durationText}</div>
						</div>
					</div>
				</GUI>
				<div class={this.state.hideNoSolution ? "jp-no-solution " + JPlayer.className.hidden : "jp-no-solution"} style={this.state.noSolutionStyle}>
					<span>Update Required</span>
					To play the media you will need to update your browser to a recent version.
				</div>
			</div>
		);
	}
}

class GUI extends React.Component {
	constructor() {
		super();
		
		this.state = {};
	}
	_setFading = (event) => {
		if (!this.state.isFadingIn) {
			this.fadeHoldTimeout = setTimeout(() => {
				this.setState({isFadingIn: false});
			}, this.props.autoHide.hold);
		}
		
		this.setState({isFadingIn: true});
	}
	_updateAutoHide = () => (
		<div class={this.props.nativeVideoControls ? JPlayer.className.hidden : null} onMouseMove={this._setFading} style={{width: "100%", height: "100%", position: "fixed", top: "0"}}>
			<Motion defaultStyle={{opacityToInterpTo: 1}} style={{opacityToInterpTo: spring(this.state.isFadingIn ? 1 : 0, this.state.isFadingIn ? this.props.fadeInConfig : this.props.fadeOutConfig)}}>
				{(values) => <div class="jp-gui" onMouseLeave={() => this.setState({isFadingIn: false})} onMouseEnter={() => clearTimeout(this.fadeHoldTimeout)} style={{opacity: values.opacityToInterpTo, display: values.opacityToInterpTo <= 0.05 ? "none" : ""}}>{this.props.children}</div>}
			</Motion>
		</div>
	);
	render() {
		return (
			this.props.fullWindow && this.props.autoHide.full || !this.props.fullWindow && this.props.autoHide.restored ?
				this._updateAutoHide()  
			:	<div class={this.props.nativeVideoControls ? "jp-gui " + JPlayer.className.hidden : "jp-gui"}>{this.props.children}</div>
		);
	}
};

const PlayBar = (props) => (
	props.smoothPlayBar ? 
		<Motion style={{smoothWidth: spring(props.currentPercentAbsolute, [250])}}>
			{(values) => <div class="jp-play-bar" style={{width: values.smoothWidth + "%"}} />}
		</Motion> 
	:	<div class="jp-play-bar" style={props.playBarStyle} />
);

const Poster = (props) => (
	<img class={props.hidePoster ? JPlayer.className.hidden : null} src={props.src} style={props.style} onLoad={props.onLoad} onClick={props.onClick} />
);

class Audio extends React.Component {
	element = () => this.audioElement
	render() {
		return (
			this.props.require ?
				<audio ref={(audioElement) => this.audioElement = audioElement} {...this.props.events}>
					{this.props.children}
				</audio>
			: null
		);
	}
}

class Video extends React.Component {
	element = () => this.videoElement
	render(){
		return (
			this.props.require ?
				<video ref={(videoElement) => this.videoElement = videoElement} class={this.props.hideVideo ? JPlayer.className.hidden : null} style={this.props.style} onClick={this.props.onClick} {...this.props.events}>
					{this.props.children}
				</video>
			: null
		);
	}
}

JPlayer.className = {
	hidden: "jp-hidden",
	seeking: "jp-seeking-bg"
}

var keyBindings = (event) => {
	var f = JPlayer.focusInstance,
		ignoreKey;

	//A jPlayer instance must be in focusInstance. ie., keyEnabled and the last one played.
	if(f) {
		// What generated the key press?
		for (var index = 0; index < JPlayer.keyIgnoreElementNames.length; index++) {
			var name = JPlayer.keyIgnoreElementNames[index];

			if(event.target.nodeName.toUpperCase() === name.toUpperCase()) {
				ignoreKey = true;
				break;
			}
		}

		if(!ignoreKey) {
			var keyBindings = f.keyBindings;

			for (var action in keyBindings) {
				var binding = keyBindings[action];

				if(
					(binding && isFunction(binding.fn)) &&
					((typeof binding.key === 'number' && event.which === binding.key) ||
					(typeof binding.key === 'string' && event.key === binding.key))
				) {
					event.preventDefault(); // Key being used by jPlayer, so prevent default operation.
					binding.fn.bind(f)();
					break;
				}
			}
		}
	}
}

JPlayer.keys = ((en) => {
	var event = "keydown";

	// Remove any binding, just in case enabled more than once.
	document.documentElement.removeEventListener(event, keyBindings);

	if(en) {
		document.documentElement.addEventListener(event, keyBindings);
	}
})(true);

JPlayer.timeFormat = {
	showHour: false,
	showMin: true,
	showSec: true,
	padHour: false,
	padMin: true,
	padSec: true,
	sepHour: ":",
	sepMin: ":",
	sepSec: ""
};

JPlayer.keyIgnoreElementNames = ["A", "INPUT", "TEXTAREA", "SELECT", "BUTTON"];
JPlayer.focusInstance = null;

JPlayer.uaBrowser = (userAgent) => {
	var ua = userAgent.toLowerCase();

	// Useragent RegExp
	var rwebkit = /(webkit)[ \/]([\w.]+)/;
	var ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
	var rmsie = /(msie) ([\w.]+)/;
	var rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;

	var match = rwebkit.exec( ua ) ||
		ropera.exec( ua ) ||
		rmsie.exec( ua ) ||
		ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
		[];

	return { browser: match[1] || "", version: match[2] || "0" };
}

JPlayer.uaPlatform = (userAgent) => {
	var ua = userAgent.toLowerCase();

	// Useragent RegExp
	var rplatform = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/;
	var rtablet = /(ipad|playbook)/;
	var randroid = /(android)/;
	var rmobile = /(mobile)/;

	var platform = rplatform.exec( ua ) || [];
	var tablet = rtablet.exec( ua ) ||
		!rmobile.exec( ua ) && randroid.exec( ua ) ||
		[];

	if(platform[1]) {
		platform[1] = platform[1].replace(/\s/g, "_"); // Change whitespace to underscore. Enables dot notation.
	}

	return { platform: platform[1] || "", tablet: tablet[1] || "" };
}

// Internet Explorer (IE) Browser Document Mode Sniffer. Based on code at:
// http://msdn.microsoft.com/en-us/library/cc288325%28v=vs.85%29.aspx#GetMode
JPlayer.getDocMode = () => {
	var docMode;

	if (JPlayer.browser.msie) {
		if (document.documentMode) { // IE8 or later
			docMode = document.documentMode;
		} else { // IE 5-7
			docMode = 5; // Assume quirks mode unless proven otherwise

			if (document.compatMode && document.compatMode === "CSS1Compat") {
				docMode = 7; // standards mode
			}
		}
	}
	return docMode;
}

JPlayer.browser = {};
JPlayer.platform = {};

var browserMatch = JPlayer.uaBrowser(navigator.userAgent);

if (browserMatch.browser) {
	JPlayer.browser[browserMatch.browser] = true;
	JPlayer.browser.version = browserMatch.version;
}

var platformMatch = JPlayer.uaPlatform(navigator.userAgent);

if (platformMatch.platform) {
	JPlayer.platform[platformMatch.platform] = true;
	JPlayer.platform.mobile = !platformMatch.tablet;
	JPlayer.platform.tablet = !!platformMatch.tablet;
}

JPlayer.browser.documentMode = JPlayer.getDocMode();

JPlayer.nativeFeatures = {
	init: function() {
		/* Fullscreen function naming influenced by W3C naming.
			* No support for: Mozilla Proposal: https://wiki.mozilla.org/Gecko:FullScreenAPI
			*/
		var d = document,
			v = d.createElement('video'),
			spec = {
				// http://www.w3.org/TR/fullscreen/
				w3c: [
					'fullscreenEnabled',
					'fullscreenElement',
					'requestFullscreen',
					'exitFullscreen',
					'fullscreenchange',
					'fullscreenerror'
				],
				// https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
				moz: [
					'mozFullScreenEnabled',
					'mozFullScreenElement',
					'mozRequestFullScreen',
					'mozCancelFullScreen',
					'mozfullscreenchange',
					'mozfullscreenerror'
				],
				// http://developer.apple.com/library/safari/#documentation/WebKit/Reference/ElementClassRef/Element/Element.html
				// http://developer.apple.com/library/safari/#documentation/UserExperience/Reference/DocumentAdditionsReference/DocumentAdditions/DocumentAdditions.html
				webkit: [
					'',
					'webkitCurrentFullScreenElement',
					'webkitRequestFullScreen',
					'webkitCancelFullScreen',
					'webkitfullscreenchange',
					''
				],
				// http://developer.apple.com/library/safari/#documentation/AudioVideo/Reference/HTMLVideoElementClassReference/HTMLVideoElement/HTMLVideoElement.html
				// https://developer.apple.com/library/safari/samplecode/HTML5VideoEventFlow/Listings/events_js.html#//apple_ref/doc/uid/DTS40010085-events_js-DontLinkElementID_5
				// Events: 'webkitbeginfullscreen' and 'webkitendfullscreen'
				webkitVideo: [
					'webkitSupportsFullscreen',
					'webkitDisplayingFullscreen',
					'webkitEnterFullscreen',
					'webkitExitFullscreen',
					'',
					''
				],
				ms: [
					'',
					'msFullscreenElement',
					'msRequestFullscreen',
					'msExitFullscreen',
					'MSFullscreenChange',
					'MSFullscreenError'
				]
			},
			specOrder = [
				'w3c',
				'moz',
				'webkit',
				'webkitVideo',
				'ms'
			],
			fs, i, il;

		this.fullscreen = fs = {
			support: {
				w3c: !!d[spec.w3c[0]],
				moz: !!d[spec.moz[0]],
				webkit: typeof d[spec.webkit[3]] === 'function',
				webkitVideo: typeof v[spec.webkitVideo[2]] === 'function',
				ms: typeof v[spec.ms[2]] === 'function'
			},
			used: {}
		};

		// Store the name of the spec being used and as a handy boolean.
		for(i = 0, il = specOrder.length; i < il; i++) {
			var n = specOrder[i];
			if(fs.support[n]) {
				fs.spec = n;
				fs.used[n] = true;
				break;
			}
		}

		if(fs.spec) {
			var s = spec[fs.spec];
			fs.api = {
				fullscreenEnabled: true,
				fullscreenElement: (elem) => {
					elem = elem ? elem : d; // Video element required for webkitVideo
					return elem[s[1]];
				},
				requestFullscreen: (elem) => {
					return elem[s[2]](); // Chrome and Opera want parameter (Element.ALLOW_KEYBOARD_INPUT) but Safari fails if flag used.
				},
				exitFullscreen: (elem) => {
					elem = elem ? elem : d; // Video element required for webkitVideo
					return elem[s[3]]();
				}
			};
			fs.event = {
				fullscreenchange: s[4],
				fullscreenerror: s[5]
			};
		} else {
			fs.api = {
				fullscreenEnabled: false,
				fullscreenElement: () => {
					return null;
				},
				requestFullscreen: () => {},
				exitFullscreen: () => {}
			};
			fs.event = {};
		}
	}
}
JPlayer.nativeFeatures.init();

var ConvertTime = function() {
	this.init();
};

ConvertTime.prototype = {
	init: function() {
		this.options = {
			timeFormat: JPlayer.timeFormat
		};
	},
	time: function(s) {
		s = (s && typeof s === 'number') ? s : 0;

		var myTime = new Date(s * 1000),
			hour = myTime.getUTCHours(),
			min = this.timeFormat.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60,
			sec = this.timeFormat.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60,
			strHour = (this.timeFormat.padHour && hour < 10) ? "0" + hour : hour,
			strMin = (this.timeFormat.padMin && min < 10) ? "0" + min : min,
			strSec = (this.timeFormat.padSec && sec < 10) ? "0" + sec : sec,
			strTime = "";

			strTime += this.timeFormat.showHour ? strHour + this.timeFormat.sepHour : "";
			strTime += this.timeFormat.showMin ? strMin + this.timeFormat.sepMin : "";
			strTime += this.timeFormat.showSec ? strSec + this.timeFormat.sepSec : "";

			return strTime;
	}
};

var myConvertTime = new ConvertTime();

JPlayer.convertTime = (s) => myConvertTime.time(s);

JPlayer.instances = {};
JPlayer.version = {
	script: "2.9.2"
}

// 'MPEG-4 support' : canPlayType('video/mp4; codecs="mp4v.20.8"')
JPlayer.format = {
	mp3: {
		codec: 'audio/mpeg',
		media: 'audio'
	},
	m4a: { // AAC / MP4
		codec: 'audio/mp4; codecs="mp4a.40.2"',
		media: 'audio'
	},
	m3u8a: { // AAC / MP4 / Apple HLS
		codec: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
		media: 'audio'
	},
	m3ua: { // M3U
		codec: 'audio/mpegurl',
		media: 'audio'
	},
	oga: { // OGG
		codec: 'audio/ogg; codecs="vorbis, opus"',
		media: 'audio'
	},
	flac: { // FLAC
		codec: 'audio/x-flac',
		media: 'audio'
	},
	wav: { // PCM
		codec: 'audio/wav; codecs="1"',
		media: 'audio'
	},
	webma: { // WEBM
		codec: 'audio/webm; codecs="vorbis"',
		media: 'audio'
	},
	fla: { // FLV / F4A
		codec: 'audio/x-flv',
		media: 'audio'
	},
	rtmpa: { // RTMP AUDIO
		codec: 'audio/rtmp; codecs="rtmp"',
		media: 'audio'
	},
	m4v: { // H.264 / MP4
		codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
		media: 'video'
	},
	m3u8v: { // H.264 / AAC / MP4 / Apple HLS
		codec: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
		media: 'video'
	},
	m3uv: { // M3U
		codec: 'audio/mpegurl',
		media: 'video'
	},
	ogv: { // OGG
		codec: 'video/ogg; codecs="theora, vorbis"',
		media: 'video'
	},
	webmv: { // WEBM
		codec: 'video/webm; codecs="vorbis, vp8"',
		media: 'video'
	},
	flv: { // FLV / F4V
		codec: 'video/x-flv',
		media: 'video'
	},
	rtmpv: { // RTMP VIDEO
		codec: 'video/rtmp; codecs="rtmp"',
		media: 'video'
	}
}

var getOffset = (el) => ({top: el.getBoundingClientRect().top + document.body.scrollTop, left: el.getBoundingClientRect().left + document.body.scrollLeft});
var getWidth = (el) => el.getBoundingClientRect().width;
var getHeight = (el) => el.getBoundingClientRect().height;
var isFunction = (obj) => Object.prototype.toString.call(obj) == '[object Function]';