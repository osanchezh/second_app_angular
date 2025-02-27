import { ICustomer } from "./utils/customer-util";

const array1 = [1,5,2,9,1];
const array2 = ['a','b','c'];

const getFirstItem=(arr: number[])=>{
    return arr[0];

}
const getFirstItem2=<T>(arr: T[])=>{
    return arr[0];

}
console.log(getFirstItem2<number>(array1));
console.log(getFirstItem2<string>(array2));

interface IResponse<T>{
    code:string;
    message:string;
    data:T;
}
interface IResponse2<T=void>{
    code:string;
    message:string;
    data?:T;
}
/*
const customer:ICustomer={
    name:'Juan',
    age:20
};
*/

const response:IResponse<ICustomer>={
    code:'200',
    message:'OK',
    data:{
        name:'Juan',
        age:20,
        city:'Mexico',
        state:'Mexico',
        country:'Mexico',
        pincode:12345,
        address:{
            description:'Calle 1',
            city:'Mexico',
            country:'Mexico'
        }
    }
};

console.log("mensaje=",response);

const response2:IResponse<ICustomer[]>={
    code:'200',
    message:'OK',
    data:[
        {
            name:'Juan',
            age:20,
            city:'Mexico',
            state:'Mexico',
            country:'Mexico',
            pincode:12345,
            address:{
                description:'Calle 1',
                city:'Mexico',
                country:'Mexico'
            }
        },
        {
            name:'Pedro',
            age:21,
            city:'Mexico',
            state:'Mexico',
            country:'Mexico',
            pincode:12345,
            address:{
                description:'Calle 1',
                city:'Mexico',
                country:'Mexico'
            }
        }
    ]
}
console.log("mensaje=",response2);

const response3:IResponse2= {
    code:'200',
    message:'OK'
}

console.log("mensaje=",response3);
export {};