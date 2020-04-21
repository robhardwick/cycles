import {
    ENABLE,
    PLAY_TRACK,
    PAUSE_TRACK,
    MUTE_TRACK,
    UNMUTE_TRACK,
    SOLO_TRACK,
    UNSOLO_TRACK,
    SET_TRACK_GAIN,
    SET_TRACK_PAN
} from "../actions/types";
import { Mixer } from "./Mixer";

// Don't use Web Audio API on iOS
const ua = window.navigator.userAgent;
const iOSSafari = (
    (!!ua.match(/iPad/i) || !!ua.match(/iPhone/i)) &&
    !!ua.match(/WebKit/i) &&
    !ua.match(/CriOS/i)
);
const webAudio = !iOSSafari;

export const audioMiddleware = ({ getState, dispatch }) => {
    let mixer = null;

    return next => action => {
        next(action);
        switch (action.type) {
            case ENABLE:
                mixer = new Mixer(dispatch, getState().tracks, webAudio);
                break;
            case PLAY_TRACK:
                mixer.playTrack(action.id);
                break;
            case PAUSE_TRACK:
                mixer.pauseTrack(action.id);
                break;
            case MUTE_TRACK:
            case UNMUTE_TRACK:
            case SOLO_TRACK:
            case UNSOLO_TRACK:
                const tracks = getState().tracks;
                mixer.muteTracks(
                    Object.keys(tracks)
                        .map(id => ({
                            soloed: tracks[id].soloed,
                            muted: tracks[id].muted,
                            id,
                        }))
                );
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
    }
};