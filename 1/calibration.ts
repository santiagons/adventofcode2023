import * as fs from 'fs';

const words = fs.readFileSync('./input.txt', 'utf-8');
const wordList = words.split('\r\n');

const firstNumberRegex = /^[a-zA-Z]*(\d)/;
const lastNumberRegex = /(\d)[a-zA-Z]*$/;

const calibration = wordList.map(word => {
    const firstMatch = word.match(firstNumberRegex);
    const lastMatch = word.match(lastNumberRegex);
    return +(firstMatch?.[1] ?? 0)*10 + +(lastMatch?.[1] ?? 0);
});

console.log(calibration.reduce((prev, curr)=> prev+curr, 0));
