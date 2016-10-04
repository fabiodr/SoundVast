import React from "react";
import {Motion, spring} from "react-motion";
import merge from "lodash/merge";

export default class JPlayer extends React.Component {
	static get propTypes() {

	}
	static get defaultProps(){
		return {
			onAbort: () => {},
			onCanPlay: () => {},
			onCanPlayThrough: () => {},
			onDurationChange: () => {},
			onEmptied: () => {},
			onEncrypted: () => {},
			onEnded: () => {},
			onError: () => {},
			onLoadedData: () => {},
			onLoadedMetadata: () => {},
			onLoadStart: () => {},
			onPause: () => {},
			onPlay: () => {},
			onPlaying: () => {},
			onProgress: () => {},
			onRateChange: () => {},
			onSeeked: () => {},
			onSeeking: () => {},
			onStalled: () => {},
			onSuspend: () => {},
			onTimeUpdate: () => {},
			onVolumeChange: () => {},
			onWaiting: () => {}
		}
	}
    constructor(props, context){
        super();

		this.state = {
			seekBarClass: "jp-seek-bar",
			renderMedia: true,
			posterOnClick: () => {
				this._trigger(this.event.click);
			},
			videoOnClick: () => {
				this._trigger(this.event.click);
			},
			posterOnLoad: () => {
				if(!this.status.video || this.status.waitForPlay) {
					//display: "" is resetting it to it's initial (block or inline most likely)
					//Must use immutable update function for setState otherwise display: "" would just overwrite other values
					this.setState((previousState) => previousState.posterStyle = Object.assign({}, previousState.posterStyle, {display: ""}));
				}
			},
			//These options need to be in the state as either they modify reacts virtual attributes
			options: {			
				cssSelector: {
					cssSelectorAncestor: props.cssSelector.cssSelectorAncestor || "#jp_container_1",
					jPlayerSelector: props.cssSelector.jPlayerSelector || "#jplayer_1",
				},			
				preload: props.preload || "metadata", // HTML5 Spec values: none, metadata, auto.
				autoPlay: props.autoPlay || false,
				muted: props.muted || false,
				loop: props.loop || false,
				html: props.html
			}
		};

		this._setupInternalProperties();
		this._setupOptions(props);
		this._setupEvents();
		this._setupErrors();

		this.nativeFeatures.init();
    }
	_uaBrowser = (userAgent) => {
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
	_uaPlatform = (userAgent) => {
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
	_getDocMode = () => {
		var docMode;

		if (this.browser.msie) {
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
	_browserSetup = () => {
		var browserMatch = this._uaBrowser(navigator.userAgent);

		if ( browserMatch.browser ) {
			this.browser[browserMatch.browser] = true;
			this.browser.version = browserMatch.version;
		}

		var platformMatch = this._uaPlatform(navigator.userAgent);

		if ( platformMatch.platform ) {
			this.platform[platformMatch.platform] = true;
			this.platform.mobile = !platformMatch.tablet;
			this.platform.tablet = !!platformMatch.tablet;
		}

		this.browser.documentMode = this._getDocMode();
	}
	_keyBindings = (event) => {
		var f = this.focusInstance,
			ignoreKey;

		//A jPlayer instance must be in focusInstance. ie., keyEnabled and the last one played.
		if(f) {
			var ignoredSplitElements = this.keyIgnoreElementNames.split(/\s+/g);

			// What generated the key press?
			for (var index = 0; index < ignoredSplitElements.length; index++) {
				var name = ignoredSplitElements[index];

				if(event.target.nodeName.toUpperCase() === name.toUpperCase()) {
					ignoreKey = true;
					break;
				}
			}

			if(!ignoreKey) {
				var keyBindings = f.options.keyBindings;

				for (var action in keyBindings) {
					var binding = keyBindings[action];

					if(
						(binding && JPlayer._isFunction(binding.fn)) &&
						((typeof binding.key === 'number' && event.which === binding.key) ||
						(typeof binding.key === 'string' && event.key === binding.key))
					) {
						event.preventDefault(); // Key being used by jPlayer, so prevent default operation.
						binding.fn(f);
						break;
					}
				}
			}
		}
	}
	_setupInternalProperties = () => {
		this.status = { // Instanced in _init()
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
		this.browser = {};
		this.platform = {};
		// Reserved event names generated by jPlayer that are not part of the HTML5 Media element spec
		this.reservedEvent = "ready resize repeat error warning";
		this.cachedEvent = {};
		this.event = JPlayer._getEvents();
		this.timeFormat = JPlayer.timeFormat;
		this.nativeFeatures = JPlayer.nativeFeatures;
		this.focusInstance = null;
		this.keyIgnoreElementNames = "A INPUT TEXTAREA SELECT BUTTON";
		this.keys = function(en) {
			var event = "keydown";

			// Remove any binding, just in case enabled more than once.
			document.documentElement.removeEventListener(event, this._keyBindings);

			if(en) {
				document.documentElement.addEventListener(event, this._keyBindings);
			}
		};
		this.internal = { // Instanced in _init()
			ready: false
			// instance: undefined
			// domNode: undefined
			// htmlDlyCmdId: undefined
			// autohideId: undefined
			// mouse: undefined
			// cmdsIgnored
		};
	}
	_setupOptions = (props) => {
		var options = Object.assign({}, props); //Deep copy

		//Omit the options that are assigned in state
		for (var key in this.state.options) {
			if (options.hasOwnProperty(key)){
				delete options[key];
			}
		}

		this.options = merge({
			solution: "html", // Valid solutions: html. Order defines priority. 1st is highest,
			supplied: "mp3", // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,		
			remainingDuration: false, // When true, the remaining time is shown in the duration GUI element.
			toggleDuration: false, // When true, clicks on the duration toggle between the duration and remaining display.
			captureDuration: true, // When true, clicks on the duration are captured and no longer propagate up the DOM.
			playbackRate: 1.0,
			defaultPlaybackRate: 1.0,
			minPlaybackRate: 0.5,
			maxPlaybackRate: 4,
			volume: 0.8, // The volume. Number 0 to 1.
			cssSelector: { // * denotes properties that should only be required when video media type required. _cssSelector() would require changes to enable splitting these into Audio and Video defaults.
				videoPlay: ".jp-video-play", // *
				play: ".jp-play",
				pause: ".jp-pause",
				stop: ".jp-stop",
				seekBar: ".jp-seek-bar",
				playBar: ".jp-play-bar",
				mute: ".jp-mute",
				unmute: ".jp-unmute",
				volumeBar: ".jp-volume-bar",
				volumeBarValue: ".jp-volume-bar-value",
				volumeMax: ".jp-volume-max",
				playbackRateBar: ".jp-playback-rate-bar",
				playbackRateBarValue: ".jp-playback-rate-bar-value",
				currentTime: ".jp-current-time",
				duration: ".jp-duration",
				title: ".jp-title",
				fullScreen: ".jp-full-screen", // *
				restoreScreen: ".jp-restore-screen", // *
				repeat: ".jp-repeat",
				repeatOff: ".jp-repeat-off",
				gui: ".jp-gui", // The interface used with autohide feature.
				noSolution: ".jp-no-solution" // For error feedback when jPlayer cannot find a solution.
			},
			stateClass: { // Classes added to the cssSelectorAncestor to indicate the state.
				playing: "jp-state-playing",
				seeking: "jp-state-seeking",
				muted: "jp-state-muted",
				looped: "jp-state-looped",
				fullScreen: "jp-state-full-screen",
				noVolume: "jp-state-no-volume"
			},
			useStateClassSkin: true, // A state class skin relies on the state classes to change the visual appearance. The single control toggles the effect, for example: play then pause, mute then unmute.
			autoBlur: true, // GUI control handlers will drop focus after clicks.
			smoothPlaybar: false, // Smooths the play bar transitions, which affects clicks and short media with big changes per second.
			fullScreen: false, // Native Full Screen
			fullWindow: false,
			autohide: {
				restored: false, // Controls the interface autohide feature.
				full: true, // Controls the interface autohide feature.
				fadeIn: 200, // Milliseconds. The period of the fadeIn anim.
				fadeOut: 600, // Milliseconds. The period of the fadeOut anim.
				hold: 1000 // Milliseconds. The period of the pause before autohide beings.
			},			
			nativeVideoControls: {
				// Works well on standard browsers.
				// Phone and tablet browsers can have problems with the controls disappearing.
			},
			noFullWindow: {
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
			},
			noVolume: {
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
			},
			timeFormat: JPlayer.timeFormat,
			keyEnabled: false, // Enables keyboard controls.
			audioFullScreen: false, // Enables keyboard controls to enter full screen with audio media.
			keyBindings: { // The key control object, defining the key codes and the functions to execute.
				// The parameter, f = this.focusInstance, will be checked truethy before attempting to call any of these functions.
				// Properties may be added to this object, in key/fn pairs, to enable other key controls. EG, for the playlist add-on.
				play: {
					key: 80, // p
					fn: function(f) {
						if(f.status.paused) {
							f.play();
						} else {
							f.pause();
						}
					}
				},
				fullScreen: {
					key: 70, // f
					fn: function(f) {
						if(f.status.video || f.options.audioFullScreen) {
							f._setOption("fullScreen", !f.options.fullScreen);
						}
					}
				},
				muted: {
					key: 77, // m
					fn: function(f) {
						f._muted(!f.state.options.muted);
					}
				},
				volumeUp: {
					key: 190, // .
					fn: function(f) {
						f.volume(f.options.volume + 0.1);
					}
				},
				volumeDown: {
					key: 188, // ,
					fn: function(f) {
						f.volume(f.options.volume - 0.1);
					}
				},
				loop: {
					key: 76, // l
					fn: function(f) {
						f._loop(!f.state.options.loop);
					}
				}
			},
			verticalVolume: false, // Calculate volume from the bottom of the volume bar. Default is from the left. Also volume affects either width or height.
			verticalPlaybackRate: false,
			globalVolume: false, // Set to make volume and muted changes affect all jPlayer instances with this option enabled
			idPrefix: "jp", // Prefix for the ids of html elements created by jPlayer
			consoleAlerts: true, // Alerts are sent to the console.log() instead of alert().
			errorAlerts: false,
			warningAlerts: false
		}, options);

		this.optionsAudio = {
			size: {
				width: "0px",
				height: "0px",
				cssClass: ""
			},
			sizeFull: {
				width: "0px",
				height: "0px",
				cssClass: ""
			}
		};
		this.optionsVideo = {
			size: {
				width: "480px",
				height: "270px",
				cssClass: "jp-video-270p"
			},
			sizeFull: {
				width: "100%",
				height: "100%",
				cssClass: "jp-video-full"
			}
		};
	}
	_setupEvents = () => {
		// Create the event listeners
		// Only want the active entity to affect jPlayer and bubble events.
		// Using this.html.audio.gate so that object is referenced and gate property always current
		this.mediaEvent = {
			onProgress: () => {
				if(this.html.audio.gate || this.html.video.gate) {
					if(this.internal.cmdsIgnored && this.readyState > 0) { // Detect iOS executed the command
						this.internal.cmdsIgnored = false;
					}
					this._getHtmlStatus(this.currentMedia);
					this._updateInterface();
					this._trigger(this.event.progress);
				}
				this.props.onProgress();
			},
			onLoadedData: () => {
				if(this.html.audio.gate || this.html.video.gate) {
					this.androidFix.setMedia = false; // Disable the fix after the first progress event.
					if(this.androidFix.play) { // Play Android audio - performing the fix.
						this.androidFix.play = false;
						this.play(this.androidFix.time);
					}
					if(this.androidFix.pause) { // Pause Android audio at time - performing the fix.
						this.androidFix.pause = false;
						this.pause(this.androidFix.time);
					}
					this._trigger(this.event.loadeddata);
				}
				this.props.onLoadedData();
			},
			onTimeUpdate: () => {
				if(this.html.audio.gate || this.html.video.gate) {
					this._getHtmlStatus(this.currentMedia);
					this._updateInterface();
					this._trigger(this.event.timeupdate);
				}
				this.props.onTimeUpdate();
			},
			onDurationChange: () => {
				if(this.html.audio.gate || this.html.video.gate) {
					this._getHtmlStatus(this.currentMedia);
					this._updateInterface();
					this._trigger(this.event.durationchange);
				}
				this.props.onDurationChange();
			},
			onPlay: () => {
				if(this.html.audio.gate || this.html.video.gate) {
					this._updateButtons(true);
					this._html_checkWaitForPlay(); // So the native controls update this variable and puts the hidden interface in the correct state. Affects toggling native controls.
					this._trigger(this.event.play);
				}
				this.props.onPlay();
			},
			onPlaying: () => {
				if(this.html.audio.gate || this.html.video.gate) {
					this._updateButtons(true);
					this._seeked();
					this._trigger(this.event.playing);
				}
				this.props.onPlaying();
			},
			onPause: () => {
				if(this.html.audio.gate || this.html.video.gate) {
					this._updateButtons(false);
					this._trigger(this.event.pause);
				}
				this.props.onPause();
			},
			onWaiting: () => {
				if(this.html.audio.gate || this.html.video.gate) {
					this._seeking();
					this._trigger(this.event.waiting);
				}
				this.props.onWaiting();
			},
			onSeeking: () => {
				if(this.html.audio.gate || this.html.video.gate) {
					this._seeking();
					this._trigger(this.event.seeking);
				}
				this.props.onSeeking();
			},
			onSeeked: () => {
				if(this.html.audio.gate || this.html.video.gate) {
					this._seeked();
					this._trigger(this.event.seeked);
				}
				this.props.onSeeked();
			},
			onVolumeChange: () => {
				if(this.html.audio.gate || this.html.video.gate) {
					// Read the values back from the element as the Blackberry PlayBook shares the volume with the physical buttons master volume control.
					// However, when tested 6th July 2011, those buttons do not generate an event. The physical play/pause button does though.
					this.options.volume = this.currentMedia.volume;

					this._updateVolume();
					this._trigger(this.event.volumechange);
				}
				this.props.onVolumeChange();
			},
			onRateChange: () => {
				if(this.html.audio.gate || this.html.video.gate) {		
					this.options.defaultPlaybackRate = this.currentMedia.defaultPlaybackRate;
					this.options.playbackRate = this.currentMedia.playbackRate;

					this._updatePlaybackRate();
					this._trigger(this.event.ratechange);
				}
				this.props.onRateChange();
			},
			onSuspend: () => { // Seems to be the only way of capturing that the iOS4 browser did not actually play the media from the page code. ie., It needs a user gesture.
				if(this.html.audio.gate || this.html.video.gate) {
					this._seeked();
					this._trigger(this.event.suspend);
				}
				this.props.onSuspend();
			},
			onEnded: () => {
				var media = this.currentMedia;

				if(this.html.audio.gate || this.html.video.gate) {
					// Order of the next few commands are important. Change the time and then pause.
					// Solves a bug in Firefox, where issuing pause 1st causes the media to play from the start. ie., The pause is ignored.
					if(!this.browser.webkit) { // Chrome crashes if you do this in conjunction with a setMedia command in an ended event handler. ie., The playlist demo.
						media.currentTime = 0; // Safari does not care about this command. ie., It works with or without this line. (Both Safari and Chrome are Webkit.)
					}
					media.pause(); // Pause otherwise a click on the progress bar will play from that point, when it shouldn't, since it stopped playback.
					this._updateButtons(false);
					this._getHtmlStatus(media, true); // With override true. Otherwise Chrome leaves progress at full.
					this._updateInterface();
					this._trigger(this.event.ended);
				}
				this.props.onEnded();
			},
			onError: () => {
				if(this.html.audio.gate || this.html.video.gate) {
					this._updateButtons(false);
					this._seeked();
					if(this.status.srcSet) { // Deals with case of clearMedia() causing an error event.
						clearTimeout(this.internal.htmlDlyCmdId); // Clears any delayed commands used in the HTML solution.
						this.status.waitForLoad = true; // Allows the load operation to try again.
						this.status.waitForPlay = true; // Reset since a play was captured.
						if(this.status.video && !this.status.nativeVideoControls) {
							this.setState(previousState => previousState.videoStyle = Object.assign({}, previousState.videoStyle, {display: "none"}));
						}
						if(this._validString(this.status.media.poster) && !this.status.nativeVideoControls) {
							this.setState(previousState => previousState.posterStyle = Object.assign({}, previousState.posterStyle, {display: ""}));
						}
						this.setState(previousState => previousState.videoPlayStyle = Object.assign({}, previousState.videoPlayStyle, {display: ""}));

						this._error( {
							type: this.error.URL,
							context: this.status.src, // this.src shows absolute urls. Want context to show the url given.
							message: this.errorMsg.URL,
							hint: this.errorHint.URL
						});
					}
				}
				this.props.onError();
			},
			// Create all the other event listeners that bubble up to a jPlayer event from html, without being used by jPlayer.
			onLoadStart: () => {this._bubbleEventListener("loadstart"); this.props.onLoadStart();},
			onAbort: () =>  {this._bubbleEventListener("abort"); this.props.onAbort();},
			onEmptied: () => {this._bubbleEventListener("emptied"); this.props.onEmptied();},
			onStalled: () => {this._bubbleEventListener("stalled"); this.props.onStalled();},
			onLoadedMetadata: () => {this._bubbleEventListener("loadedmetadata"); this.props.onLoadedMetadata();},
			onCanPlay: () => {this._bubbleEventListener("canplay"); this.props.onCanPlay();},
			onCanPlayThrough: () => {this._bubbleEventListener("canplaythrough"); this.props.onCanPlayThrough();}
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
			NO_SOLUTION: "Review the jPlayer options: support and supplied.",
			NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
			URL: "Check media URL is valid.",
			URL_NOT_SET: "Use setMedia() to set the media URL.",
			VERSION: "Update jPlayer files."
		};
		this.warning = {
			CSS_SELECTOR_COUNT: "e_css_selector_count",
			CSS_SELECTOR_METHOD: "e_css_selector_method",
			CSS_SELECTOR_STRING: "e_css_selector_string",
			OPTION_KEY: "e_option_key"
		};
		this.warningMsg = {
			CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
			CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
			CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
			OPTION_KEY: "The option requested in jPlayer('option') is undefined."
		};
		this.warningHint = {
			CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
			CSS_SELECTOR_METHOD: "Check your method name.",
			CSS_SELECTOR_STRING: "Check your css selector is a string.",
			OPTION_KEY: "Check your option name."
		};
	}
	_initBeforeRender = () => {
		this.keys(true);
	
		// On iOS, assume commands will be ignored before user initiates them.
		this.internal.cmdsIgnored = this.platform.ipad || this.platform.iphone || this.platform.ipod;

		// Add key bindings focusInstance to 1st jPlayer instanced with key control enabled.
		if(this.options.keyEnabled && !this.focusInstance) {
			this.focusInstance = this;
		}

		// A fix for Android where older (2.3) and even some 4.x devices fail to work when changing the *audio* SRC and then playing immediately.
		this.androidFix = {
			setMedia: false, // True when media set
			play: false, // True when a progress event will instruct the media to play
			pause: false, // True when a progress event will instruct the media to pause at a time.
			time: NaN // The play(time) parameter
		};

		if(this.platform.android) {
			// Default to metadata, but allow auto.
			this.setState(previousState => previousState.options.preload = this.state.options.preload !== 'auto' ? 'metadata' : 'auto');
		}

		this.formats = []; // Array based on supplied string option. Order defines priority.
		this.solutions = []; // Array based on solution string option. Order defines priority.
		this.require = {}; // Which media types are required: video, audio.

		// In _init()'s this.desired code and setmedia(): Accessed via this[solution], where solution from this.solutions array.
		this.html = {
			audio: {},
			video: {}
		}; 

		this.css = {};
		this.css.cs = {}; // Holds the css selector strings

		// Limit volume value's bounds.
		this.options.volume = this._limitValue(this.options.volume, 0, 1);

		var suppliedSplit = this.options.supplied.toLowerCase().split(",");

		// Create the formats array, with prority based on the order of the supplied formats string
		for (var index1 = 0; index1 < suppliedSplit.length; index1++) {
			var format = suppliedSplit[index1].replace(/^\s+|\s+$/g, ""); //trim

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

		this.internal.posterId = this.options.idPrefix + "_poster_" + JPlayer.count;
		this.internal.audioId = this.options.idPrefix + "_audio_" + JPlayer.count;
		this.internal.videoId = this.options.idPrefix + "_video_" + JPlayer.count;

		this.internal.instance = "jp_" + JPlayer.count;

		var solutionsSplit = this.options.solution.toLowerCase().split(",");

		for (var index1 = 0; index1 < solutionsSplit.length; index1++) {
			var solution = solutionsSplit[index1].replace(/^\s+|\s+$/g, ""); //trim

			if(JPlayer.solution[solution]) { // Check solution is valid.
				var dupFound = false;

				for (var index2 = 0; index2 < this.solutions.length; index2++) {
					var value2 = this.solutions[index2];

					if(solution === value2) {
						dupFound = true;
						break;
					}
				}

				if(!dupFound) {
					this.solutions.push(solution);
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
			this.options = merge({}, this.optionsVideo, this.options);
			this.setState({stateClass: "jp-video"});
		} else {
			this.options = merge({}, this.optionsAudio, this.options);
			this.setState({stateClass: "jp-audio"});
		}
		
		this._setSize(); // update status and jPlayer element size

		this.setState({posterStyle: {
			width: this.status.width,
			height: this.status.height,
			display: "none"
		}});

		// Determine the status for Blocklisted options.
		this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
		this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow);
		this.status.noVolume = this._uaBlocklist(this.options.noVolume);

		// Create event handlers if native fullscreen is supported
		if(this.nativeFeatures.fullscreen.api.fullscreenEnabled) {
			this._fullscreenAddEventListeners();
		}

		// The native controls are only for video and are disabled when audio is also used.
		this._restrictNativeVideoControls();

		this.html.canPlay = {};

		//Must be before the render because we use it for the media id's which are used as the keys
		JPlayer.count++;
	}
	_initAfterRender = () => {
		this.internal.id = this.jPlayerElement.id;
		JPlayer.instances[this.internal.instance] = this;

		// Register listeners passed in through props
		for (var eventName in this.event) {
			var eventType = this.event[eventName];

			if(this.options[eventName] !== undefined) {
				this._addEventlisteners(eventType, this.options[eventName]);
				// Destroy the handler pointer copy on the options. Reason, events can be added/removed in other ways so this could be obsolete and misleading.
				this.options[eventName] = undefined;
			}
		}

		for (var priority = 0; priority < this.formats.length; priority++) {
			var format = this.formats[priority];

			this.html.canPlay[format] = this.html[JPlayer.format[format].media].available && "" !== this._testCanPlayType(JPlayer.format[format].codec);
		}

		this.html.desired = false;

		for (var solutionPriority = 0; solutionPriority < this.solutions.length; solutionPriority++) {
			var solution = this.solutions[solutionPriority];

			if(solutionPriority === 0) {
				this[solution].desired = true;
			} else {
				var audioCanPlay = false;
				var videoCanPlay = false;

				for (var formatPriority in this.formats) {
					var format = this.formats[formatPriority];

					if(this[this.solutions[0]].canPlay[format]) { // The other solution can play
						if(JPlayer.format[format].media === 'video') {
							videoCanPlay = true;
						} else {
							audioCanPlay = true;
						}
					}
				}
				this[solution].desired = (this.require.audio && !audioCanPlay) || (this.require.video && !videoCanPlay);
			}
		}

		// This is what jPlayer will support, based on solution and supplied.
		this.html.support = {};

		for (var priotity = 0; priotity < this.formats.length; priotity++) {
			var format = this.formats[priotity];

			this.html.support[format] = this.html.canPlay[format] && this.html.desired;
		}

		// If jPlayer is supporting any format in a solution, then the solution is used.
		this.html.used = false;

		for (var solutionPriority = 0; solutionPriority < this.solutions.length; solutionPriority++) {
			var solution = this.solutions[solutionPriority];

			for (var formatPriority in this.formats) {
				var format = this.formats[formatPriority];

				if(this[solution].support[format]) {
					this[solution].used = true;
					break;
				}
			}
		}

		// Init solution active state and the event gates to false.
		this._resetActive();
		this._resetGate();

		// Set up the css selectors for the control and feedback entities.
		this._cssSelectorAncestor(this.state.options.cssSelector.cssSelectorAncestor);

		// If html is not being used by this browser, then media playback is not possible. Trigger an error event.
		if(!(this.html.used)) {
			this._error( {
				type: this.error.NO_SOLUTION,
				context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
				message: this.errorMsg.NO_SOLUTION,
				hint: this.errorHint.NO_SOLUTION
			});
			this.setState(previousState => previousState.noSolutionStyle = Object.assign({}, previousState.noSolutionStyle, {display: ""}));
		} else {
			this.setState(previousState => previousState.noSolutionStyle = Object.assign({}, previousState.noSolutionStyle, {display: "none"}));
		}

		if(this.html.used) { // If only HTML
			// Using the audio element capabilities for playbackRate. ie., Assuming video element is the same.
			this.status.playbackRateEnabled = this._testPlaybackRate();
		} else {
			this.status.playbackRateEnabled = false;
		}

		this._updatePlaybackRate();

		// Add the HTML solution if being used.
		if(this.html.used) {
			this.currentMedia.volume = this.options.volume;

			if(this.status.playbackRateEnabled) {
				this.currentMedia.defaultPlaybackRate = this.options.defaultPlaybackRate;
				this.currentMedia.playbackRate = this.options.playbackRate;
			}
		
			if(this.status.nativeVideoControls) {
				this.setState(previousState => previousState.videoStyle = Object.assign({}, previousState.videoStyle, 
					{display: "", width: this.status.width, height: this.status.height}));
			} else {
				this.setState(previousState => previousState.videoStyle = Object.assign({}, previousState.videoStyle, {display: "none"}));
			}
		}

		if((this.html.used)) {
			this.internal.ready = true;
			this._trigger(this.event.ready);
		}

		// Initialize the interface components with the options.
		this._updateNativeVideoControls();

		// The other controls are now setup in _cssSelectorAncestor()
		this.setState(previousState => previousState.videoPlayStyle = Object.assign({}, previousState.videoPlayStyle, {display: "none"}));
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
			if('playbackRate' in this.audioElement) {
				this.audioElement.playbackRate = rate;
				return this.audioElement.playbackRate === rate;
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
				return false; // exit
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
			// Show/hide the jPlayer GUI.
			this._updateAutohide();
			// For when option changed. The poster image is not updated, as it is dealt with in setMedia(). Acceptable degradation since seriously doubt these options will change on the fly. Can again review later.
			if(this.status.nativeVideoControls && this.require.video) {
				this.setState(previousState => previousState.posterStyle = Object.assign({}, previousState.posterStyle, {display: "none"}));
				this.setState(previousState => previousState.videoStyle = Object.assign({}, previousState.videoStyle, 
						{display: "", width: this.status.width, height: this.status.height}));
			} else if(this.status.waitForPlay && this.status.video) {
				this.setState(previousState => previousState.posterStyle = Object.assign({}, previousState.posterStyle, {display: ""}));
				this.setState(previousState => previousState.videoStyle = Object.assign({}, previousState.videoStyle, {display: "none"}));
			}
		}
	}
	_removeEventListeners = () => {
		//Remove all the subscribed non-react event listeners
		for (var eventName in this.cachedEvent) {
			var listener = this.cachedEvent[eventName];

			this.jPlayerElement.removeEventListener(eventName, listener);
		}

		//Remove the fullscreen event listeners
		var fs = this.nativeFeatures.fullscreen;

		if(this.internal.fullscreenchangeHandler) {
			document.removeEventListener(fs.event.fullscreenchange, this.internal.fullscreenchangeHandler, false);
		}

		//Clear the object
		this.cachedEvent = {};
	}
	_addEventlisteners = (event, listener) => {
		this.cachedEvent[event] = {
			event: event,
			listener: listener
		};

		this.jPlayerElement.addEventListener(event, listener.bind(this));
	}
	_bubbleEventListener = (eventType) => {
		if(this.html.audio.gate || this.html.video.gate) {
			this._trigger(this.event[eventType]);
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
	_trigger = (eventType, error, warning) => {	 // eventType always valid as called using this.event.eventType
		var event = new CustomEvent(eventType);

		event.jPlayer = {
			version: Object.assign({}, JPlayer.version),
			options: merge({}, this.options), // Deep copy
			status: merge({}, this.status), // Deep copy
			html: merge({}, this.html), // Deep copy
			error: (error) ? Object.assign({}, error) : null,
			warning: (warning) ? Object.assign({}, warning) : null
		};

		this.jPlayerElement.dispatchEvent(event);
	}
	_updateButtons = (playing) => {
		if(playing === undefined) {
			playing = !this.status.paused;
		} else {
			this.status.paused = !playing;
		}
	
		// Apply the state classes. (For the useStateClassSkin:true option)
		if(playing) {
			this.addStateClass('playing');
		} else {
			this.removeStateClass('playing');
		}
		if(!this.status.noFullWindow && this.options.fullWindow) {
			this.addStateClass('fullScreen');
		} else {
			this.removeStateClass('fullScreen');
		}
		if(this.state.options.loop) {
			this.addStateClass('looped');
		} else {
			this.removeStateClass('looped');
		}
	
		if (!this.options.useStateClassSkin){
			//Toggle the GUI element pairs. (For the useStateClassSkin:false option)
			if(playing) {
				this.setState(previousState => previousState.playStyle = Object.assign({}, previousState.playStyle, {display: "none"}));
				this.setState(previousState => previousState.pauseStyle = Object.assign({}, previousState.pauseStyle, {display: ""}));
			} else {
				this.setState(previousState => previousState.playStyle = Object.assign({}, previousState.playStyle, {display: ""}));
				this.setState(previousState => previousState.pauseStyle = Object.assign({}, previousState.pauseStyle, {display: "none"}));
			}

			if(this.status.noFullWindow) {
				this.setState(previousState => previousState.fullScreenStyle = Object.assign({}, previousState.fullScreenStyle, {display: "none"}));
				this.setState(previousState => previousState.restoreScreenStyle = Object.assign({}, previousState.restoreScreenStyle, {display: "none"}));
			} else if(this.options.fullWindow) {
				this.setState(previousState => previousState.fullScreenStyle = Object.assign({}, previousState.fullScreenStyle, {display: "none"}));
				this.setState(previousState => previousState.restoreScreenStyle = Object.assign({}, previousState.restoreScreenStyle, {display: ""}));		
			} else {
				this.setState(previousState => previousState.fullScreenStyle = Object.assign({}, previousState.fullScreenStyle, {display: ""}));
				this.setState(previousState => previousState.restoreScreenStyle = Object.assign({}, previousState.restoreScreenStyle, {display: "none"}));
			}
	
			if(this.state.options.loop) {
				this.setState(previousState => previousState.repeatStyle = Object.assign({}, previousState.repeatStyle, {display: "none"}));
				this.setState(previousState => previousState.repeatOffStyle = Object.assign({}, previousState.repeatOffStyle, {display: ""}));
			} else {
				this.setState(previousState => previousState.repeatStyle = Object.assign({}, previousState.repeatStyle, {display: ""}));
				this.setState(previousState => previousState.repeatOffStyle = Object.assign({}, previousState.repeatOffStyle, {display: "none"}));
			}
		}
	}
	_updateInterface = () => {
		this.setState(previousState => previousState.seekBarStyle = Object.assign({}, previousState.seekBarStyle, {width: this.status.seekPercent+"%"}));		

		if (!this.options.smoothPlaybar){
			this.setState(previousState => previousState.playBarStyle = Object.assign({}, previousState.playBarStyle, {width: this.status.currentPercentRelative+"%"}));		
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
			if(this.options.remainingDuration) {
				durationText = (remaining > 0 ? '-' : '') + this._convertTime(remaining);
			} else {
				durationText = this._convertTime(duration);
			}
		}

		this.setState({durationText: durationText});
	}
	_convertTime = (s) => {
		s = (s && typeof s === 'number') ? s : 0;

		var myTime = new Date(s * 1000),
			hour = myTime.getUTCHours(),
			min = this.options.timeFormat.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60,
			sec = this.options.timeFormat.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60,
			strHour = (this.options.timeFormat.padHour && hour < 10) ? "0" + hour : hour,
			strMin = (this.options.timeFormat.padMin && min < 10) ? "0" + min : min,
			strSec = (this.options.timeFormat.padSec && sec < 10) ? "0" + sec : sec,
			strTime = "";

		strTime += this.options.timeFormat.showHour ? strHour + this.options.timeFormat.sepHour : "";
		strTime += this.options.timeFormat.showMin ? strMin + this.options.timeFormat.sepMin : "";
		strTime += this.options.timeFormat.showSec ? strSec + this.options.timeFormat.sepSec : "";

		return strTime;

	}
	_seeking = () => {
		this.setState(previousState => {
			if (!previousState.seekBarClass.includes("jp-seeking-bg")){
				return { seekBarClass: previousState.seekBarClass + " jp-seeking-bg"}
			}
		});
		this.addStateClass('seeking');
	}
	_seeked = () => {
		this.setState(previousState => ({seekBarClass: previousState.seekBarClass.replace("jp-seeking-bg", "").trim()}));
		this.removeStateClass('seeking');
	}
	_resetGate = () => {
		this.html.audio.gate = false;
		this.html.video.gate = false;
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
	addStateClass = (state) => {
		this.setState(previousState => {
			if (!previousState.stateClass.includes(this.options.stateClass[state])){
				return { stateClass: previousState.stateClass + " " + this.options.stateClass[state] }
			}
		});
	}
	removeStateClass = (state) => {
		this.setState(previousState => ({stateClass: previousState.stateClass.replace(this.options.stateClass[state], "").trim()}));
	}
	setMedia = (media) => {
		/*	media[format] = String: URL of format. Must contain all of the supplied option's video or audio formats.
			*	media.poster = String: Video poster URL.
			*	media.track = Array: Of objects defining the track element: kind, src, srclang, label, def.
			*	media.stream = Boolean: * NOT IMPLEMENTED * Designating actual media streams. ie., "false/undefined" for files.
			*/
		var	supported = false,
			posterChanged = this.status.media.poster !== media.poster; // Compare before reset. Important for OSX Safari as this.htmlElement.poster.src is absolute, even if original poster URL was relative.

		this._resetMedia();
		this._resetGate();
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

			for (var solutionPriority = 0; solutionPriority < this.solutions.length; solutionPriority++) {
				var solution = this.solutions[solutionPriority];

				if(this[solution].support[format] && this._validString(media[format])) { // Format supported in solution and url given for format.
					var isHtml = solution === 'html';

					if(isVideo) {
						if(isHtml) {
							this.html.video.gate = true;
							this._html_setVideo(media);
							this.html.active = true;
						}

						this.setState(previousState => previousState.videoPlayStyle = Object.assign({}, previousState.videoPlayStyle, {display: ""}));	
						this.status.video = true;
					} else {
						if(isHtml) {
							this.html.audio.gate = true;
							this._html_setAudio(media);
							this.html.active = true;

							// Setup the Android Fix - Only for HTML audio.
							if(this.platform.android) {
								this.androidFix.setMedia = true;
							}
						}

						this.setState(previousState => previousState.videoPlayStyle = Object.assign({}, previousState.videoPlayStyle, {display: "none"}));	
						this.status.video = false;
					}
					supported = true;
					break;
				}
			}

			if(supported) {
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
						this.setState(previousState => previousState.posterStyle = Object.assign({}, previousState.posterStyle, {display: ""}));	
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

			this._trigger(this.event.setmedia);
		} else { // jPlayer cannot support any formats provided in this browser
			// Send an error event
			this._error( {
				type: this.error.NO_SUPPORT,
				context: "{supplied:'" + this.options.supplied + "'}",
				message: this.errorMsg.NO_SUPPORT,
				hint: this.errorHint.NO_SUPPORT
			});
		}
	}
	_resetMedia = () => {
		this._updateButtons(false);
		this._updateInterface();
		this._seeked();

		this.setState(previousState => previousState.posterStyle = Object.assign({}, previousState.posterStyle, {display: "none"}));	

		clearTimeout(this.internal.htmlDlyCmdId);

		if(this.html.active) {
			this._html_resetMedia();
		}
	}
	clearMedia = () => {
		this._resetMedia();

		if(this.html.active) {
			this._html_clearMedia();
		}

		this._resetGate();
		this._resetActive();
	}
	load = () => {
		if(this.status.srcSet) {
			if(this.html.active) {
				this._html_load();
			}
		} else {
			this._urlNotSetError("load");
		}
	}
	focus = () => {
		if(this.options.keyEnabled) {
			this.focusInstance = this;
		}
	}
	play = (time) => {
		var guiAction = typeof time === "object"; // Flags GUI click events so we know this was not a direct command, but an action taken by the user on the GUI.
		if(guiAction && this.options.useStateClassSkin && !this.status.paused) {
			this.pause(time); // The time would be the click event, but passing it over so info is not lost.
		} else {
			time = (typeof time === "number") ? time : NaN; // Remove the event from click handler
			if(this.status.srcSet) {
				this.focus();
				if(this.html.active) {
					this._html_play(time);
				}
			} else {
				this._urlNotSetError("play");
			}
		}
	}
	videoPlay = (e) => {	 // Handles clicks on the play button over the video poster
		this.play();
	}
	pause = (time) => {
		time = (typeof time === "number") ? time : NaN; // Remove the event from click handler
		if(this.status.srcSet) {
			if(this.html.active) {
				this._html_pause(time);
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
				this._html_pause(0);
			}
		} else {
			this._urlNotSetError("stop");
		}
	}
	playHead = (p) => {
		p = this._limitValue(p, 0, 100);
		if(this.status.srcSet) {
			if(this.html.active) {
				this._html_playHead(p);
			}
		} else {
			this._urlNotSetError("playHead");
		}
	}
	_muted = (muted) => {
		this.mutedWorker(muted);
		if(this.options.globalVolume) {
			this.tellOthers("mutedWorker", function() {
				// Check the other instance has global volume enabled.
				return this.options.globalVolume;
			}, muted);
		}
	}
	mutedWorker = (muted) => {
		if(this.html.used) {
			this.setState(previousState => previousState.options = Object.assign({}, previousState.options, {muted: muted}));
		}
	}
	mute = (mute) => {	 // mute is either: undefined (true), an event object (true) or a boolean (muted).									
		var guiAction = typeof mute === "object"; // Flags GUI click events so we know this was not a direct command, but an action taken by the user on the GUI.
		if(guiAction && this.options.useStateClassSkin && this.state.options.muted) {
			this._muted(false);
		} else {
			mute = mute === undefined ? true : !!mute;
			this._muted(mute);
		}
	}
	unmute = (unmute) => {	 // unmute is either: undefined (true), an event object (true) or a boolean (!muted).
		unmute = unmute === undefined ? true : !!unmute;
		this._muted(!unmute);
	}
	_updateMute = (mute) => {
		if(mute === undefined) {
			mute = this.state.options.muted;
		}
		if(mute) {
			this.addStateClass('muted');
		} else {
			this.removeStateClass('muted');
		}

		if (!this.options.useStateClassSkin){
			//Toggle GUI pairs
			if(this.status.noVolume) {
				this.setState(previousState => previousState.muteStyle = Object.assign({}, previousState.muteStyle, {display: "none"}));	
				this.setState(previousState => previousState.unmuteStyle = Object.assign({}, previousState.unmuteStyle, {display: "none"}));
			} else if(mute) {
				this.setState(previousState => previousState.muteStyle = Object.assign({}, previousState.muteStyle, {display: "none"}));	
				this.setState(previousState => previousState.unmuteStyle = Object.assign({}, previousState.unmuteStyle, {display: ""}));
			} else {
				this.setState(previousState => previousState.muteStyle = Object.assign({}, previousState.muteStyle, {display: ""}));	
				this.setState(previousState => previousState.unmuteStyle = Object.assign({}, previousState.unmuteStyle, {display: "none"}));
			}
		}
	}
	volume = (v) => {
		this.volumeWorker(v);
		if(this.options.globalVolume) {
			this.tellOthers("volumeWorker", function() {
				// Check the other instance has global volume enabled.
				return this.options.globalVolume;
			}, v);
		}
	}
	volumeWorker = (v) => {
		v = this._limitValue(v, 0, 1);
		this.options.volume = v;

		if(this.html.used) {
			this.currentMedia.volume = v;
		}
	}
	volumeBar = (e) => {	 // Handles clicks on the volumeBar
		// Using $(e.currentTarget) to enable multiple volume bars
		var bar = e.currentTarget,
			offset = JPlayer._getOffset(bar),
			x = e.pageX - offset.left,
			w = JPlayer._getWidth(bar),
			y = JPlayer._getHeight(bar) - e.pageY + offset.top,
			h = JPlayer._getHeight(bar);

		if(this.options.verticalVolume) {
			this.volume(y/h);
		} else {
			this.volume(x/w);
		}

		if(this.state.options.muted) {
			this._muted(false);
		}
	}
	_updateVolume = (v) => {
		if(v === undefined) {
			v = this.options.volume;
		}
		v = this.state.options.muted ? 0 : v;

		if(this.status.noVolume) {
			this.addStateClass('noVolume');

			this.setState(previousState => previousState.volumeBarStyle = Object.assign({}, previousState.volumeBarStyle, {display: "none"}));	
			this.setState(previousState => previousState.volumeBarValueStyle = Object.assign({}, previousState.volumeBarValueStyle, {display: "none"}));
			this.setState(previousState => previousState.volumeMaxStyle = Object.assign({}, previousState.volumeMaxStyle, {display: "none"}));
		} else {
			this.removeStateClass('noVolume');
			this.setState(previousState => previousState.volumeMaxStyle = Object.assign({}, previousState.volumeMaxStyle, {display: ""}));	

			var volumeBarDimensionValue = (v*100)+"%";
			this.setState(previousState => previousState.volumeBarValueStyle = Object.assign({}, previousState.volumeBarValueStyle, 
				{display: "", width: !this.options.verticalVolume ? volumeBarDimensionValue : null, height: this.options.verticalVolume ? volumeBarDimensionValue : null}));	

			this.setState(previousState => previousState.volumeMaxStyle = Object.assign({}, previousState.volumeMaxStyle, {display: ""}));
		}
	}
	volumeMax = () => {	 // Handles clicks on the volume max
		this.volume(1);
		if(this.state.options.muted) {
			this._muted(false);
		}
	}
	_cssSelectorAncestor = (ancestor) => {
		this.setState(previousState => previousState.options.cssSelector = Object.assign({}, previousState.options.cssSelector, {cssSelectorAncestor: ancestor}));
		this._removeUiClass();

		var ancestorElements = document.querySelector(ancestor);

		if(ancestor && Array.isArray(ancestorElements)) { // So empty strings do not generate the warning.
			this._warning( {
				type: this.warning.CSS_SELECTOR_COUNT,
				context: ancestor,
				message: this.warningMsg.CSS_SELECTOR_COUNT + ancestorElements.length + " found for cssSelectorAncestor.",
				hint: this.warningHint.CSS_SELECTOR_COUNT
			});
		}

		this._addUiClass();
							
		for (var fn in this.options.cssSelector) {
			var cssSel = this.options.cssSelector[fn];

			this._cssSelector(fn, cssSel);
		}

		// Set the GUI to the current state.
		this._updateInterface();
		this._updateButtons();
		this._updateAutohide();
		this._updateVolume();
		this._updateMute();
	}
	_cssSelector = (fn, cssSel) => {
		if(typeof cssSel === 'string') {
			if(this.options.cssSelector[fn]) {
				this.options.cssSelector[fn] = cssSel;
				this.css.cs[fn] = this.state.options.cssSelector.cssSelectorAncestor + " " + cssSel;
				var elements = document.querySelectorAll(this.css.cs[fn]);

				if(elements.length && this[fn]) {
					this.setState({[fn + "OnClick"]: (e) =>
							{
								e.preventDefault();
								this[fn](e);

								if(this.options.autoBlur) {
									e.currentTarget.blur();
								} else {
									e.currentTarget.focus(); // Force focus for ARIA.
								}
							}
						}
					);
				}

				if(cssSel && elements.length !== 1) { // So empty strings do not generate the warning. ie., they just remove the old one.
					this._warning( {
						type: this.warning.CSS_SELECTOR_COUNT,
						context: this.css.cs[fn],
						message: this.warningMsg.CSS_SELECTOR_COUNT + elements.length + " found for " + fn + " method.",
						hint: this.warningHint.CSS_SELECTOR_COUNT
					});
				}
			} else {
				this._warning( {
					type: this.warning.CSS_SELECTOR_METHOD,
					context: fn,
					message: this.warningMsg.CSS_SELECTOR_METHOD,
					hint: this.warningHint.CSS_SELECTOR_METHOD
				});
			}
		} else {
			this._warning( {
				type: this.warning.CSS_SELECTOR_STRING,
				context: cssSel,
				message: this.warningMsg.CSS_SELECTOR_STRING,
				hint: this.warningHint.CSS_SELECTOR_STRING
			});
		}
	}
	duration = (e) => {
		if(this.options.toggleDuration) {
			if(this.options.captureDuration) {
				e.stopPropagation();
			}
			this._setOption("remainingDuration", !this.options.remainingDuration);
		}
	}
	seekBar = (e) => {	 // Handles clicks on the seekBar
		// Using $(e.currentTarget) to enable multiple seek bars
		var bar = e.currentTarget,
			offset = JPlayer._getOffset(bar),
			x = e.pageX - offset.left,
			w = JPlayer._getWidth(bar),
			p = 100 * x / w;

		this.playHead(p);
	}
	playbackRate = (pbr) => {
		this._setOption("playbackRate", pbr);
	}
	playbackRateBar = (e) => {	 // Handles clicks on the playbackRateBar
		// Using $(e.currentTarget) to enable multiple playbackRate bars
		var bar = e.currentTarget,
			offset = JPlayer._getOffset(bar),
			x = e.pageX - offset.left,
			w = JPlayer._getWidth(bar),
			y = JPlayer._getHeight(bar) - e.pageY + offset.top,
			h = JPlayer._getHeight(bar),
			ratio,
			pbr;

		if(this.options.verticalPlaybackRate) {
			ratio = y/h;
		} else {
			ratio = x/w;
		}

		pbr = ratio * (this.options.maxPlaybackRate - this.options.minPlaybackRate) + this.options.minPlaybackRate;
		this.playbackRate(pbr);
	}
	_updatePlaybackRate = () => {
		var pbr = this.options.playbackRate,
			ratio = (pbr - this.options.minPlaybackRate) / (this.options.maxPlaybackRate - this.options.minPlaybackRate);
		if(this.status.playbackRateEnabled) {
			this.setState(previousState => previousState.playbackRateBarStyle = Object.assign({}, previousState.playbackRateBarStyle, {display: ""}));

			var playbackRateBarDimensionValue = (ratio*100)+"%";

			this.setState(previousState => previousState.playbackRateBarValueStyle = Object.assign({}, previousState.playbackRateBarValueStyle, 
				{display: "", width: !this.options.verticalPlaybackRate ? playbackRateBarDimensionValue : null, 
				height: this.options.verticalPlaybackRate ? playbackRateBarDimensionValue : null}));
		} else {
			this.setState(previousState => previousState.playbackRateBarStyle = Object.assign({}, previousState.playbackRateBarStyle, {display: "none"}));
			this.setState(previousState => previousState.playbackRateBarValueStyle = Object.assign({}, previousState.playbackRateBarValueStyle, {display: "none"}));
		}
	}
	repeat = (event) => {	 // Handle clicks on the repeat button
		var guiAction = typeof event === "object"; // Flags GUI click events so we know this was not a direct command, but an action taken by the user on the GUI.
		if(guiAction && this.options.useStateClassSkin && this.state.options.loop) {
			this._loop(false);
		} else {
			this._loop(true);
		}
	}
	repeatOff = () => {	 // Handle clicks on the repeatOff button
		this._loop(false);
	}
	_loop = (loop) => {
		if(this.state.options.loop !== loop) {
			//Call the functions in the callback otherwise the state won't have been updated yet.
			this.setState(previousState => previousState.options.loop = loop, () => 
			{ 
				this._updateButtons(); 
				this._trigger(this.event.repeat);
			});
		}
	}
	_setOptions = (options) => {
		for (var key in options) {
			var option = options[key];

			if (this.state.options.hasOwnProperty(key)) {
				this.setState(previousState => previousState.options = Object.assign({}, previousState.options, previousState.options[key] = option), this._setOption(key, option));
			}
			else{
				this._setOption(key, option);
			}
		}
	}
	_setOption = (key, value) => {
		// The ability to set options is limited at this time.
		switch(key) {
			// case "html" :
			// 	this.setState(previousState => previousState.options.html = Object.assign({}, previousState.options.html, previousState.options.html[key] = value));
			// 	break;
			case "volume" :
				this.volume(value);
				break;
			case "muted" :
				this._muted(value);
				break;
			case "globalVolume" :
				this.options[key] = value;
				break;
			case "cssSelectorAncestor" :
				this._cssSelectorAncestor(value); // Set and refresh all associations for the new ancestor.
				break;
			case "cssSelector" :
				for (var fn = 0; fn < value.length; fn++) {
					var cssSel = value[fn];

					this._cssSelector(fn, cssSel); // NB: The option is set inside this function, after further validity checks.
				}
				break;
			case "playbackRate" :
				this.options[key] = value = this._limitValue(value, this.options.minPlaybackRate, this.options.maxPlaybackRate);
				
				if(this.html.used) {
					this.currentMedia['playbackRate'] = value;
				}
				this._updatePlaybackRate();
				break;
			case "defaultPlaybackRate" :
				this.options[key] = value = this._limitValue(value, this.options.minPlaybackRate, this.options.maxPlaybackRate);

				if(this.html.used) {
					this.currentMedia['defaultPlaybackRate'] = value;
				}
				this._updatePlaybackRate();
				break;
			case "minPlaybackRate" :
				this.options[key] = value = this._limitValue(value, 0.1, this.options.maxPlaybackRate - 0.1);

				this._updatePlaybackRate();
				break;
			case "maxPlaybackRate" :
				this.options[key] = value = this._limitValue(value, this.options.minPlaybackRate + 0.1, 16);

				this._updatePlaybackRate();
				break;
			case "fullScreen" :
				if(this.options[key] !== value) { // if changed
					var wkv = this.nativeFeatures.fullscreen.used.webkitVideo;

					if(!wkv || wkv && !this.status.waitForPlay) {
						if(!wkv) { // No sensible way to unset option on these devices.
							this.options[key] = value;
						}
						if(value) {
							this._requestFullscreen();
						} else {
							this._exitFullscreen();
						}
						if(!wkv) {
							this._setOption("fullWindow", value);
						}
					}
				}
				break;
			case "fullWindow" :
				if(this.options[key] !== value) { // if changed
					this._removeUiClass();
					this.options[key] = value;
					this._refreshSize();
				}
				break;
			// case "size" :
			// 	if(!this.options.fullWindow && this.options[key].cssClass !== value.cssClass) {
			// 		this._removeUiClass();
			// 	}
			// 	this.options[key] = Object.assign({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
			// 	this._refreshSize();
			// 	break;
			// case "sizeFull" :
			// 	if(this.options.fullWindow && this.options[key].cssClass !== value.cssClass) {
			// 		this._removeUiClass();
			// 	}
			// 	this.options[key] = Object.assign({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
			// 	this._refreshSize();
			// 	break;
			case "autohide" :
				this.options[key] = Object.assign({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
				this._updateAutohide();
				break;
			case "loop" :
				this._loop(value);
				break;
			case "remainingDuration" :
				this.options[key] = value;
				this._updateInterface();
				break;
			case "toggleDuration" :
				this.options[key] = value;
				break;
			case "nativeVideoControls" :
				this.options[key] = Object.assign({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
				this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
				this._restrictNativeVideoControls();
				this._updateNativeVideoControls();
				break;
			case "noFullWindow" :
				this.options[key] = Object.assign({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
				this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls); // Need to check again as noFullWindow can depend on this flag and the restrict() can override it.
				this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow);
				this._restrictNativeVideoControls();
				this._updateButtons();
				break;
			case "noVolume" :
				this.options[key] = Object.assign({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
				this.status.noVolume = this._uaBlocklist(this.options.noVolume);
				this._updateVolume();
				this._updateMute();
				break;
			case "timeFormat" :
				this.options[key] = Object.assign({}, this.options[key], value); // store a merged copy of it, incase not all properties changed.
				break;
			case "keyEnabled" :
				this.options[key] = value;
				if(!value && this === this.focusInstance) {
					this.focusInstance = null;
				}
				break;
			case "keyBindings" :
				this.options[key] = merge({}, this.options[key], value); // store a merged DEEP copy of it, incase not all properties changed.
				break;
			case "audioFullScreen" :
				this.options[key] = value;;
				break;
			case "autoBlur" :
				this.options[key] = value;
				break;
		}
	}
	_refreshSize = () => {
		this._setSize(); // update status and jPlayer element size
		this._addUiClass(); // update the ui class
		this._updateSize(); // update internal sizes
		this._updateButtons();
		this._updateAutohide();
		this._trigger(this.event.resize);
	}
	_setSize = () => {
		// Determine the current size from the options
		if(this.options.fullWindow) {
			this.status.width = this.options.sizeFull.width;
			this.status.height = this.options.sizeFull.height;
			this.status.cssClass = this.options.sizeFull.cssClass;
		} else {
			this.status.width = this.options.size.width;
			this.status.height = this.options.size.height;
			this.status.cssClass = this.options.size.cssClass;
		}

		// Set the size of the jPlayer area.
		this.setState({jPlayerStyle: { width: this.status.width, height: this.status.height }});
	}
	_addUiClass = () => {
		this.setState(previousState => {
			if (!previousState.stateClass.includes(this.status.cssClass)){
				return { stateClass: previousState.stateClass + " " + this.status.cssClass };
			}
		});
	}
	_removeUiClass = () => {
		this.setState({stateClass: this.state.stateClass.replace(this.status.cssClass, "").trim()});
	}
	_updateSize = () => {
		this.setState(previousState => previousState.posterStyle = Object.assign({}, previousState.posterStyle, 
			{width: this.status.width, height: this.status.height}));

		// Video html resized if necessary at this time, or if native video controls being used.
		if(!this.status.waitForPlay && this.html.active && this.status.video
				|| this.html.video.available && this.html.used && this.status.nativeVideoControls) {
			this.setState(previousState => previousState.videoStyle = Object.assign({}, previousState.videoStyle, 
					{width: this.status.width, height: this.status.height}));
		}
	}
	_updateAutohide = () => {
		var	event = "mousemove.jPlayer",
			namespace = ".jPlayerAutohide",
			eventType = event + namespace,
			handler = function(event) {
				var moved = false,
					deltaX, deltaY;
				if(typeof this.internal.mouse !== "undefined") {
					//get the change from last position to this position
					deltaX = this.internal.mouse.x - event.pageX;
					deltaY = this.internal.mouse.y - event.pageY;
					moved = (Math.floor(deltaX) > 0) || (Math.floor(deltaY)>0);
				} else {
					moved = true;
				}
				// store current position for next method execution
				this.internal.mouse = {
						x : event.pageX,
						y : event.pageY
				};
				// if mouse has been actually moved, do the gui fadeIn/fadeOut
				if (moved) {
					// this.css.jq.gui.fadeIn(this.options.autohide.fadeIn, function() {
					// 	clearTimeout(this.internal.autohideId);
					// 	this.internal.autohideId = setTimeout( function() {
					// 		this.css.jq.gui.fadeOut(this.options.autohide.fadeOut);
					// 	}, this.options.autohide.hold);
					// });
				}
			};

		//if(this.css.jq.gui.length) {

			// // End animations first so that its callback is executed now.
			// // Otherwise an in progress fadeIn animation still has the callback to fadeOut again.
			// this.css.jq.gui.stop(true, true);

			// // Removes the fadeOut operation from the fadeIn callback.
			// clearTimeout(this.internal.autohideId);
			// // undefine mouse
			// delete this.internal.mouse;

			// this.element.unbind(namespace);
			// this.css.jq.gui.unbind(namespace);

			// if(!this.status.nativeVideoControls) {
			// 	if(this.options.fullWindow && this.options.autohide.full || !this.options.fullWindow && this.options.autohide.restored) {
			// 		this.element.bind(eventType, handler);
			// 		this.css.jq.gui.bind(eventType, handler);
			//		this.css.jq.gui.hide();
			// 	} else {
			// 		this.css.jq.gui.show();
			// 	}
			// } else {
			// 	this.css.jq.gui.hide();
			// }
		//}
	}
	fullScreen = (event) => {
		var guiAction = typeof event === "object"; // Flags GUI click events so we know this was not a direct command, but an action taken by the user on the GUI.

		if(guiAction && this.options.useStateClassSkin && this.options.fullScreen) {
			this._setOption("fullScreen", false);
		} else {
			this._setOption("fullScreen", true);
		}
	}
	restoreScreen = () => {
		this._setOption("fullScreen", false);
	}
	_fullscreenAddEventListeners = () => {
		var	fs = this.nativeFeatures.fullscreen;

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
		if(this.options.fullScreen && !this.nativeFeatures.fullscreen.api.fullscreenElement()) {
			this._setOption("fullScreen", false);
		}
	}
	_requestFullscreen = () => {
		var e = document.querySelector(this.state.options.cssSelector.cssSelectorAncestor),
			fs = this.nativeFeatures.fullscreen;

		// This method needs the video element. For iOS and Android.
		if(fs.used.webkitVideo) {
			e = this.currentMedia;
		}

		if(fs.api.fullscreenEnabled) {
			fs.api.requestFullscreen(e);
		}
	}
	_exitFullscreen = () => {
		var fs = this.nativeFeatures.fullscreen,
			e;

		// This method needs the video element. For iOS and Android.
		if(fs.used.webkitVideo) {
			e = this.videoElement;
		}

		if(fs.api.fullscreenEnabled) {
			fs.api.exitFullscreen(e);
		}
	}
	_html_initMedia = (media) => {
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
		this.setState({mediaSrc: this.status.src});

		if(this.state.options.preload !== 'none') {
			this._html_load(); // See function for comments
		}
		this._trigger(this.event.timeupdate);
	}
	_html_setFormat = (media) => {
		// Always finds a format due to checks in setMedia()
		for (var priority = 0; priority < this.formats.length; priority++) {
			var format = this.formats[priority];

			if(this.html.support[format] && media[format]) {
				this.status.src = media[format];
				this.status.format[format] = true;
				this.status.formatType = format;
				return false;
			}
		}
	}
	_html_setAudio = (media) => {
		this._html_setFormat(media);
		this._html_initMedia(media);
	}
	_html_setVideo = (media) => {
		this._html_setFormat(media);
		if(this.status.nativeVideoControls) {
			this.videoElement.poster = this._validString(media.poster) ? media.poster : "";
		}
		this._html_initMedia(media);
	}
	_html_resetMedia = () => {
		var media = this.currentMedia;

		if(!this.status.nativeVideoControls) {
			this.setState(previousState => previousState.videoStyle = Object.assign({}, previousState.videoStyle, {display: "none"}));
		}

		media.pause();
	}
	_html_clearMedia = () => {
		if(this.currentMedia) {
			this.setState({mediaSrc: "about:blank"});
			// The following load() is only required for Firefox 3.6 (PowerMacs).
			// Recent HTMl5 browsers only require the src change. Due to changes in W3C spec and load() effect.
			this.currentMedia.load(); // Stops an old, "in progress" download from continuing the download. Triggers the loadstart, error and emptied events, due to the empty src. Also an abort event if a download was in progress.
		}
	}
	_html_load = () => {
		// This function remains to allow the early HTML5 browsers to work, such as Firefox 3.6
		// A change in the W3C spec for the media.load() command means that this is no longer necessary.
		// This command should be removed and actually causes minor undesirable effects on some browsers. Such as loading the whole file and not only the metadata.
		if(this.status.waitForLoad) {
			this.status.waitForLoad = false;
			this.currentMedia.load();
		}
		clearTimeout(this.internal.htmlDlyCmdId);
	}
	_html_play = (time) => {
		var media = this.currentMedia;

		this.androidFix.pause = false; // Cancel the pause fix.

		this._html_load(); // Loads if required and clears any delayed commands.

		// Setup the Android Fix.
		if(this.androidFix.setMedia) {
			this.androidFix.play = true;
			this.androidFix.time = time;

		} else if(!isNaN(time)) {

			// Attempt to play it, since iOS has been ignoring commands
			if(this.internal.cmdsIgnored) {
				media.play();
			}

			try {
				// !media.seekable is for old HTML5 browsers, like Firefox 3.6.
				// Checking seekable.length is important for iOS6 to work with setMedia().play(time)
				if(!media.seekable || typeof media.seekable === "object" && media.seekable.length > 0) {
					media.currentTime = time;
					media.play();
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
			media.play();
		}

		this._html_checkWaitForPlay();
	}
	_html_pause = (time) => {
		var media = this.currentMedia;

		this.androidFix.play = false; // Cancel the play fix.

		if(time > 0) { // We do not want the stop() command, which does pause(0), causing a load operation.
			this._html_load(); // Loads if required and clears any delayed commands.
		} else {
			clearTimeout(this.internal.htmlDlyCmdId);
		}

		// Order of these commands is important for Safari (Win) and IE9. Pause then change currentTime.
		media.pause();

		// Setup the Android Fix.
		if(this.androidFix.setMedia) {
			this.androidFix.pause = true;
			this.androidFix.time = time;

		} else if(!isNaN(time)) {
			try {
				if(!media.seekable || typeof media.seekable === "object" && media.seekable.length > 0) {
					media.currentTime = time;
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
			this._html_checkWaitForPlay();
		}
	}
	_html_playHead = (percent) => {
		var	media = this.currentMedia;

		this._html_load(); // Loads if required and clears any delayed commands.

		// This playHead() method needs a refactor to apply the android fix.

		try {
			if(typeof media.seekable === "object" && media.seekable.length > 0) {
				media.currentTime = percent * media.seekable.end(media.seekable.length-1) / 100;
			} else if(media.duration > 0 && !isNaN(media.duration)) {
				media.currentTime = percent * media.duration / 100;
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
			this._html_checkWaitForPlay();
		}
	}
	_html_checkWaitForPlay = () => {
		if(this.status.waitForPlay) {
			this.status.waitForPlay = false;

			this.setState(previousState => previousState.videoPlayStyle = Object.assign({}, previousState.videoPlayStyle, {display: "none"}));

			if(this.status.video) {
				this.setState(previousState => previousState.posterStyle = Object.assign({}, previousState.posterStyle, {display: "none"}));

				this.setState(previousState => previousState.posterStyle = Object.assign({}, previousState.posterStyle, 
					{display: "", width: this.status.width, height: this.status.height}));
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
		this._trigger(this.event.error, error);
		if(this.options.errorAlerts) {
			this._alert("Error!" + (error.message ? "\n" + error.message : "") + (error.hint ? "\n" + error.hint : "") + "\nContext: " + error.context);
		}
	}
	_warning = (warning) => {
		this._trigger(this.event.warning, undefined, warning);
		if(this.options.warningAlerts) {
			this._alert("Warning!" + (warning.message ? "\n" + warning.message : "") + (warning.hint ? "\n" + warning.hint : "") + "\nContext: " + warning.context);
		}
	}
	_alert = (message) => {
		var msg = "jPlayer " + JPlayer.version.script + " : id='" + this.internal.id + "' : " + message;
		if(!this.options.consoleAlerts) {
			alert(msg);
		} else if(window.console && window.console.log) {
			window.console.log(msg);
		}
	}
	componentWillReceiveProps = (nextProps) => {
		this._setOptions(nextProps);
	}
	componentWillUnmount = () => {
		this._removeEventListeners();
		document.documentElement.removeEventListener("keydown", this._keyBindings);
	}
	componentWillMount = () => {
		this._initBeforeRender();
	}
	componentDidMount = () => {
		if (this.audioElement){
			this.currentMedia = this.audioElement;
			this.html.audio.available = !!this.audioElement.canPlayType && this._testCanPlayType(JPlayer.format.mp3.codec); // Test is for IE9 on Win Server 2008. 
		}

		if (this.videoElement){
			this.currentMedia = this.videoElement;
			this.html.video.available = !!this.videoElement.canPlayType && this._testCanPlayType(JPlayer.format.m4v.codec);
		}

		this._initAfterRender();
	}
	_renderAnimatedPlaybar = () => (
		<Motion style={{smoothWidth: spring(this.status.currentPercentAbsolute, [250])}}>
			{(values) => <div class="jp-play-bar" style={{width: values.smoothWidth + "%"}} /> }
		</Motion>
	)
	_renderPoster = () => (
		<img key={this.internal.posterId} id={this.internal.posterId} src={this.state.posterSrc} style={this.state.posterStyle}
		 			 onLoad={this.state.posterOnLoad} onClick={this.state.posterOnClick} />
	)
	_renderAudio = (mediaAttribute) => {
		if (this.require.audio){	
			return (
				<audio ref={(audioElement) => this.audioElement = audioElement} key={this.internal.audioId} src={this.state.mediaSrc} id={this.internal.audioId} {...mediaAttribute} 
				{...this.mediaEvent}>
					{this.state.audioTracks}
				</audio>
			);
		}
	}
	_renderVideo = (mediaAttribute) => {
		if (this.require.video){
			return (
				<video ref={(videoElement) => this.videoElement = videoElement} key={this.internal.videoId} style={this.state.videoStyle} src={this.state.mediaSrc} 
					id={this.internal.videoId} onClick={this.state.videoOnClick} {...mediaAttribute} {...this.mediaEvent}>
					{this.state.videoTracks}
				</video>
			);
		}
	}
	render = () => {
		const mediaAttribute = {
			preload: this.state.options.preload,
			autoPlay: this.state.options.autoPlay,
			muted: this.state.options.muted,
			loop: this.state.options.loop
		};
		var media = this.state.renderMedia ? [this._renderPoster(), this._renderAudio(mediaAttribute), this._renderVideo(mediaAttribute)] : null;
		var playBar = this.options.smoothPlaybar ? this._renderAnimatedPlaybar() : <div class="jp-play-bar" style={this.state.playBarStyle} />;

		return (
			<div id={this.state.options.cssSelector.cssSelectorAncestor.slice(1)} class={this.state.stateClass}>
				<div ref={(jPlayerElement) => this.jPlayerElement = jPlayerElement} id={this.state.options.cssSelector.jPlayerSelector.slice(1)} class="jp-jplayer" style={this.state.jPlayerStyle}>
					{media}
				</div>
				<div class="jp-gui">			
					<div class="jp-controls">
						<a class="jp-play" style={this.state.playStyle} onClick={this.state.playOnClick}>
							{this.state.options.html.play}
						</a>
						<a class="jp-pause" style={this.state.pauseStyle} onClick={this.state.pauseOnClick}>
							{this.state.options.html.pause}
						</a>
						<a class="jp-mute" style={this.state.muteStyle} onClick={this.state.muteOnClick}>
							{this.state.options.html.mute}
						</a>
						<a class="jp-unmute" style={this.state.unmuteStyle} onClick={this.state.unmuteOnClick}>
							{this.state.options.html.unmute}
						</a>
						<a class="jp-repeat" style={this.state.repeatStyle} onClick={this.state.repeatOnClick}>							
							{this.state.options.html.repeat}			
						</a>
						<a class="jp-repeat-off" style={this.state.repeatOffStyle} onClick={this.state.repeatOffOnClick}>							
							{this.state.options.html.repeatOff}	
						</a>																
						<a class="jp-full-screen" style={this.state.fullScreenStyle} onClick={this.state.fullScreenOnClick}>
							{this.state.options.html.fullScreen}
						</a>
						<a class="jp-restore-screen" style={this.state.restoreScreenStyle} onClick={this.state.restoreScreenOnClick}>
							{this.state.options.html.restoreScreen}
						</a>
						<a class="jp-volume-max" style={this.state.volumeMaxStyle} onClick={this.state.volumeMaxOnClick}>
							{this.state.options.html.volumeMax}
						</a>
						<div class="jp-volume-bar" style={this.state.volumeBarStyle} onClick={this.state.volumeBarOnClick}>
							<div class="jp-volume-bar-value" style={this.state.volumeBarValueStyle} />
						</div>
						{
						/*<div class="jp-title">
							{this.state.titleText}
						</div>*/
						}
						<div class="jp-playback-rate-bar" style={this.state.playbackRateBarStyle} onClick={this.state.playbackRateBarOnClick}>
							<div class="jp-playback-rate-bar-value" style={this.state.playbackRateBarValueStyle} />
						</div>						
						{this.state.options.html.additionalControls}	
					</div>
					<div class="jp-progress">
						<div class={this.state.seekBarClass} style={this.state.seekBarStyle} onClick={this.state.seekBarOnClick}>                         
							{playBar}
							<div class="jp-current-time">{this.state.currentTimeText}</div>
							<div class="jp-duration" onClick={this.state.durationOnClick}>{this.state.durationText}</div>
						</div>
					</div>
				</div>
				<div class="jp-no-solution" style={this.state.noSolutionStyle}>
					<span>Update Required</span>
					To play the media you will need to update your browser to a recent version.
				</div>
			</div>
		);
	}
}

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

JPlayer.count = 0;
JPlayer.instances = {};
JPlayer.solution = { // Defines the solutions built in jPlayer.
	html: true
}
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

JPlayer._getEvents = () => {
	const events = [
		'ready',
		'setmedia', // Fires when the media is set
		'resize', // Occurs when the size changes through a full/restore screen operation or if the size/sizeFull options are changed.
		'repeat', // Occurs when the repeat status changes. Usually through clicks on the repeat button of the interface.
		'click', // Occurs when the user clicks on one of the following: poster image, html video
		'error', // Event error code in event.jPlayer.error.type. See this.error
		'warning', // Event warning code in event.jPlayer.warning.type. See this.warning

		// Other events match HTML5 spec.
		'loadstart',
		'progress',
		'suspend',
		'abort',
		'emptied',
		'stalled',
		'play',
		'pause',
		'loadedmetadata',
		'loadeddata',
		'waiting',
		'playing',
		'canplay',
		'canplaythrough',
		'seeking',
		'seeked',
		'timeupdate',
		'ended',
		'ratechange',
		'durationchange',
		'volumechange'
	];

	var jPlayerEvents = {};

	for (var key in events) {
		var event = events[key];

		jPlayerEvents[event] = "jPlayer_" + event;
	}

	return jPlayerEvents;
}

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

JPlayer._getOffset = (el) => {
	var rect = el.getBoundingClientRect();

	return {
		top: rect.top + document.body.scrollTop,
		left: rect.left + document.body.scrollLeft
	};
}

JPlayer._getWidth = (el) => el.getBoundingClientRect().width;
JPlayer._getHeight = (el) => el.getBoundingClientRect().height;
JPlayer._isFunction = (obj) => Object.prototype.toString.call(obj) == '[object Function]';