import React from "react";
import { useSelector } from "react-redux";

import { Visualiser } from "../components/Visualiser";
import { Donate } from "../components/Donate";
import { Track } from "./Track";

export const Mixer = () => {
    const analyser = useSelector(state => state.analyser);
    const tracks = useSelector(state => state.tracks);
    const soloing = Object.keys(tracks).some(id => tracks[id].soloed);
    return (
        <>
            <div className="visualiser">
                <Visualiser analyser={analyser}
                    width={window.innerWidth - 40}
                    height={window.innerHeight - 360} />
            </div>
            <div className="tracks">
                {Object.keys(tracks)
                    .sort()
                    .map(function (id) {
                        return (<Track key={id}
                            soloing={soloing}
                            id={id}
                            track={tracks[id]} />)
                    })}
            </div>
            <Donate />
        </>
    );
};