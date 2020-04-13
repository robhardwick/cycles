import { combineReducers } from "redux";

import {
    ENABLE,
    SET_ANALYSER,
    PLAY_TRACK,
    PAUSE_TRACK,
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
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    playing: true
                }
            };
        case PAUSE_TRACK:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    playing: false
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