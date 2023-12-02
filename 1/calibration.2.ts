import * as fs from 'fs';

const reverse = require("underscore.string/reverse");
const words = fs.readFileSync('./input.txt', 'utf-8');
const wordList = words.split('\r\n');

const numberRegex = /(\d|one|two|three|four|five|six|seven|eight|nine|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/g;

const numbers: Record<string, number> = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "eno": 1,
    "owt": 2,
    "eerht": 3,
    "ruof": 4,
    "evif": 5,
    "xis": 6,
    "neves": 7,
    "thgie": 8,
    "enin": 9,
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9
}

const calibration = wordList.map((word,idx) => {
    const firstMatch = word.match(numberRegex)?.[0]??"";
    const lastMatch = reverse(word).match(numberRegex)?.[0]??"";
    return +(numbers[firstMatch] || 0)*10 + +(numbers[lastMatch] || 0);
});

console.log(calibration.reduce((prev, curr)=> prev+curr, 0));