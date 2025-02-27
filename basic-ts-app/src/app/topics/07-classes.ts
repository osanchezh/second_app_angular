import { IAction } from "./utils/actions.interface";

class Person{
    name: string;
    lastName: string;
    age: number;
    protected fullName:string;

    constructor(name: string, lastName:string,age: number){
        this.name = name;
        this.age = age;
        this.lastName = lastName;
        this.fullName = `${name} ${lastName}`;
    }
    getName(){
        return this.name;
    }
    talk():void{
        console.log("año: "+this._yearOfBirth());
    }
    walk():void{
        console.log(this.name+' walking');
    }
    private _yearOfBirth():number{
        return new Date().getFullYear() - this.age;
    }
}


const juan = new Person('Juan', 'Perez', 20);

console.log(juan);
juan.walk();
juan.talk();


class Astronauta extends Person implements IAction{
    numeroMaestrias: number;
    constructor(name:string, lastName:string, age:number, numeroMaestrias:number){
        super(name, lastName, age);
        this.numeroMaestrias = numeroMaestrias;
    }
    pilotShip(): void {
        console.log(this.fullName+' pilot ship');
    }
    getFullName():string{
        return this.fullName;
    }
}

const astronauta = new Astronauta('Juan', 'Perez', 20, 1);

console.log("astonauta:"+JSON.stringify(astronauta));
console.log(astronauta);
console.log(astronauta.getFullName());
astronauta.pilotShip();
export {};