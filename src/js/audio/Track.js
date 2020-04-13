export class Track {
    constructor(data) {
        this.audio = new Audio();
        this.audio.preload = "none";
        this.audio.loop = true;
        this.audio.crossOrigin = "anonymous";
        this.audio.src = data.file;
    }

    init(ctx) {
        this.ctx = ctx;

        this.audioNode = ctx.createMediaElementSource(this.audio);

        this.gainNode = ctx.createGain();
        this.gainNode.gain.value = 1;

        this.panNode = ctx.createPanner();
        this.panNode.panningModel = "equalpower";

        this.audioNode
            .connect(this.gainNode)
            .connect(this.panNode);

        return this.panNode;
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
        this.panNode.setPosition(value, 0, 1 - Math.abs(value));
    }
}