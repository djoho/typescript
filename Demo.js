"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var isBoolean = true;
var myNumber = 30;
var halloWelt = "Hallo Welt";
var anything = "Hallo Welt";
anything = 12;
var anonymesObject = {
    firstname: "Hans",
    lastname: "Meier"
};
anonymesObject = {
    firstname: "Peter",
    lastname: "Müller",
    age: 42
};
var numberArrayOrStringArray = [1, 2, 3];
var numberOrStringArray = [1, "Hallo", 3];
// enum Color{Red, Green, Blue};
// let color: Color = Color.Green;
// console.log(color);
// function giveString(): string {
//     return "Hallo Welt";
// }
// let newNumber: string = giveString();
// function createUser(firstname: string, lastname: string, age: number = 18) {
//     console.log("User: " + firstname + " " + lastname + " " + age);
// }
// createUser("Hans", "Meier");
// createUser("Peter", "Müller", 15);
var firstUser = new User_1.User();
firstUser.firstname = "Karl";
firstUser.lastname = "Karlsson";
firstUser.age = 12;
firstUser.log();
//# sourceMappingURL=Demo.js.map