import React from "react";
import { useDispatch } from "react-redux";

import {
    playTrack,
    pauseTrack,
    muteTrack,
    unmuteTrack,
    soloTrack,
    unsoloTrack,
    setTrackGain,
    setTrackPan
} from "../actions";
import { Track as TrackComponent } from "../components/Track";

export const Track = ({ id, track, soloing }) => {
    const dispatch = useDispatch();
    const play = () => dispatch(playTrack(id));
    const pause = () => dispatch(pauseTrack(id));
    const setGain = (value) => dispatch(setTrackGain(id, value));
    const setPan = (value) => dispatch(setTrackPan(id, value));
    const mute = () => dispatch(muteTrack(id));
    const unmute = () => dispatch(unmuteTrack(id));
    const solo = () => dispatch(soloTrack(id));
    const unsolo = () => dispatch(unsoloTrack(id));
    return <TrackComponent play={play}
        pause={pause}
        setGain={setGain}
        setPan={setPan}
        mute={mute}
        unmute={unmute}
        solo={solo}
        unsolo={unsolo}
        soloing={soloing}
        track={track} />;
};