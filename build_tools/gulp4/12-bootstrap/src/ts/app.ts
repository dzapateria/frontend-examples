export class Person {
    //private id: number | null = null;
    //private name: string;

    constructor(private name: string, private id: number | null = null) {
        this.name = name;
    }

    //methods
    public myName(): string
    {
        return "Person's name: "  + this.name;
    }

    public myId(): string
    {
        if (this.id != null)
        return "Person's id: " + this.id;
        else return "Person's  is undefined ";
    }
}

import { suma } from './suma';

console.log('app.ts sumando importando suma ' + suma(10, 20) + ' valor');
