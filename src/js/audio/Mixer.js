import { AudioContext } from 'standardized-audio-context';

import { setAnalyser } from "../actions";
import { Track } from "./Track";

export class Mixer {
    constructor(dispatch, tracks, webAudio) {
        if (webAudio) {
            this.ctx = new AudioContext();
            this.ctx.resume();

            this.analyserNode = this.ctx.createAnalyser();
            this.analyserNode.connect(this.ctx.destination);
            dispatch(setAnalyser(this.analyserNode))
        }

        this.tracks = Object.assign(
            {},
            ...Object.keys(tracks)
                .map(id => ({
                    [id]: new Track(
                        this.ctx,
                        dispatch,
                        id,
                        tracks[id],
                        this.analyserNode,
                        webAudio
                    )
                }))
        );

        for (const id in this.tracks) {
            if (tracks[id].playing) {
                this.tracks[id].play();
            } else {
                this.tracks[id].load();
            }
        }
    }

    playTrack(id) {
        this.tracks[id].play();
    }

    pauseTrack(id) {
        this.tracks[id].pause();
    }

    setTrackGain(id, value) {
        this.tracks[id].gain(value);
    }

    setTrackPan(id, value) {
        this.tracks[id].pan(value);
    }

    muteTracks(state) {
        let soloing = state.some(track => track.soloed);
        for (const track of state) {
            if ((soloing && track.soloed) || (!soloing && !track.muted)) {
                this.tracks[track.id].unmute();
            } else {
                this.tracks[track.id].mute();
            }
        }
    }
}