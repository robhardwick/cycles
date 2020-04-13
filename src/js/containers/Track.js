import React from "react";
import { useDispatch } from "react-redux";

import { playTrack, pauseTrack, setTrackGain, setTrackPan } from "../actions";
import { Track as TrackComponent } from "../components/Track";

export const Track = ({ id, track }) => {
    const dispatch = useDispatch();
    const play = () => dispatch(playTrack(id));
    const pause = () => dispatch(pauseTrack(id));
    const setGain = (value) => dispatch(setTrackGain(id, value));
    const setPan = (value) => dispatch(setTrackPan(id, value));
    return <TrackComponent play={play}
        pause={pause}
        setGain={setGain}
        setPan={setPan}
        track={track} />;
};