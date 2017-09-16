import React from 'react';
import JPlayer, {
  Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
} from 'react-jplayer';
import JPlaylist, {
  initializeOptions, Playlist, Shuffle, Next, Previous, Repeat,
  TogglePlaylist, Remove, MediaLink, Title as PlaylistTitle,
} from 'react-jplaylist';

import styles from './component.less';
import { playlistId } from '../shared/utilities/constants';

const jPlayerOptions = {
  id: playlistId,
  verticalVolume: true,
};

const jPlaylistOptions = {
  hidePlaylist: true,
};

initializeOptions(jPlayerOptions, jPlaylistOptions);

const FooterPlaylist = () => (
  <JPlaylist id={playlistId}>
    <JPlayer className={`${styles.footerPlaylist} jp-sleek`}>
      <Audio />
      <Gui>
        <div className="jp-controls jp-icon-controls">
          <Previous><i className="fa fa-step-backward" /></Previous>
          <Play><i className="fa">{/* Icon set in css */}</i></Play>
          <Next><i className="fa fa-step-forward" /></Next>
          <Repeat>
            <i className="fa">{/* Icon set in css */}</i>
            <i className="fa fa-repeat" />
          </Repeat>
          <Shuffle><i className="fa fa-random" /></Shuffle>
          <div className="jp-progress">
            <SeekBar>
              <BufferBar />
              <PlayBar />
              <CurrentTime />
              <Duration />
            </SeekBar>
          </div>
          <div className="jp-volume-container">
            <Mute>
              <i className="fa">{/* Icon set in css */}</i>
            </Mute>
            <div className="jp-volume-slider">
              <div className="jp-volume-bar-container">
                <VolumeBar />
              </div>
            </div>
          </div>
          <div className="jp-playlist-container">
            <Playlist>
              <Remove />
              <MediaLink>
                <PlaylistTitle />
              </MediaLink>
            </Playlist>
            <TogglePlaylist><i className="fa fa-ellipsis-h" /></TogglePlaylist>
          </div>
          <FullScreen><i className="fa fa-expand" /></FullScreen>
          <Download><i className="fa fa-download" /></Download>
          <div className="jp-title-container">
            <Poster />
            <Title />
          </div>
        </div>
        <BrowserUnsupported />
      </Gui>
    </JPlayer>
  </JPlaylist>
);

export default FooterPlaylist;
