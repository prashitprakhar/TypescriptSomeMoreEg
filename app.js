//console.log("hello world !!");
var ClassDemo = /** @class */ (function () {
    function ClassDemo(company, bodyColor) {
        this.make = company;
        this.color = bodyColor;
    }
    ClassDemo.prototype.carDetails = function () {
        console.log("Car is from " + this.make + ". And color of the car is : " + this.color);
    };
    return ClassDemo;
}());
var car1 = new ClassDemo("Lamborghini", "Black");
car1.carDetails();
//# sourceMappingURL=app.js.map