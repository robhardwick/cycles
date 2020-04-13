import {
    ENABLE,
    PLAY_TRACK,
    PAUSE_TRACK,
    SET_TRACK_GAIN,
    SET_TRACK_PAN
} from "../actions/types";
import { setAnalyser } from "../actions";
import { Mixer } from "./Mixer";

export const audioMiddleware = store => {
    const mixer = new Mixer(store.getState().tracks);

    return next => action => {
        switch (action.type) {
            case ENABLE:
                mixer.start();
                store.dispatch(setAnalyser(mixer.analyserNode))
                break;
            case PLAY_TRACK:
                mixer.playTrack(action.id);
                break;
            case PAUSE_TRACK:
                mixer.pauseTrack(action.id);
                break;
            case SET_TRACK_GAIN:
                mixer.setTrackGain(action.id, action.value);
                break;
            case SET_TRACK_PAN:
                mixer.setTrackPan(action.id, action.value);
                break;
            default:
                break;
        }
        next(action);
    }
};