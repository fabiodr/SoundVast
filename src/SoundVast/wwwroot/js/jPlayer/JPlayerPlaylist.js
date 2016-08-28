import React from "react";
import _ from "lodash";

import JPlayer from "./JPlayer";

export default class JPlayerPlaylist extends React.Component {
    constructor(props)
    {
        super();

        this.event = {};
    }
    _test = () => {}
    _setup = () => {
        // this.current = 0;
        // this.shuffled = false;
        // this.removing = false; // Flag is true during remove animation, disabling the remove() method until complete.

        // this.cssSelector = _.assign({}, this._cssSelector, this.props.cssSelector); // Object: Containing the css selectors for jPlayer and its cssSelectorAncestor

        // //Set the initial loop to the options loop
        // this.loop = this.props.options.loop;

        // this.options = _.merge({
        //     keyBindings: {
        //         next: {
        //             key: 221, // ]
        //             fn: function () {
        //                 self.next();
        //             }
        //         },
        //         previous: {
        //             key: 219, // [
        //             fn: function () {
        //                 self.previous();
        //             }
        //         },
        //         shuffle: {
        //             key: 83, // s
        //             fn: function () {
        //                 self.shuffle();
        //             }
        //         }
        //     },
        //     stateClass: {
        //         shuffled: "jp-state-shuffled"
        //     }
        // }, this._options, this.props.options); // Object: The jPlayer constructor options for this playlist and the playlist options

        // this.playlist = []; // Array of Objects: The current playlist displayed (Un-shuffled or Shuffled)
        // this.original = []; // Array of Objects: The original playlist

        // this._initPlaylist(this.props.playlist); // Copies playlist to this.original. Then mirrors this.original to this.playlist. Creating two arrays, where the element pointers match. (Enables pointer comparison.)

        // // Setup the css selectors for the extra interface items used by the playlist.
        // this.cssSelector.details = this.cssSelector.cssSelectorAncestor + " .jp-details"; // Note that jPlayer controls the text in the title element.
        // this.cssSelector.playlist = this.cssSelector.cssPlaylistOptionsSelector + " .jp-playlist";
        // this.cssSelector.next = this.cssSelector.cssSelectorAncestor + " .jp-next";
        // this.cssSelector.previous = this.cssSelector.cssSelectorAncestor + " .jp-previous";
        // this.cssSelector.shuffle = this.cssSelector.cssSelectorAncestor + " .jp-shuffle";
        // this.cssSelector.shuffleOff = this.cssSelector.cssSelectorAncestor + " .jp-shuffle-off";

        // // Override the cssSelectorAncestor given in options
        // this.options.cssSelectorAncestor = this.cssSelector.cssSelectorAncestor;

        // // Override the default repeat event handler
        // this.options.repeat = (event) => {
        //     this.loop = event.jPlayer.options.loop;
        // };
            
        // // Create a ready event handler to initialize the playlist
        // this.jPlayer.jPlayerElement.addEventListener(this.jPlayer.event.ready, () => {
        //     this._init();
        // });

        // //Create an ended event handler to move to the next item
        // this.event.onEnded = () => this.next();

        // // Create a play event handler to pause other instances
        // this.event.onPlay = () => this.pauseOthers();
       
        // // Create a resize event handler to show the title in full screen mode.
        // this.jPlayer.jPlayerElement.addEventListener(this.jPlayer.event.resize, (event) => {
        //     // if (event.jPlayer.options.fullScreen) {
        //     //     $(self.cssSelector.details).show();
        //     // } else {
        //     //     $(self.cssSelector.details).hide();
        //     // }
        // });

        // // Create click handlers for the extra buttons that do playlist functions.
        // this.event.nextOnClick = (e) => {
        //     e.preventDefault();
        //     this.previous();
        //     this.blur(this);
        // }

        // this.event.shuffleOnClick = (e) => {
        //     e.preventDefault();

        //     // if (this.shuffled && $(this.cssSelector.jPlayer).jPlayer("option", "useStateClassSkin")) {
        //     //     this.shuffle(false);
        //     // } else {
        //     //     this.shuffle(true);
        //     // }
        //     // this.blur(this);
        // };

        // this.event.shuffleOffClick = (e) => {
        //     e.preventDefault();
        //     this.shuffle(false);
        //     this.blur(this);
        //     // .hide();
        // }

        // // Put the title in its initial display state
        // if (!this.options.fullScreen) {
        //     $(this.cssSelector.details).hide();
        // }

        // // Remove the empty <li> from the page HTML. Allows page to be valid HTML, while not interfereing with display animations
        // $(this.cssSelector.playlist + " ul").empty();

        // // Create .on() handlers for the playlist items along with the free media and remove controls.
        // this._createItemHandlers();

        // // Instance jPlayer
        // $(this.cssSelector.jPlayer).jPlayer(this.options);

        // //Remove the looped class from the jPlayer as it's initialy incorrectly set in the original _updateButtons
        // $(this.cssSelector.jPlayer).data().jPlayer.removeStateClass("looped");

        // //Add a new stateClass for the extra loop option
        // $.extend(true, this.options, {
        //     stateClass: {
        //         looped_playlist: "jp-state-looped-playlist"
        //     }
        // });

        // //Set the jPlayer options to extend these options
        // $.extend(true, $(this.cssSelector.jPlayer).data().jPlayer.options, this.options);

        // $(this.cssSelector.jPlayer).data().jPlayer.repeat = function () {
        //     var guiAction = typeof event === "object"; // Flags GUI click events so we know this was not a direct command, but an action taken by the user on the GUI.
        //     if (guiAction && this.options.useStateClassSkin && this.options.loop === "loop-playlist") {
        //         this._loop("off");
        //     } else if (guiAction && this.options.useStateClassSkin && this.options.loop === "off") {
        //         this._loop("loop");
        //         this.addStateClass("looped");
        //     }
        //     else {
        //         this.addStateClass("looped_playlist");
        //         this.removeStateClass("looped");
        //         this._loop("loop-playlist");
        //     }
        // };

        // $(this.cssSelector.jPlayer).data().jPlayer._updateButtons = function (playing) {
        //     if (playing === undefined) {
        //         playing = !this.status.paused;
        //     } else {
        //         this.status.paused = !playing;
        //     }
        //     // Apply the state classes. (For the useStateClassSkin:true option)
        //     if (playing) {
        //         this.addStateClass("playing");
        //     } else {
        //         this.removeStateClass("playing");
        //     }
        //     if (!this.status.noFullWindow && this.options.fullWindow) {
        //         this.addStateClass("fullScreen");
        //     } else {
        //         this.removeStateClass("fullScreen");
        //     }
        //     //Three types of loop states: Off, Loop, Loop-Playlist
        //     if (this.options.loop === "loop") {
        //         this.addStateClass("looped");
        //     }
        //     else if (this.options.loop === "loop-playlist") {
        //         this.addStateClass("looped_playlist");
        //         this.removeStateClass("looped");
        //     }
        //     else {
        //         this.removeStateClass("looped_playlist");
        //     }

        //     // Toggle the GUI element pairs. (For the useStateClassSkin:false option)
        //     if (this.css.jq.play.length && this.css.jq.pause.length) {
        //         if (playing) {
        //             this.css.jq.play.hide();
        //             this.css.jq.pause.show();
        //         } else {
        //             this.css.jq.play.show();
        //             this.css.jq.pause.hide();
        //         }
        //     }
        //     if (this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length) {
        //         if (this.status.noFullWindow) {
        //             this.css.jq.fullScreen.hide();
        //             this.css.jq.restoreScreen.hide();
        //         } else if (this.options.fullWindow) {
        //             this.css.jq.fullScreen.hide();
        //             this.css.jq.restoreScreen.show();
        //         } else {
        //             this.css.jq.fullScreen.show();
        //             this.css.jq.restoreScreen.hide();
        //         }
        //     }
        //     if (this.css.jq.repeat.length && this.css.jq.repeatOff.length) {
        //         if (this.options.loop) {
        //             this.css.jq.repeat.hide();
        //             this.css.jq.repeatOff.show();
        //         } else {
        //             this.css.jq.repeat.show();
        //             this.css.jq.repeatOff.hide();
        //         }
        //     }
        // }
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
        var self = this;
        this._refresh(function () {
            if (self.options.playlistOptions.autoPlay) {
                self.play(self.current);
            } else {
                self.select(self.current);
            }
        });
    }
    _initPlaylist = (playlist) => {
        this.current = 0;
        this.shuffled = false;
        this.removing = false;
        this.original = _.assign([], playlist); // Copy the Array of Objects
        this._originalPlaylist();
    }
    _originalPlaylist = () => {
        // Make both arrays point to the same object elements. Gives us 2 different arrays, each pointing to the same actual object. ie., Not copies of the object.
        this.playlist = [...this.original]; 
    }
    _refresh = (instant) => {
        /* instant: Can be undefined, true or a function.
            *	undefined -> use animation timings
            *	true -> no animation
            *	function -> use animation timings and excute function at half way point.
            */
        var self = this;

        if (instant && !$.isFunction(instant)) {
            $(this.cssSelector.playlist + " ul").empty();
            $.each(this.playlist, function (i) {
                $(self.cssSelector.playlist + " ul").append(self._createListItem(self.playlist[i]));
            });
            this._updateControls();
        } else {
            var displayTime = $(this.cssSelector.playlist + " ul").children().length ? this.options.playlistOptions.displayTime : 0;

            $(this.cssSelector.playlist + " ul").slideUp(displayTime, function () {
                var $this = $(this);
                $(this).empty();

                $.each(self.playlist, function (i) {
                    $this.append(self._createListItem(self.playlist[i]));
                });
                self._updateControls();
                if ($.isFunction(instant)) {
                    instant();
                }
                if (self.playlist.length) {
                    $(this).slideDown(self.options.playlistOptions.displayTime);
                } else {
                    $(this).show();
                }
            });
        }
    }
    _createListItem = (media) => {
        var self = this;

        // Wrap the <li> contents in a <div>
        var listItem = "<li><div>";

        // Create remove control
        listItem += "<a href='javascript:;' class='" + this.options.playlistOptions.removeItemClass + "'>&times;</a>";

        // Create links to free media
        if (media.free) {
            var first = true;
            listItem += "<span class='" + this.options.playlistOptions.freeGroupClass + "'>(";
            $.each(media, function (property, value) {
                if ($.jPlayer.prototype.format[property]) { // Check property is a media format.
                    if (first) {
                        first = false;
                    } else {
                        listItem += " | ";
                    }
                    listItem += "<a class='" + self.options.playlistOptions.freeItemClass + "' href='" + value + "' tabindex='-1'>" + property + "</a>";
                }
            });
            listItem += ")</span>";
        }

        // The title is given next in the HTML otherwise the float:right on the free media corrupts in IE6/7
        listItem += "<a href='javascript:;' class='" + this.options.playlistOptions.itemClass + "' tabindex='0'>" + "<img src='" + media.poster + "' />" + media.title + "</a>";
        listItem += (media.artist ? " <span class='jp-artist'>by " + media.artist + "</span>" : "");
        listItem += "</div></li>";

        return listItem;
    }
    _createItemHandlers = () => {
        var self = this;

        // Create live handlers for the playlist items
        $(this.cssSelector.playlist).off("click", "a." + this.options.playlistOptions.itemClass).on("click", "a." + this.options.playlistOptions.itemClass, function (e) {
            e.preventDefault();
            var index = $(this).parent().parent().index();
            if (self.current !== index) {
                self.play(index);
            } else {
                $(self.cssSelector.jPlayer).jPlayer("play");
            }
            self.blur(this);
        });

        // Create live handlers that disable free media links to force access via right click
        $(this.cssSelector.playlist).off("click", "a." + this.options.playlistOptions.freeItemClass).on("click", "a." + this.options.playlistOptions.freeItemClass, function (e) {
            e.preventDefault();
            $(this).parent().parent().find("." + self.options.playlistOptions.itemClass).click();
            self.blur(this);
        });

        // Create live handlers for the remove controls
        $(this.cssSelector.playlist).off("click", "a." + this.options.playlistOptions.removeItemClass).on("click", "a." + this.options.playlistOptions.removeItemClass, function (e) {
            e.preventDefault();
            var index = $(this).parent().parent().index();
            self.remove(index);
            self.blur(this);
        });
    }
    _updateControls = () => {
        if (this.options.playlistOptions.enableRemoveControls) {
            $(this.cssSelector.playlist + " ." + this.options.playlistOptions.removeItemClass).show();
        } else {
            $(this.cssSelector.playlist + " ." + this.options.playlistOptions.removeItemClass).hide();
        }

        if (this.shuffled) {
            $(this.cssSelector.jPlayer).jPlayer("addStateClass", "shuffled");
        } else {
            $(this.cssSelector.jPlayer).jPlayer("removeStateClass", "shuffled");
        }
        if ($(this.cssSelector.shuffle).length && $(this.cssSelector.shuffleOff).length) {
            if (this.shuffled) {
                $(this.cssSelector.shuffleOff).show();
                $(this.cssSelector.shuffle).hide();
            } else {
                $(this.cssSelector.shuffleOff).hide();
                $(this.cssSelector.shuffle).show();
            }
        }
    }
    _highlight = (index) => {
        if (this.playlist.length && index !== undefined) {
            $(this.cssSelector.playlist + " .jp-playlist-current").removeClass("jp-playlist-current");
            $(this.cssSelector.playlist + " li:nth-child(" + (index + 1) + ")").addClass("jp-playlist-current").find(".jp-playlist-item").addClass("jp-playlist-current");
            // $(this.cssSelector.details + " li").html("<span class='jp-title'>" + this.playlist[index].title + "</span>" + (this.playlist[index].artist ? " <span class='jp-artist'>by " + this.playlist[index].artist + "</span>" : ""));
        }
    }
    setPlaylist = (playlist) => {
        this._initPlaylist(playlist);
        this._init();
    }
    add = (media, playNow) => {
        $(this.cssSelector.playlist + " ul").append(this._createListItem(media)).find("li:last-child").hide().slideDown(this.options.playlistOptions.addTime);
        this._updateControls();
        this.original.push(media);
        this.playlist.push(media); // Both array elements share the same object pointer. Comforms with _initPlaylist(p) system.

        if (playNow) {
            this.play(this.playlist.length - 1);
        } else {
            if (this.original.length === 1) {
                this.select(0);
            }
        }
    }
    remove = (index) => {
        var self = this;

        if (index === undefined) {
            this._initPlaylist([]);
            this._refresh(function () {
                $(self.cssSelector.jPlayer).jPlayer("clearMedia");
            });
            return true;
        } else {

            if (this.removing) {
                return false;
            } else {
                index = (index < 0) ? self.original.length + index : index; // Negative index relates to end of array.
                if (0 <= index && index < this.playlist.length) {
                    this.removing = true;

                    $(this.cssSelector.playlist + " li:nth-child(" + (index + 1) + ")").slideUp(this.options.playlistOptions.removeTime, function () {
                        $(this).remove();

                        if (self.shuffled) {
                            var item = self.playlist[index];
                            $.each(self.original, function (i) {
                                if (self.original[i] === item) {
                                    self.original.splice(i, 1);
                                    return false; // Exit $.each
                                }
                            });
                            self.playlist.splice(index, 1);
                        } else {
                            self.original.splice(index, 1);
                            self.playlist.splice(index, 1);
                        }

                        if (self.original.length) {
                            if (index === self.current) {
                                self.current = (index < self.original.length) ? self.current : self.original.length - 1; // To cope when last element being selected when it was removed
                                self.select(self.current);
                            } else if (index < self.current) {
                                self.current--;
                            }
                        } else {
                            $(self.cssSelector.jPlayer).jPlayer("clearMedia");
                            self.current = 0;
                            self.shuffled = false;
                            self._updateControls();
                        }

                        self.removing = false;
                    });
                }
                return true;
            }
        }
    }
    select = (index) => {
        index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
        if (0 <= index && index < this.playlist.length) {
            this.current = index;
            this._highlight(index);
            $(this.cssSelector.jPlayer).jPlayer("setMedia", this.playlist[this.current]);
        } else {
            this.current = 0;
        }
    }
    play = (index) => {
        index = (index < 0) ? this.original.length + index : index; // Negative index relates to end of array.
        if (0 <= index && index < this.playlist.length) {
            if (this.playlist.length) {
                this.select(index);
                $(this.cssSelector.jPlayer).jPlayer("play");
            }
        } else if (index === undefined) {
            $(this.cssSelector.jPlayer).jPlayer("play");
        }
    }
    pause = () => {
        $(this.cssSelector.jPlayer).jPlayer("pause");
    }
    next = (forcePlayNextTrack) => {
        var index = (this.current + 1 < this.playlist.length) ? this.current + 1 : 0;

        if (this.loop === "loop" && !forcePlayNextTrack) {
            this.play(this.current);
        }
        else if (this.loop === "loop-playlist") {
            // See if we need to shuffle before looping to start, and only shuffle if more than 1 item.
            if (index === 0 && this.shuffled && this.options.playlistOptions.shuffleOnLoop && this.playlist.length > 1) {
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
        var index = (this.current - 1 >= 0) ? this.current - 1 : this.playlist.length - 1;

        if (this.loop === "loop-playlist" && this.options.playlistOptions.loopOnPrevious || index < this.playlist.length - 1) {
            this.play(index);
        }
    }
    shuffle = (shuffled, playNow) => {
        var self = this;

        if (shuffled === undefined) {
            shuffled = !this.shuffled;
        }

        if (shuffled || shuffled !== this.shuffled) {

            $(this.cssSelector.playlist + " ul").slideUp(this.options.playlistOptions.shuffleTime, function () {
                self.shuffled = shuffled;
                if (shuffled) {
                    self.playlist.sort(function () {
                        return 0.5 - Math.random();
                    });
                } else {
                    self._originalPlaylist();
                }
                self._refresh(true); // Instant

                if (playNow || !$(self.cssSelector.jPlayer).data("jPlayer").status.paused) {
                    self.play(0);
                } else {
                    self.select(0);
                }

                $(this).slideDown(self.options.playlistOptions.shuffleTime);
            });
        }
    }
    blur = (that) => {
        if ($(this.cssSelector.jPlayer).jPlayer("option", "autoBlur")) {
            $(that).blur();
        }
    }
    componentDidMount(){
        this._setup();
    }
    render() {

        return (
            <JPlayer ref={(jPlayer) => this.jPlayer = jPlayer} {...this.props.jPlayerPlaylistOptions} instance={this} customEvent={this.event}>
                {this.props.children.type}
            </JPlayer>
        );
    }
}