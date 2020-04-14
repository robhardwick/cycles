import React, { Component } from "react";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const sliderTrackStyle = {
    backgroundColor: "black"
};
const sliderHandleStyle = {
    border: "2px solid black"
};

export const Track = ({
    play,
    pause,
    setGain,
    setPan,
    mute,
    unmute,
    solo,
    unsolo,
    soloing,
    track
}) => (
        <div className="track">
            <div className="track-controls">
                <h1>{track.title}</h1>
                <div className="gain">
                    <Slider value={track.gain}
                        onChange={setGain}
                        disabled={track.loading}
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
                        disabled={track.loading}
                        min={-1}
                        max={1}
                        step={0.05}
                        trackStyle={sliderTrackStyle}
                        handleStyle={sliderHandleStyle}
                        style={{
                            width: "80%",
                        }} />
                </div>
                <div className="muting">
                    <button className={track.muted ? 'active' : ''}
                        disabled={soloing || track.loading}
                        onClick={track.muted ? unmute : mute}>
                        M
                    </button>
                    <button className={track.soloed ? 'active' : ''}
                        disabled={track.loading}
                        onClick={track.soloed ? unsolo : solo}>
                        S
                    </button>
                </div>
                {track.loading ?
                    <div className="loading" key={track.loading}>
                        <i className="fas fa-2x fa-spinner fa-pulse"></i>
                    </div>
                    :
                    <div className="play">
                        <button onClick={track.playing ? pause : play} key={track.playing}>
                            <i className={`fas fa-3x fa-${track.playing ? "pause" : "play"}-circle`} />
                        </button>
                    </div>
                }
            </div>
        </div >
    );