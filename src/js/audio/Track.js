import { loadedTrack } from "../actions";

const RAMP_OFFSET = 0.1; // 100ms

export class Track {
    constructor(ctx, dispatch, id, data, destination, webAudio) {
        this.ctx = ctx;
        this.webAudio = webAudio;

        this.audio = new Audio();
        this.audio.preload = "none";
        this.audio.loop = true;
        this.audio.crossOrigin = "anonymous";
        if (this.audio.canPlayType('audio/webm; codecs="opus"')) {
            this.audio.src = data.files.webm;
        } else {
            this.audio.src = data.files.mp3;
        }
        this.audio.addEventListener("canplay", () => {
            dispatch(loadedTrack(id));
        })

        if (webAudio) {
            this.audioNode = this.ctx.createMediaElementSource(this.audio);

            this.gainNode = this.ctx.createGain();
            this.gainNode.gain.value = 1;

            this.panNode = this.ctx.createPanner();
            this.panNode.panningModel = "equalpower";

            this.muteNode = this.ctx.createGain();
            this.muteNode.gain.value = 1;

            this.audioNode
                .connect(this.gainNode)
                .connect(this.panNode)
                .connect(this.muteNode)
                .connect(destination);
        }
    }

    load() {
        try {
            this.audio.load();
        } catch (e) {
            console.error('load error', e);
        }
    }

    play() {
        try {
            this.audio.play();
        } catch (e) {
            console.error('play error', e);
        }
    }

    pause() {
        try {
            this.audio.pause();
        } catch (e) {
            console.error('pause error', e);
        }
    }

    mute() {
        if (this.webAudio) {
            this.muteNode.gain.linearRampToValueAtTime(
                0,
                this.ctx.currentTime + RAMP_OFFSET
            );
        } else {
            this.pause();
        }
    }

    unmute() {
        if (this.webAudio) {
            this.muteNode.gain.linearRampToValueAtTime(
                1.0,
                this.ctx.currentTime + RAMP_OFFSET
            );
        } else {
            this.play();
        }
    }

    gain(value) {
        if (this.webAudio) {
            this.muteNode.gain.linearRampToValueAtTime(
                value,
                this.ctx.currentTime + RAMP_OFFSET
            );
        } else {
            this.audio.volume = value;
        }
    }

    pan(value) {
        if (this.webAudio) {
            this.panNode.setPosition(value, 0, 1.0 - Math.abs(value));
        }
    }
}