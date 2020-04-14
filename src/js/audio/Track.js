import { loadedTrack } from "../actions";

const RAMP_OFFSET = 0.1; // 100ms

export class Track {
    constructor(dispatch, id, data) {
        this.audio = new Audio();
        this.audio.preload = "none";
        this.audio.loop = true;
        this.audio.crossOrigin = "anonymous";
        this.audio.src = data.file;
        this.audio.addEventListener("canplay", () => {
            dispatch(loadedTrack(id));
        })
    }

    init(ctx) {
        this.ctx = ctx;

        this.audioNode = ctx.createMediaElementSource(this.audio);

        this.gainNode = ctx.createGain();
        this.gainNode.gain.value = 1;

        this.panNode = ctx.createPanner();
        this.panNode.panningModel = "equalpower";

        this.muteNode = ctx.createGain();
        this.muteNode.gain.value = 1;

        this.audioNode
            .connect(this.gainNode)
            .connect(this.panNode)
            .connect(this.muteNode);

        return this.muteNode;
    }

    play() {
        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    mute() {
        this.muteNode.gain.linearRampToValueAtTime(
            0,
            this.ctx.currentTime + RAMP_OFFSET
        );
    }

    unmute() {
        this.muteNode.gain.linearRampToValueAtTime(
            1.0,
            this.ctx.currentTime + RAMP_OFFSET
        );
    }

    gain(value) {
        this.muteNode.gain.linearRampToValueAtTime(
            value,
            this.ctx.currentTime + RAMP_OFFSET
        );
    }

    pan(value) {
        this.panNode.setPosition(value, 0, 1.0 - Math.abs(value));
    }
}