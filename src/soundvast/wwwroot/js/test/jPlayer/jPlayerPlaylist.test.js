import React from 'react';
import expect from "expect";
import { shallow } from 'enzyme';
import sinon from 'sinon';

import JPlayerPlaylist from "../../JPlayer/JPlayerPlaylist";

const jPlayerPlaylistOptions = {
    html: {
        //Toggle between play and pause in css based on playing or not
        play: <i class="fa fa-play"></i>,
        mute: <i class="fa fa-volume-up"></i>,
        fullScreen: <i class="fa fa-expand"></i>,
        repeat: <div><i class="fa fa-repeat"></i><i class="fa fa-bars"></i></div>,
        shuffle: <i class="fa fa-random"></i>,
        previous: <i class="fa fa-step-backward"></i>,
        next: <i class="fa fa-step-forward"></i>,
        playlistOptions: <div><i class="fa fa-ellipsis-h"></i><i class="fa fa-comment"></i></div>
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

describe("<JPlayerPlaylist />", () => {
    it("renders a <JPlayer /> component", () => {
        const wrapper = shallow(<JPlayerPlaylist {...jPlayerPlaylistOptions} updateOptions={() => {}}/>);
        expect(wrapper.find("JPlayer").length).toBe(1);
    });

    it("renders a '#jp_container_playlist'", () => {
        const wrapper = shallow(<JPlayerPlaylist {...jPlayerPlaylistOptions} updateOptions={() => {}}/>);
        expect(wrapper.find('#jp_container_playlist').length).toBe(1);
    });

    // it("renders a '.jp-playlist'", () => {
    //     const wrapper = shallow(<JPlayerPlaylist {...jPlayerPlaylistOptions} updateOptions={() => {}}/>);
    //     expect(wrapper.find(".jp-playlist").length).toBe(1);
    // });

    it("renders a <Playlist /> component", () => {
        const wrapper = shallow(<JPlayerPlaylist {...jPlayerPlaylistOptions} updateOptions={() => {}}/>);
        expect(wrapper.find("Playlist").length).toBe(1);
    });

    it("renders a <Media /> component", () => {
        const wrapper = shallow(<JPlayerPlaylist {...jPlayerPlaylistOptions} updateOptions={() => {}}/>);
        expect(wrapper.find("Media").length).toBe(1);
    });
});