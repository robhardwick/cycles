import React, { useState, useLayoutEffect, useRef, useEffect } from "react";

const getPixelRatio = context => {
    var backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;
    return (window.devicePixelRatio || 1) / backingStore;
};

const useWindowSize = (offsetX, offsetY) => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth - offsetX, window.innerHeight - offsetY]);
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
};

export const Visualiser = ({ analyser, offsetX, offsetY }) => {
    const [width, height] = useWindowSize(offsetX, offsetY);
    let ref = useRef();

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    let dataArray = new Uint8Array(bufferLength);

    useEffect(() => {
        let canvas = ref.current;
        let context = canvas.getContext('2d');
        let ratio = getPixelRatio(context);

        const trueWidth = width * ratio;
        const trueHeight = height * ratio;
        const sliceWidth = trueWidth / bufferLength;

        canvas.width = trueWidth;
        canvas.height = trueHeight;

        context.lineWidth = 3;
        context.strokeStyle = 'rgb(0, 0, 0)';

        let requestId;
        const render = (timestamp) => {
            analyser.getByteTimeDomainData(dataArray);

            context.clearRect(0, 0, trueWidth, trueHeight);
            context.beginPath();

            for (let i = 0, x = 0; i < bufferLength; i++, x += sliceWidth) {
                const y = (dataArray[i] / 255) * trueHeight;

                if (i === 0) {
                    context.moveTo(x, y);
                } else {
                    context.lineTo(x, y);
                }
            }

            context.stroke();

            requestId = requestAnimationFrame(render)
        };

        render();

        return () => {
            cancelAnimationFrame(requestId);
        };
    });

    return (
        <canvas ref={ref}
            style={{
                width: `${width}px`,
                height: `${height}px`
            }} />
    );
};