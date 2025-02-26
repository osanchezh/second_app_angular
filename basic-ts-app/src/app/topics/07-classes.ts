
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
export {};