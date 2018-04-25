import {UserInterface} from "./UserInterface";
import {User} from "./User";

let isBoolean : boolean = true;
let myNumber: number = 30;
let halloWelt: string = "Hallo Welt";

let anything  : any = "Hallo Welt";
anything = 12;

let anonymesObject: UserInterface = {
    firstname: "Hans",
    lastname: "Meier"
};
anonymesObject = {
    firstname: "Peter",
    lastname: "Müller",
    age: 42
}

let numberArrayOrStringArray: string[]|number[] = [1, 2, 3];
let numberOrStringArray: (string|number)[] = [1, "Hallo", 3];

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

let firstUser = new User();
firstUser.firstname = "Karl";
firstUser.lastname = "Karlsson";
firstUser.age = 12;
firstUser.log();

// let async = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve(true);
//     }, 3000);
// });
// async.then(function(erfolgsResultat) {
//     console.log(erfolgsResultat);
// });
// async.catch(function(fehler) {
//     console.log(fehler);
// });