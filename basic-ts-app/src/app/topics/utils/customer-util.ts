export interface ICustomer {
    name: string;
    age: number;
    city: string;
    state: string;
    country: string;
    pincode: number;
    address: {
        description:string;
        city: string;
        country:string;
    };
}

export const showCustumerData = (customer:ICustomer)=>{
    const {name,age,city,state,country} = customer;
    console.log('Nombre: ', name);
    console.log('Edad: ', age);
    console.log('Ciudad: ', city);
    console.log('Estado: ', state);
    console.log('País: ', country);
}