var SetterGetter = /** @class */ (function () {
    function SetterGetter() {
    }
    Object.defineProperty(SetterGetter.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: true,
        configurable: true
    });
    return SetterGetter;
}());
var displayName = new SetterGetter();
displayName.fullName = "Prashit Prakhar";
console.log(displayName.fullName);
//# sourceMappingURL=setterGetter.js.map