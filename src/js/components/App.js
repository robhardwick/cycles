import React, { Component } from "react";

import AudioMixer from "../audio/Mixer";

import Track from "./Track";
import Visualiser from "./Visualiser";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { mixer: false };
    }

    start = () => {
        this.setState({ mixer: new AudioMixer() });
    }

    render() {
        if (this.state.mixer) {
            return (
                <div className="app">
                    <div className="visualiser">
                        <Visualiser analyser={this.state.mixer.analyserNode}
                            width={window.innerWidth - 60}
                            height={window.innerHeight - 360} />
                    </div>
                    <div className="tracks">
                        {this.state.mixer.tracks.map((track) => {
                            return (<Track key={track.id} track={track} />);
                        })}
                    </div>
                </div>
            );
        } else {
            return (
                <button onClick={this.start}>
                    <i className="fas fa-10x fa-play-circle" />
                </button>
            )
        }
    }
}