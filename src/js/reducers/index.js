import { combineReducers } from "redux";

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
} from "../actions/types";

const enabled = (state = false, action) => {
    if (action.type === ENABLE) {
        return true;
    }
    return state;
}

const analyser = (state = null, action) => {
    if (action.type === SET_ANALYSER) {
        return action.analyser;
    }
    return state;
}

const tracks = (state = {}, action) => {
    switch (action.type) {
        case PLAY_TRACK:
        case PAUSE_TRACK:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    playing: action.type == PLAY_TRACK
                }
            };
        case MUTE_TRACK:
        case UNMUTE_TRACK:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    muted: action.type == MUTE_TRACK
                }
            };
        case SOLO_TRACK:
        case UNSOLO_TRACK:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    soloed: action.type == SOLO_TRACK
                }
            };
        case SET_TRACK_GAIN:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    gain: action.value
                }
            };
        case SET_TRACK_PAN:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    pan: action.value
                }
            };
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    enabled,
    analyser,
    tracks,
})