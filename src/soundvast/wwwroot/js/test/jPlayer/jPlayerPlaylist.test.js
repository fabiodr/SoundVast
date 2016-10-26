import React from 'react';
import expect from "expect";
import { shallow } from 'enzyme';
import sinon from 'sinon';

import JPlayerPlaylist from "../../JPlayer/JPlayerPlaylist";

const mockjPlayerPlaylistOptions = {
    html: {
        //Toggle between play and pause in css based on playing or not
        play: <i className="fa fa-play"></i>,
        mute: <i className="fa fa-volume-up"></i>,
        fullScreen: <i className="fa fa-expand"></i>,
        repeat: <div><i className="fa fa-repeat"></i><i className="fa fa-bars"></i></div>,
        shuffle: <i className="fa fa-random"></i>,
        previous: <i className="fa fa-step-backward"></i>,
        next: <i className="fa fa-step-forward"></i>,
        playlistOptions: <div><i className="fa fa-ellipsis-h"></i><i className="fa fa-comment"></i></div>
    },
    playlist: [
        {
            title:"Cro Magnon Man",
            artist:"The Stark Palace",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
            poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png",
            free: true
        }
    ]
};

const defaultWrapper = () => shallow(<JPlayerPlaylist {...mockjPlayerPlaylistOptions} updateOptions={() => {}} />);

describe("<JPlayerPlaylist />", () => {
    it("renders a <JPlayer /> component", () => expect(defaultWrapper().find("JPlayer").length).toBe(1));
    it("renders a '#jp_container_playlist'", () => expect(defaultWrapper().find("#jp_container_playlist").length).toBe(1));
    it("renders a '.jp-playlist'", () => expect(defaultWrapper().find(".jp-playlist").length).toBe(1));
    it("renders a <Playlist /> component", () => expect(defaultWrapper().find("Playlist").length).toBe(1));
    it("renders a <Media /> component", () => expect(defaultWrapper().find("Media").length).toBe(1));
    it("renders a <Media /> component", () => expect(defaultWrapper().find("Media").length).toBe(1));
    const enableRemoveControlsTest = (enableRemoveControls) => {
        it("option: enableRemoveControls renders remove controls", () =>  {
            mockjPlayerPlaylistOptions.enableRemoveControls = enableRemoveControls;
            mockjPlayerPlaylistOptions.removeItemClass = "removeItemClassMock";

            expect(defaultWrapper().find("." + mockjPlayerPlaylistOptions.removeItemClass).length).toBe(+enableRemoveControls); 
        });
    };
    enableRemoveControlsTest(true);
    enableRemoveControlsTest(false);
});