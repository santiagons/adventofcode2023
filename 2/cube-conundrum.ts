import * as fs from 'fs';

const games = fs.readFileSync('./input.txt', 'utf-8');
const gamesList = games.split('\r\n');

const gameFormat = /^Game (\d+): (.*)/;
const groupFormat = /^(\d+) ([a-zA-Z]+)$/;

const restriction:Record<string, number> = {
    "red": 12,
    "green": 13,
    "blue": 14,
};

const possibleGames = gamesList.map(game => {
    const gameId = game.match(gameFormat)!![1];
    const maxes:Record<string, number> = {};
    game.match(gameFormat)!![2].split(";").map(nonTrimmed => nonTrimmed.trim())
    .forEach(set => {
        set.split(",").map(it=>it.trim()).forEach(group => {
            const amount = +(group.match(groupFormat)!![1]);
            const color = group.match(groupFormat)!![2];
            maxes[color] = Math.max(maxes[color]|0,amount);
        });
    });
    return isGamePossible(maxes) ? gameId : undefined;
}).filter(theValue => theValue!==undefined).map(theValue => +theValue!!);

console.log(possibleGames);
console.log(possibleGames.reduce((prevVal, currVal)=> prevVal+currVal,0))


function isGamePossible(maxes:Record<string, number>) : boolean {
    return Object.entries(restriction).every(theRestriction => 
       { const theRestrictionAmount = theRestriction[1];
        const theMax = maxes[theRestriction[0]];
        return theRestrictionAmount >= theMax
       });
}



