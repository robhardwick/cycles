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
import craven_webm from "./media/audio/Modern Nature & Friends - Cycles - 18 Craven Faults (Farfisa organ through modular synth with Revox tape echo).webm";
import craven_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 18 Craven Faults (Farfisa organ through modular synth with Revox tape echo).mp3";
import hollow_webm from "./media/audio/Modern Nature & Friends - Cycles - 19 Hollow Hand (Prophet 5 synth).webm";
import hollow_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 19 Hollow Hand (Prophet 5 synth).mp3";
import rich_webm from "./media/audio/Modern Nature & Friends - Cycles - 20 Rich Ruth (synths).webm";
import rich_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 20 Rich Ruth (synths).mp3";
import linus_webm from "./media/audio/Modern Nature & Friends - Cycles - 21 Linus Fenton (bass).webm";
import linus_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 21 Linus Fenton (bass).mp3";
import zebedee_webm from "./media/audio/Modern Nature & Friends - Cycles - 22 Zebedee C. Budworth (dulcimer).webm";
import zebedee_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 22 Zebedee C. Budworth (dulcimer).mp3";
import jimn_webm from "./media/audio/Modern Nature & Friends - Cycles - 23 Jim Noir (synths).webm";
import jimn_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 23 Jim Noir (synths).mp3";
import mary_webm from "./media/audio/Modern Nature & Friends - Cycles - 24 Mary Erskine (field recordings).webm";
import mary_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 24 Mary Erskine (field recordings).mp3";
import wills_webm from "./media/audio/Modern Nature & Friends - Cycles - 25 Will Stratton (piano).webm";
import wills_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 25 Will Stratton (piano).mp3";
import isabel_webm from "./media/audio/Modern Nature & Friends - Cycles - 26 Isabel Sörling (voice and fx).webm";
import isabel_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 26 Isabel Sörling (voice and fx).mp3";
import liam_webm from "./media/audio/Modern Nature & Friends - Cycles - 27 Liam Ogburn (bass).webm";
import liam_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 27 Liam Ogburn (bass).mp3";
import sebastian_webm from "./media/audio/Modern Nature & Friends - Cycles - 28 Sebastian Westwood (acoustic guitar).webm";
import sebastian_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 28 Sebastian Westwood (acoustic guitar).mp3";
import oli_webm from "./media/audio/Modern Nature & Friends - Cycles - 29 Oli Burslem (electric guitar).webm";
import oli_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 29 Oli Burslem (electric guitar).mp3";
import jonathan_webm from "./media/audio/Modern Nature & Friends - Cycles - 30 Jonathan Schenke (MS-20 and voice).webm";
import jonathan_mp3 from "./media/audio/Modern Nature & Friends - Cycles - 30 Jonathan Schenke (MS-20 and voice).mp3";


const trackDefaults = {
    loading: true,
    playing: true,
    muted: true,
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
        title: "Jim W.",
        files: {
            webm: jim_webm,
            mp3: jim_mp3,
        },
    },
    will: {
        ...trackDefaults,
        title: "Will Y.",
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
    },
    craven: {
        ...trackDefaults,
        title: "Craven Faults",
        files: {
            webm: craven_webm,
            mp3: craven_mp3,
        },
    },
    hollow: {
        ...trackDefaults,
        title: "Hollow Hand",
        files: {
            webm: hollow_webm,
            mp3: hollow_mp3,
        },
    },
    rich: {
        ...trackDefaults,
        title: "Rich",
        files: {
            webm: rich_webm,
            mp3: rich_mp3,
        },
    },
    linus: {
        ...trackDefaults,
        title: "Linus",
        files: {
            webm: linus_webm,
            mp3: linus_mp3,
        },
    },
    zebedee: {
        ...trackDefaults,
        title: "Zebedee",
        files: {
            webm: zebedee_webm,
            mp3: zebedee_mp3,
        },
    },
    jimn: {
        ...trackDefaults,
        title: "Jim N.",
        files: {
            webm: jimn_webm,
            mp3: jimn_mp3,
        },
    },
    mary: {
        ...trackDefaults,
        title: "Mary",
        files: {
            webm: mary_webm,
            mp3: mary_mp3,
        },
    },
    wills: {
        ...trackDefaults,
        title: "Will S.",
        files: {
            webm: wills_webm,
            mp3: wills_mp3,
        },
    },
    isabel: {
        ...trackDefaults,
        title: "Isabel",
        files: {
            webm: isabel_webm,
            mp3: isabel_mp3,
        },
    },
    liam: {
        ...trackDefaults,
        title: "Liam",
        files: {
            webm: liam_webm,
            mp3: liam_mp3,
        },
    },
    sebastian: {
        ...trackDefaults,
        title: "Sebastian",
        files: {
            webm: sebastian_webm,
            mp3: sebastian_mp3,
        },
    },
    oli: {
        ...trackDefaults,
        title: "Oli",
        files: {
            webm: oli_webm,
            mp3: oli_mp3,
        },
    },
    jonathan: {
        ...trackDefaults,
        title: "Jonathan",
        files: {
            webm: jonathan_webm,
            mp3: jonathan_mp3,
        },
    }
};

// Randomly select half of the tracks to be unmuted
const EXCLUDE = ["ryley", "linus", "sebastian"];
const IDs = Object.keys(tracks);
const NUMBER = Math.floor(IDs.length / 2);
const autoPlay = IDs.filter(id => !(EXCLUDE.includes(id)))
    .sort(() => 0.5 - Math.random())
    .slice(0, NUMBER);

for (const id of autoPlay) {
    tracks[id].muted = false;
}

export { tracks };