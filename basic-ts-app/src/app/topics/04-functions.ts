console.log("methods");

function showMessage():void{
    console.log("Hello World");
}

const greet = (name:string):void=>{
  console.log(`Hola ${name}`);
}
showMessage();
greet("Luis");

console.log("fuctions");

function sum(a:number,b:number):number{
    return a+b;
}

const sum2 =(a:number, b:number):number=>{
    return a+b;
}
console.log(sum(1, 2));
console.log(sum2(3, 4));


interface IPersona{
    name:string;
    lastName:string;
    age:number;
}
interface IStudent extends IPersona{
    address:string;
    case?:number;
}

const student1:IStudent={
    name:'John',
    lastName:'Doe',
    age:30,
    address:'123 Main St'
}

function showDataStudent(stu:IStudent):void{
    console.log(`Name: ${stu.name}`);
    console.log(`Last Name: ${stu.lastName}`);
    console.log(`Age: ${stu.age}`);
    console.log(`Address: ${stu.address}`);
    console.log(`Case: ${stu.case}`);
    console.log(stu.case!+1);
}

const temporal =( data:IStudent )=>{
    console.log(`Name: ${data.name}`);
    console.log(`Last Name: ${data.lastName}`);
    console.log(`Age: ${data.age}`);
    console.log(`Address: ${data.address}`);
    console.log(`Case: ${data.case}`);
}
showDataStudent(student1);
temporal(student1);
export {};