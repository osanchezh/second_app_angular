import { Console } from "console";

interface IPersona{
    name:string;
    lastName:string;
    age:number;
}
interface IStudent extends IPersona{
    address:string;
}
const persona:IPersona={
    name:'John',
    lastName:'Doe',
    age:30
}

console.log(persona);

const persona1={
    name:'John',
    lastName:'Doe',
    age:30
}

console.log(persona1);

const student:IStudent={
    name:'John',
    lastName:'Doe',
    age:30,
    address:'123 Main St'
}
console.log(student);
console.log("edad:"+student.age);
export {};