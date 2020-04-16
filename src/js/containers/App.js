import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { enable } from "../actions";
import { Mixer } from "./Mixer";
import { Background } from "../components/Background";
import { Start } from "../components/Start";

export const App = () => {
    const enabled = useSelector(state => state.enabled);
    if (enabled) {
        return (
            <>
                <Background />
                <Mixer />
            </>
        );
    }

    const dispatch = useDispatch();
    const start = () => dispatch(enable());
    return <Start onClick={start} />;
};