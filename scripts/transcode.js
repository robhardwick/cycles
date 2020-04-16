#!/usr/bin/env node
const fs = require("fs");
const { execSync } = require("child_process");

const OUTPUT_PATH = "./src/media/audio/";

if (process.argv.length <= 2) {
    console.log(`Usage: ${__filename} <path>`);
    process.exit(0);
}

const path = process.argv[2];

fs.readdir(path, (err, files) => {
    for (let i = 0; i < files.length; i++) {
        if (!files[i].endsWith(".wav") || files[i].includes("mix")) {
            continue;
        }
        const input_wav = path + files[i];
        const basename = files[i].slice(0, -4);

        // Convert to webm
        const output_webm = OUTPUT_PATH + basename + ".webm";
        if (!fs.existsSync(output_webm)) {
            console.log(`Encoding "${basename}.webm"`);
            execSync(`ffmpeg -i "${input_wav}" -c:a libopus -b:a 32K "${output_webm}"`);
        }

        // Convert to mp3
        const output_mp3 = OUTPUT_PATH + basename + ".mp3";
        if (!fs.existsSync(output_mp3)) {
            console.log(`Encoding "${basename}.mp3"`);
            execSync(`ffmpeg -i "${input_wav}" -codec:a libmp3lame -qscale:a 6 "${output_mp3}"`);
        }
    }
});