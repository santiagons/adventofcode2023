import * as fs from 'fs';

import { Location, Range } from '../core/model';

class EnginePart {
    location: Location;
    value: number;

    constructor(location:Location, value:number) {
        this.location = location;
        this.value=value;
    }

    public getBuffer(size: number):Range {
        const numberLength = this.value.toString().length;
        return new Range(new Location(this.location.x-size, this.location.y-size),new Location(this.location.x+numberLength+size-1, this.location.y+size));
    }
}

class Symbol {
    location: Location;
    value: string;
    adjacentPartNumbers: Array<number>;

    constructor(location:Location, value:string) {
        this.location = location;
        this.value=value;
        this.adjacentPartNumbers=[];
    }
}

const engine = fs.readFileSync('./input.txt', 'utf-8');
const engineList = engine.split('\r\n');

const enginePartRegex = /(\d+)/g;
const symbolRegex = /(?!([\d\.]))./g;

const engineParts:Array<EnginePart> = [];
const symbols:Array<Symbol> = [];

engineList.forEach((engineLine,lineNumber) => {
    const engineLineParts = engineLine.matchAll(enginePartRegex);
    for(const enginePart of engineLineParts) {
        engineParts.push(new EnginePart(new Location( enginePart.index!!,lineNumber), +enginePart[0]));
    }

    const engineLineSymbols = engineLine.matchAll(symbolRegex);
    for(const engineLineSymbol of engineLineSymbols) {
        symbols.push(new Symbol(new Location(engineLineSymbol.index!!, lineNumber), engineLineSymbol[0]));
    }
})

engineParts.forEach(enginePart => {
    const buffer = enginePart.getBuffer(1);
    symbols.forEach(symbol => {
        if(buffer.contains(symbol.location)) {
            symbol.adjacentPartNumbers.push(enginePart.value);
        }
    }
    );
});

console.log(symbols.map(symbol => {
    if(symbol.value=='*' && symbol.adjacentPartNumbers.length==2) {
        return symbol.adjacentPartNumbers[0]*symbol.adjacentPartNumbers[1];
    }else {
        return 0;
    }
}).reduce((prev,cur)=>prev+cur,0));