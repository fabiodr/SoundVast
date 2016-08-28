// import React from "react";
// import jPlayerPlaylist from "../../extended/jplayer.playlist";
// import JPlayerPlaylistStore from "../../stores/JPlayerPlaylistStore";

// export default class JPlayerPlaylist extends React.Component {
//     constructor(props){
//         super();

//         this.changeRepeatIcon = this.changeRepeatIcon.bind(this);
//         this.changeShuffleIcon = this.changeShuffleIcon.bind(this);
//         this.changeVolumeIcon = this.changeVolumeIcon.bind(this);

//         this.state = { 
//             selectors: {
//                 jPlayer: props.jPlayer,
//                 cssSelectorAncestor: props.cssSelectorAncestor,
//                 cssPlaylistOptionsSelector: props.cssPlaylistOptionsSelector
//             }
//         };   
//     }
//     componentDidMount (){
//         JPlayerPlaylistStore.loadjPlayerPlaylist(this.state.selectors);
//         this.selectorsAreRendered();
//         this.setState({jPlayerPlaylist: JPlayerPlaylistStore.getJplayerPlaylist()});

//         $(this.state.selectors.jPlayer).on($.jPlayer.event.ready, function(){
//             this.changeRepeatIcon();
//             this.changeShuffleIcon();
//             this.changeVolumeIcon();
//             //$(".jp-playlist-options .fa-ellipsis-h").click();
//             //$(".jp-playlist-options .fa-comment").click();
//         }.bind(this));
        
//         $(this.state.selectors.jPlayer).on($.jPlayer.event.volumechange, function(){
//             this.changeVolumeIcon();
//         }.bind(this));
//     } 
//     selectorsAreRendered(){
//         for (var key in this.state.selectors) {
//             var selector = this.state.selectors[key];
            
//             if ($(selector).length <= 0) {
//                 console.error("The html for selector `" + selector + " has not been rendered. Please include the relevent html on your page somewhere.");
//             }
//         }
//     }
//     changeRepeatIcon(){
//         // if (this.state.jPlayerPlaylist.loop === "loop") {
//         //     this.setState({repeatClass: "fa fa-repeat clicked-button"});
//         // } else if (this.state.jPlayerPlaylist.loop === "loop-playlist") {
//         //     this.setState({faBarsDisplay: "initial"});
//         // }
//         // else {
//         //     this.setState({repeatClass: "fa fa-repeat"});
//         //     this.setState({faBarsDisplay: "none"});
//         // }
//     }
//     changeShuffleIcon(){
//         // if (this.state.jPlayerPlaylist.shuffled) {
//         //     this.setState({shuffleClass: "fa fa-random clicked-button"});
//         // } else {
//         //     this.setState({shuffleClass: "fa fa-random"});
//         // }
//     }
//     changeVolumeIcon(){
//         // var jPlayer = $(this.state.selectors.jPlayer).data().jPlayer;
//         // var volumeValue = jPlayer.options.volume;
//         // var muted = jPlayer.options.muted;

//         // if (muted || volumeValue <= 0) {
//         //     this.setState({volumeClass: "fa fa-volume-off"});
//         // } else if (volumeValue < 0.5) {
//         //     this.setState({volumeClass: "fa fa-volume-down"});
//         // } else {
//         //     this.setState({volumeClass: "fa fa-volume-up"});
//         // }
//     }
//     destroyd(){
//         $("#jquery_jplayer_footer_player").jPlayer("destroy");
//     }
//     render () {
//         return (
//         <div>      
//             <div id={this.props.jPlayer.slice(1)} class="jp-jplayer" />
//             <div id={this.props.cssSelectorAncestor.slice(1)} class="jp-audio">
//                 <div class={this.props.jpType}>
//                     <div class="jp-controls">                        
//                         <a class="jp-play">
//                             <i class="fa fa-play"></i>
//                         </a>
//                         <a class="jp-pause" onClick={this.destroyd}>
//                             <i class="fa fa-pause"></i>
//                         </a>
//                         <a class="jp-mute">
//                             <i class={this.state.volumeClass} onClick={this.changeVolumeIcon}></i>
//                         </a>
//                         <a class="jp-repeat">
//                             <i class="fa fa-bars" style={{display: this.state.faBarsDisplay}}></i>
//                             <i class={this.state.repeatClass} onClick={this.changeRepeatIcon}></i>
//                         </a>
//                         <a class="jp-shuffle">
//                             <i class={this.state.shuffleClass} onClick={this.changeShuffleIcon}></i>
//                         </a>
//                         <a class="jp-previous">
//                             <i class="fa fa-step-backward"></i>
//                         </a>
//                         <a class="jp-next">
//                             <i class="fa fa-step-forward"></i>
//                         </a>
//                         <a class="jp-full-screen">
//                             testt
//                         </a>        
//                         <div class="jp-volume-bar">
//                             <div class="jp-volume-bar-value"></div>
//                         </div>
//                         <a class="jp-playlist-options">
//                             <i class="fa fa-ellipsis-h"></i>
//                             <i class="fa fa-comment"></i>
//                         </a>
//                     </div>
//                     <div class="jp-progress">
//                         <div class="jp-seek-bar">
//                             <div class="jp-play-bar"></div>
//                             <div class="jp-current-time"></div>
//                             <div class="jp-duration"></div>
//                         </div>
//                     </div>
//                     <div class="jp-no-solution">
//                         Media Player Error
//                         <br />
//                         Update your browser or Flash plugin
//                     </div>
//                 </div>
//             </div>
//         </div>
//         );
//     }
// }

// JPlayerPlaylist.defaultProps = {
//     jPlayer: "#jquery_jplayer_1",
//     cssSelectorAncestor: "#jp_container_1",
//     cssPlaylistOptionsSelector: "#jp_container_playlist"
// };

// let selectorIsStringId = createChainableTypeValidator(selectorIsStringIdValidator);

// JPlayerPlaylist.propTypes = {
//    playlist: React.PropTypes.arrayOf(React.PropTypes.shape({
//        mp3: React.PropTypes.string.isRequired
//    })),
//    jPlayer: selectorIsStringId,
//    cssSelectorAncestor: selectorIsStringId,
//    cssPlaylistOptionsSelector: selectorIsStringId
// };

// function selectorIsStringIdValidator(props, propName, componentName) {
//     if (!/^#/.test(props[propName])) {
//         return new Error(
//             "Invalid selector `" + propName + "' supplied to `" + componentName + "'. " + "Selector must be an id."
//         );
//     }
// }

// function createChainableTypeValidator(validate) {  
//   function checkTypeValidator(isRequired, props, propName, componentName, location) { 
//     if (props[propName] == null) {
//       if (isRequired) {
//         return new Error(
//           ("Required " + location + " `" + propName + "` was not specified in ") +
//           ("`" + componentName + "`.")
//         );
//       }
//       return null;
//     } else {
//       return validate(props, propName, componentName, location);
//     }
//   }

//   var chainedCheckType = checkTypeValidator.bind(null, false);
//   chainedCheckType.isRequired = checkTypeValidator.bind(null, true);

//   return chainedCheckType;
// }