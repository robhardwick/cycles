import React, { Component } from "react";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const sliderTrackStyle = {
    backgroundColor: "black"
};
const sliderHandleStyle = {
    border: "2px solid black"
};

export const Track = ({ play, pause, setGain, setPan, track }) => (
    <div className="track">
        <div className="track-controls">
            <h1>{track.title}</h1>
            <div className="gain">
                <Slider value={track.gain}
                    onChange={setGain}
                    min={0}
                    max={2}
                    step={0.05}
                    vertical={true}
                    trackStyle={sliderTrackStyle}
                    handleStyle={sliderHandleStyle}
                    style={{
                        height: "100px",
                    }} />
            </div>
            <div className="pan">
                <Slider value={track.pan}
                    onChange={setPan}
                    min={-1}
                    max={1}
                    step={0.05}
                    trackStyle={sliderTrackStyle}
                    handleStyle={sliderHandleStyle}
                    style={{
                        width: "80%",
                    }} />
            </div>
            <div className="play">
                <button onClick={track.playing ? pause : play} key={track.playing}>
                    <i className={`fas fa-3x fa-${track.playing ? "pause" : "play"}-circle`} />
                </button>
            </div>
        </div>
    </div >
);