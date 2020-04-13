import React from "react";
import { useSelector } from "react-redux";

import { Visualiser } from "../components/Visualiser";
import { Track } from "./Track";

export const Mixer = () => {
    const analyser = useSelector(state => state.analyser);
    const tracks = useSelector(state => state.tracks);
    return (
        <>
            <div className="visualiser">
                <Visualiser analyser={analyser}
                    width={window.innerWidth - 60}
                    height={window.innerHeight - 360} />
            </div>
            <div className="tracks">
                {Object.keys(tracks)
                    .sort()
                    .map(function (id) {
                        return (<Track key={id} id={id} track={tracks[id]} />)
                    })}
            </div>
        </>
    );
};