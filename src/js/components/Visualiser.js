import React, { Component } from "react";

export default class Visualiser extends Component {
    constructor(props) {
        super(props)
        this.props.analyser.fftSize = 1024;
        this.bufferLength = this.props.analyser.frequencyBinCount;
        this.dataArray = new Uint8Array(this.bufferLength);
        this.sliceWidth = this.props.width * 1.0 / this.bufferLength;
    }

    componentDidMount() {
        if (!this._frameId) {
            this._frameId = window.requestAnimationFrame(this.paint);
        }
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this._frameId);
    }

    paint = () => {
        const context = this.refs.canvas.getContext('2d');
        context.clearRect(0, 0, this.props.width, this.props.height);

        context.lineWidth = 2;
        context.strokeStyle = 'rgb(0, 0, 0)';
        context.beginPath();

        this.props.analyser.getByteTimeDomainData(this.dataArray);

        for (let i = 0, x = 0; i < this.bufferLength; i++, x += this.sliceWidth) {
            const y = (this.dataArray[i] / 128.0) * (this.props.height / 2);

            if (i === 0) {
                context.moveTo(x, y);
            } else {
                context.lineTo(x, y);
            }
        }

        context.lineTo(this.props.width, this.props.height / 2);
        context.stroke();

        this._frameId = window.requestAnimationFrame(this.paint);
    }

    render() {
        return (
            <canvas ref="canvas"
                width={this.props.width}
                height={this.props.height} />
        );
    }
}