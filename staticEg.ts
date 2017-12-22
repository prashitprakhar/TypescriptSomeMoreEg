class StaticGridEg{
    static origin = {x:0, y:0};
    calculateDistance(x: number, y: number):number {
        
        let xdistance = x - StaticGridEg.origin.x;
        let ydistance = y - StaticGridEg.origin.y;

        return xdistance+ydistance;
    }
    constructor(){

    }
}

let grid1 = new StaticGridEg();
console.log(grid1.calculateDistance(2, 4));