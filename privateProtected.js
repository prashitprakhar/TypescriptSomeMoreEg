var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(name, wheels) {
        this.ownerName = name;
        //this.vehicleType = type;
        this.wheels = wheels;
    }
    Vehicle.prototype.vehicleDetails = function () {
        console.log("Vehicle belongs to No One");
    };
    return Vehicle;
}());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(name, wheels, colorOfVeh) {
        var _this = _super.call(this, name, wheels) || this;
        _this.color = colorOfVeh;
        return _this;
    }
    Bike.prototype.vehicleDetails = function () {
        console.log("Vehicle Bike belongs to " + this.ownerName + ". It's color is :" + this.color + " and it has wheels equals " + this.wheels);
    };
    return Bike;
}(Vehicle));
var veh1 = new Bike("Rahul", 2, "Black");
veh1.vehicleDetails();
//# sourceMappingURL=privateProtected.js.map