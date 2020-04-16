#!/usr/bin/env node
const { execSync } = require("child_process");

const { CDNs } = require("../CDNs");

const CDN_FILES = "dist/*.{mp3,webm}";

if (process.argv.length <= 2) {
    console.log(`Usage: ${__filename} <destination>`);
    process.exit(0);
}

const destination = process.argv[2];

for (let i = 0; i < CDNs.length; i++) {
    const path = CDNs[i].slice(8);
    execSync(`rsync -auv ${CDN_FILES} ${destination}:${path}/`);
}