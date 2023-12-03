export class Location {
    x: number;
    y: number;
    constructor(x:number,y:number) {
        this.x=x;
        this.y=y;
    }
}

export class Range {
    topLeft: Location;
    bottomRight: Location;

    constructor(topLeft: Location, bottomRight: Location) {
        this.topLeft=topLeft;
        this.bottomRight=bottomRight;
    }

    public contains(location: Location) {
        return location.x <= this.bottomRight.x && location.x >= this.topLeft.x && 
            location.y >= this.topLeft.y && location.y <= this.bottomRight.y;
    }
}