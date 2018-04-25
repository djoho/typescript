import {UserInterface} from "./UserInterface";

export class User implements UserInterface {

    constructor() {
    }

    private _age: number;
    private _firstname: string;
    private _lastname: string;
    private _street: string;


    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get street(): string {
        return this._street;
    }

    set street(value: string) {
        this._street = value;
    }

    log() {
        console.log("User " + this._firstname + " " + this._lastname + " " + this._age);
    }
}