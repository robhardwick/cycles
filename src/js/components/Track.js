import React, { Component } from "react";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const sliderTrackStyle = {
    backgroundColor: "black"
};
const sliderHandleStyle = {
    border: "2px solid black"
};

export default class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: true,
            gain: 1,
            pan: 0,
        };
    }

    play = () => {
        if (this.state.playing) {
            this.props.track.pause();
        } else {
            this.props.track.play();
        }
        this.setState(state => ({
            playing: !state.playing
        }));
    }

    gain = (value) => {
        this.props.track.gain(value);
        this.setState({ gain: value });
    }

    pan = (value) => {
        this.props.track.pan(value);
        this.setState({ pan: value });
    }

    render() {
        return (
            <div className="track">
                <div className="track-controls">
                    <h1>{this.props.track.title}</h1>
                    <div className="gain">
                        <Slider value={this.state.gain}
                            onChange={this.gain}
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
                        <Slider value={this.state.pan}
                            onChange={this.pan}
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
                        <button onClick={this.play} key={this.state.playing}>
                            <i className={`fas fa-3x fa-${this.state.playing ? "pause" : "play"}-circle`} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}