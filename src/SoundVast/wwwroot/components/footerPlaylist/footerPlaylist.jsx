import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import JPlayer, {
  Gui,
  Poster, Audio, Title, FullScreen, Mute, Play,
  VolumeBar, Download, BrowserUnsupported,
} from 'react-jplayer';
import JPlaylist, {
  initializeOptions, Playlist, Shuffle, Next, Previous, Repeat,
  TogglePlaylist, Remove, MediaLink, Title as PlaylistTitle,
} from 'react-jplaylist';
import { classes } from 'react-jplayer-utils';

const jPlayerOptions = {
  id: 'FooterPlaylist',
  verticalVolume: true,
};

const jPlaylistOptions = {
  hidePlaylist: true,
};

initializeOptions(jPlayerOptions, jPlaylistOptions);

const FooterPlaylist = ({ isPlaylistEmpty }) => {
  const jPlayerClassName = classNames('jp-sleek', {
    [classes.HIDDEN]: isPlaylistEmpty,
  });

  return (
    <JPlaylist id={jPlayerOptions.id}>
      <JPlayer className={jPlayerClassName}>
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
};

FooterPlaylist.propTypes = {
  isPlaylistEmpty: PropTypes.bool.isRequired,
};

export default FooterPlaylist;
