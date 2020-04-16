import jack_webm from "./media/audio/Modern Nature & Friends - Cycles - 01 Jack Cooper (electric guitar).webm";
import jack_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 01 Jack Cooper (electric guitar).mp3";
import jim_webm from "./media/audio/Modern Nature & Friends - Cycles - 02 Jim Wallis (dulcimer and drums).webm";
import jim_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 02 Jim Wallis (dulcimer and drums).mp3";
import will_webm from "./media/audio/Modern Nature & Friends - Cycles - 03 Will Young (clarinet).webm";
import will_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 03 Will Young (clarinet).mp3";
import karen_webm from "./media/audio/Modern Nature & Friends - Cycles - 04 Karen Waltuch (viola).webm";
import karen_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 04 Karen Waltuch (viola).mp3";
import andrew_webm from "./media/audio/Modern Nature & Friends - Cycles - 05 Andrew Collberg (bass).webm";
import andrew_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 05 Andrew Collberg (bass).mp3";
import izzy_webm from "./media/audio/Modern Nature & Friends - Cycles - 06 Izzy Johnson (electric guitar).webm";
import izzy_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 06 Izzy Johnson (electric guitar).mp3";
import marcus_webm from "./media/audio/Modern Nature & Friends - Cycles - 07 Marcus Hamblett (cornet and vibraphone).webm";
import marcus_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 07 Marcus Hamblett (cornet and vibraphone).mp3";
import ryley_webm from "./media/audio/Modern Nature & Friends - Cycles - 08 Ryley Walker (reverb electric guitar).webm";
import ryley_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 08 Ryley Walker (reverb electric guitar).mp3";
import kevin_webm from "./media/audio/Modern Nature & Friends - Cycles - 09 Kevin Donahue (drums).webm";
import kevin_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 09 Kevin Donahue (drums).mp3";
import jen_webm from "./media/audio/Modern Nature & Friends - Cycles - 10 Jen Powers (dulcimer).webm";
import jen_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 10 Jen Powers (dulcimer).mp3";
import matthewr_webm from "./media/audio/Modern Nature & Friends - Cycles - 11 Matthew Rolin (acoustic guitar and chimes).webm";
import matthewr_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 11 Matthew Rolin (acoustic guitar and chimes).mp3";
import jeff_webm from "./media/audio/Modern Nature & Friends - Cycles - 12 Jeff Tobias (trombone).webm";
import jeff_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 12 Jeff Tobias (trombone).mp3";
import matthews_webm from "./media/audio/Modern Nature & Friends - Cycles - 13 Matthew Simms (synth).webm";
import matthews_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 13 Matthew Simms (synth).mp3";
import sean_webm from "./media/audio/Modern Nature & Friends - Cycles - 14 Sean Thompson (acoustic guitar).webm";
import sean_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 14 Sean Thompson (acoustic guitar).mp3";

const trackDefaults = {
    loading: true,
    playing: false,
    muted: false,
    soloed: false,
    gain: 1,
    pan: 0,
}

const tracks = {
    jack: {
        ...trackDefaults,
        title: "Jack",
        files: {
            webm: jack_webm,
            mp3: jack_mp3,
        },
    },
    jim: {
        ...trackDefaults,
        title: "Jim",
        files: {
            webm: jim_webm,
            mp3: jim_mp3,
        },
    },
    will: {
        ...trackDefaults,
        title: "Will",
        files: {
            webm: will_webm,
            mp3: will_mp3,
        },
    },
    karen: {
        ...trackDefaults,
        title: "Karen",
        files: {
            webm: karen_webm,
            mp3: karen_mp3,
        },
    },
    andrew: {
        ...trackDefaults,
        title: "Andrew",
        files: {
            webm: andrew_webm,
            mp3: andrew_mp3,
        },
    },
    izzy: {
        ...trackDefaults,
        title: "Izzy",
        files: {
            webm: izzy_webm,
            mp3: izzy_mp3,
        },
    },
    marcus: {
        ...trackDefaults,
        title: "Marcus",
        files: {
            webm: marcus_webm,
            mp3: marcus_mp3,
        },
    },
    ryley: {
        ...trackDefaults,
        title: "Ryley",
        files: {
            webm: ryley_webm,
            mp3: ryley_mp3,
        },
    },
    kevin: {
        ...trackDefaults,
        title: "Kevin",
        files: {
            webm: kevin_webm,
            mp3: kevin_mp3,
        },
    },
    jen: {
        ...trackDefaults,
        title: "Jen",
        files: {
            webm: jen_webm,
            mp3: jen_mp3,
        },
    },
    matthewr: {
        ...trackDefaults,
        title: "Matthew R.",
        files: {
            webm: matthewr_webm,
            mp3: matthewr_mp3,
        },
    },
    jeff: {
        ...trackDefaults,
        title: "Jeff",
        files: {
            webm: jeff_webm,
            mp3: jeff_mp3,
        },
    },
    matthews: {
        ...trackDefaults,
        title: "Matthew S.",
        files: {
            webm: matthews_webm,
            mp3: matthews_mp3,
        },
    },
    sean: {
        ...trackDefaults,
        title: "Sean",
        files: {
            webm: sean_webm,
            mp3: sean_mp3,
        },
    }
};

// Randomly select half of the tracks to autoplay
const EXCLUDE = ["ryley"];
const IDs = Object.keys(tracks);
const NUMBER = IDs.length / 2;
const autoPlay = IDs.filter(id => !(EXCLUDE.includes(id)))
    .sort(() => 0.5 - Math.random())
    .slice(0, NUMBER);

for (const id of autoPlay) {
    tracks[id].playing = true;
}

export { tracks };