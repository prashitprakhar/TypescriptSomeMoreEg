var StaticGridEg = /** @class */ (function () {
    function StaticGridEg() {
    }
    StaticGridEg.prototype.calculateDistance = function (x, y) {
        var xdistance = x - StaticGridEg.origin.x;
        var ydistance = y - StaticGridEg.origin.y;
        return xdistance + ydistance;
    };
    StaticGridEg.origin = { x: 0, y: 0 };
    return StaticGridEg;
}());
var grid1 = new StaticGridEg();
console.log(grid1.calculateDistance(2, 4));
//# sourceMappingURL=staticEg.js.map