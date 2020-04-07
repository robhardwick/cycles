import AudioTrack from "./Track";
import tracks from "./tracks";

export default class AudioMixer {
    constructor() {
        let AudioContext = window.AudioContext || window.webkitAudioContext;
        let ctx = new AudioContext();
        this.tracks = tracks.map((track) => new AudioTrack(ctx, track));

        this.analyserNode = ctx.createAnalyser();
        this.tracks.forEach(track => {
            track.output.connect(this.analyserNode);
        });
        this.analyserNode.connect(ctx.destination);
    }
}
