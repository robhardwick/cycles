import jack from "./media/audio/Modern Nature & Friends - Cycles - 01 Jack Cooper (electric guitar).mp3";
import jim from "./media/audio/Modern Nature & Friends - Cycles - 02 Jim Wallis (dulcimer and drums).mp3";
import will from "./media/audio/Modern Nature & Friends - Cycles - 03 Will Young (clarinet).mp3";
import karen from "./media/audio/Modern Nature & Friends - Cycles - 04 Karen Waltuch (viola).mp3";
import andrew from "./media/audio/Modern Nature & Friends - Cycles - 05 Andrew Collberg (bass).mp3";
import izzy from "./media/audio/Modern Nature & Friends - Cycles - 06 Izzy Johnson (electric guitar).mp3";
import marcus from "./media/audio/Modern Nature & Friends - Cycles - 07 Marcus Hamblett (cornet and vibraphone).mp3";
import ryley from "./media/audio/Modern Nature & Friends - Cycles - 08 Ryley Walker (reverb electric guitar).mp3";
import kevin from "./media/audio/Modern Nature & Friends - Cycles - 09 Kevin Donahue (drums).mp3";
import jen from "./media/audio/Modern Nature & Friends - Cycles - 10 Jen Powers (dulcimer).mp3";
import matthewr from "./media/audio/Modern Nature & Friends - Cycles - 11 Matthew Rolin (acoustic guitar and chimes).mp3";
import jeff from "./media/audio/Modern Nature & Friends - Cycles - 12 Jeff Tobias (trombone).mp3";
import matthews from "./media/audio/Modern Nature & Friends - Cycles - 13 Matthew Simms (synth).mp3";
import sean from "./media/audio/Modern Nature & Friends - Cycles - 14 Sean Thompson (acoustic guitar).mp3";

const trackDefaults = {
    playing: true,
    muted: false,
    soloed: false,
    gain: 1,
    pan: 0,
}

export const tracks = {
    jack: {
        ...trackDefaults,
        title: "Jack",
        file: jack,
    },
    jim: {
        ...trackDefaults,
        title: "Jim",
        file: jim,
    },
    will: {
        ...trackDefaults,
        title: "Will",
        file: will,
    },
    karen: {
        ...trackDefaults,
        title: "Karen",
        file: karen,
    },
    andrew: {
        ...trackDefaults,
        title: "Andrew",
        file: andrew,
    },
    izzy: {
        ...trackDefaults,
        title: "Izzy",
        file: izzy,
    },
    marcus: {
        ...trackDefaults,
        title: "Marcus",
        file: marcus,
    },
    ryley: {
        ...trackDefaults,
        title: "Ryley",
        file: ryley,
    },
    kevin: {
        ...trackDefaults,
        title: "Kevin",
        file: kevin,
    },
    jen: {
        ...trackDefaults,
        title: "Jen",
        file: jen,
    },
    matthewr: {
        ...trackDefaults,
        title: "Matthew R.",
        file: matthewr,
    },
    jeff: {
        ...trackDefaults,
        title: "Jeff",
        file: jeff,
    },
    matthews: {
        ...trackDefaults,
        title: "Matthew S.",
        file: matthews,
    },
    sean: {
        ...trackDefaults,
        title: "Sean",
        file: sean,
    }
};