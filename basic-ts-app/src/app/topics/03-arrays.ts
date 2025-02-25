interface IPet{
    name:string;
    age:number;
    color:string;
    isMale:boolean;
    vaccines: string[];
}

const element1 = [1,'abc', false];

const messages2:string[]=['hola','saludos'];

const pets: IPet={
    name:'Firulais1',
    age:3,
    color:'brown',
    isMale:true,
    vaccines:['rabies']
};
const pets2: IPet[]=[
    {
        name:'Firulais2',
        age:3,
        color:'brown',
        isMale:true,
        vaccines:['rabies']
    },
    {
        name:'Firulais3',
        age:3,
        color:'brown',
        isMale:true,
        vaccines:['rabies']
    },
    {
        name:'Firulais4',
        age:3,
        color:'brown',
        isMale:false,
        vaccines:['rabies']
    }
]

const pets3: IPet[]=[pets,...pets2];
const pest4=pets3.filter((mas)=>{
    return mas.isMale;
});
const pest5=pets3.filter((mas)=>{
    return mas.vaccines.length >=1;
});
console.log(element1);
console.log(messages2);
console.log(pets3);
console.log(pest4);

console.log(pest5);
export {};