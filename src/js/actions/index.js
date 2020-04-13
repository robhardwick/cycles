import {
    ENABLE,
    SET_ANALYSER,
    PLAY_TRACK,
    PAUSE_TRACK,
    SET_TRACK_GAIN,
    SET_TRACK_PAN,
} from "./types";

export const enable = () => ({
    type: ENABLE
});

export const setAnalyser = analyser => ({
    type: SET_ANALYSER,
    analyser
});

export const playTrack = id => ({
    type: PLAY_TRACK,
    id
});

export const pauseTrack = id => ({
    type: PAUSE_TRACK,
    id
});

export const setTrackGain = (id, value) => ({
    type: SET_TRACK_GAIN,
    id,
    value
});

export const setTrackPan = (id, value) => ({
    type: SET_TRACK_PAN,
    id,
    value
});