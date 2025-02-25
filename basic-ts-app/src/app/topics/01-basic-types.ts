

//#region
console.log("basic");
const age:number = 15;
let weight=75;
const agetxt='21';
let agei:number=parseInt(agetxt);
console.log(age);
console.log(weight);
console.log(agei);

const weightText='80.6391013462';

console.log(parseFloat(weightText));

console.log(Number(weightText));

console.log(parseInt(weightText));
//#endregion

//#region string
console.log("string");
const name:string='John';
const surname:string='Doe';
const fullname:string=` name:${name} surname:${surname}`;
console.log(name+" "+surname);
console.log(fullname);
//#endregion

//#region boolean
const bool:boolean=true;
const bool2:boolean=5>2;

const bool3='false';
console.log("boolean");

console.log(bool);
console.log(bool2);
console.log("boolean:"+Boolean(bool3));
console.log(!!bool3);

//#endregion

//#region date
console.log("date");
const date:Date=new Date();
console.log(date);
console.log(date.getFullYear());
//#endregion

//#region any
console.log("any");
let any1:any='any';
console.log("1:"+any1);
any1=5;
console.log("2:"+any1);
//#endregion
export {};