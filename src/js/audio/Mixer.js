import { Track } from "./Track";

export class Mixer {
    constructor(dispatch, tracks) {
        this.tracks = Object.assign(
            {},
            ...Object.keys(tracks)
                .map(id => ({ [id]: new Track(dispatch, id, tracks[id]) }))
        );
    }

    start(state) {
        let AudioContext = window.AudioContext || window.webkitAudioContext;
        let ctx = new AudioContext();

        this.analyserNode = ctx.createAnalyser();
        this.analyserNode.connect(ctx.destination);

        for (const id in this.tracks) {
            this.tracks[id].init(ctx).connect(this.analyserNode);
            if (state[id].playing) {
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