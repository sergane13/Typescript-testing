var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var value = "testing what we can do";
console.log(value);
var gigel = function (id, koko) {
    console.log(id + koko);
};
var tititi = new Function("a", "b", "return a + b");
console.log(tititi);
// error raised automatic 
var kla = true;
//kla = "stringa"
var honolulu = {
    FirstName: "hi",
    gigel: "asddsa",
    sayHi: function () {
        return "hi";
    }
};
// user1 that uses User interface
var user1 = {
    name: "avion",
    age: 120
};
//console.log(user1.naem1) warning for not existance of "naem1"
var pageName = 1;
pageName = "1";
var doSOmething = function () {
    console.log("something is happening");
};
var usingNever = function () {
    console.log("autobuz");
    throw "never";
};
var pageNumber = "1";
// --- Dom ---
var someElement = document.querySelector(".testingId");
console.log("someElement", someElement.value);
var TestingSolidity = /** @class */ (function () {
    function TestingSolidity() {
    }
    TestingSolidity.prototype.changeStff = function () {
    };
    TestingSolidity.prototype.gigelDo = function () {
    };
    return TestingSolidity;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(TestingSolidity));
