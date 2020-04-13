import {
    ENABLE,
    SET_ANALYSER,
    PLAY_TRACK,
    PAUSE_TRACK,
    MUTE_TRACK,
    UNMUTE_TRACK,
    SOLO_TRACK,
    UNSOLO_TRACK,
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

export const muteTrack = id => ({
    type: MUTE_TRACK,
    id
});

export const unmuteTrack = id => ({
    type: UNMUTE_TRACK,
    id
});

export const soloTrack = id => ({
    type: SOLO_TRACK,
    id
});

export const unsoloTrack = id => ({
    type: UNSOLO_TRACK,
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