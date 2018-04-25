"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "street", {
        get: function () {
            return this._street;
        },
        set: function (value) {
            this._street = value;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.log = function () {
        console.log("User " + this._firstname + " " + this._lastname + " " + this._age);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map