export default class AudioTrack {
    constructor(ctx, data) {
        this.ctx = ctx;

        this.id = data.id;
        this.title = data.title;

        this.audio = new Audio();
        this.audio.preload = "none";
        this.audio.loop = true;
        this.audio.crossOrigin = "anonymous";
        this.audio.src = data.file;
        this.audioNode = ctx.createMediaElementSource(this.audio);

        this.gainNode = ctx.createGain();
        this.gainNode.gain.value = 1;

        this.output = ctx.createPanner();
        this.output.panningModel = "equalpower";

        this.audioNode
            .connect(this.gainNode)
            .connect(this.output)

        this.audio.play();
    }

    play() {
        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    gain(value) {
        this.gainNode.gain.setValueAtTime(value, this.ctx.currentTime);
    }

    pan(value) {
        this.output.setPosition(value, 0, 1 - Math.abs(value));
    }
}