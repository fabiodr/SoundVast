// import { EventEmitter } from "events";

// class JPlayerPlaylistStore extends EventEmitter{
//     constructor(){
//         super();
//     }
//     loadjPlayerPlaylist(idSelectors){
//         // $(idSelectors.jPlayer).jPlayer({
//         //         ready: function (e) {
//         //             $(idSelectors.jPlayer).jPlayer("setMedia", {
//         //                 title: "Bubble",
//         //                 mp3: "http://jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
//         //                 poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
//         //             }).jPlayer("play");
//         //             $(idSelectors.jPlayer).jPlayer({autoBlur: true, smoothPlayBar: false});
//         //         },
//         //         cssSelectorAncestor: idSelectors.cssSelectorAncestor,
//         //         swfPath: "https://rawgit.com/happyworm/jPlayer/tree/master/dist/jplayer",
//         //         supplied: "mp3",
//         //         wmode: "window",
//         //         useStateClassSkin: true,
//         //         autoBlur: false,
//         //         smoothPlayBar: true,
//         //         keyEnabled: true,
//         //         remainingDuration: true,
//         //         toggleDuration: true
//         //     });
//         $(idSelectors.jPlayer).jPlayer({
//             ready: function () {
//                 $(idSelectors.jPlayer).jPlayer("setMedia", {
//                          title: "Big Buck Bunny Trailer",
//                          m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
//                          ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
//                          poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
//                 });
//             },
//             cssSelectorAncestor: idSelectors.cssSelectorAncestor,
//             supplied: "m4v, ogv",
//             sizeFull: {
//                 width: "300px",
//                 height: "300px",
//                 cssClass: "test"
//             },
//         });

//         // this.jPlayerPlaylist = new jPlayerPlaylist(idSelectors, [], {
//         //     playlistOptions: {
//         //         enableRemoveControls: true,
//         //         shuffleOnLoop: true,
//         //         removeTime: 0,
//         //         displayTime: 0,
//         //         addTime: 0,
//         //         shuffleTime: 0,
//         //         autoPlay: true
//         //     },
//         //     swfPath: "swfPathHere",
//         //     useStateClassSkin: true,
//         //     keyEnabled: true,
//         //     //muted: true,
//         //     loop: "off",
//         //     preload: "metadata",
//         //     error: function (e) {
//         //         console.log(e.jPlayer.error);
//         //         console.log(e.jPlayer.error.type);
//         //     },
//         //     loadstart: function () {
//         //         //var jPlayerPlaylist = this.getJplayerPlaylist();
//         //         // $("#comments-sidebar").html($("script[type='text/loading-template']").html());
//         //         // var $loading = $("#comments-sidebar").find(".loading");

//         //         // $.ajax({
//         //         //     url: jPlayerPlaylist.playlist[jPlayerPlaylist.current].comment,
//         //         //     method: "post",
//         //         //     beforeSend: function () {
//         //         //         $loading.show();
//         //         //     },
//         //         //     complete: function () {
//         //         //         $loading.hide();
//         //         //     },
//         //         //     success: function (data) {
//         //         //         $("#comments-sidebar").html(data);
//         //         //         commentsInit(footerPjPlayerPlaylistlayer.playlist[jPlayerPlaylist.current].id);
//         //         //         commentsInit();
//         //         //     }
//         //         // });
//         //     }.bind(this)        
//         // });
//     }
//     getJplayerPlaylist(){
//         return this.jPlayerPlaylist;
//     }
//     changePlaylistOrPlay(audioId, url) {
//         //If the audio the user clicked is already in the playlist then play it, else change playlists
//         var current = $.grep(this.jPlayerPlaylist.playlist, function (o, i) {
//             //Same audio
//             if (this.jPlayerPlaylist.current === i && o.id === audioId) {
//                 $(this.jPlayerPlaylist.cssSelector.jPlayer).jPlayer("play");
//                 return o;
//             }
//                 //Different audio
//             else if (o.id === audioId) {
//                 this.jPlayerPlaylist.play(i);
//                 return o;
//             }
//         }.bind(this));

//         //Audio that the user clicked on is not in the playlist
//         if (!current.length) {
//             $.post(url, {id: audioId}).success(function (data) {
//                 this.jPlayerPlaylist.setPlaylist(data);
//             }.bind(this));
//         }
//     }
// }

// const jPlayerPlaylistStore = new JPlayerPlaylistStore;

// export default jPlayerPlaylistStore;