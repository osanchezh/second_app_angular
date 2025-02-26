console.log("objects");

interface ICustomer {
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
const customer: ICustomer = {
    name: "John",
    age: 30,
    city: "New York",
    state: "NY",
    country: "USA",
    pincode: 12345,
    address: {
        description: "123 Main St",
        city: "New York",
        country: "USA"
    }
};
console.log('Nombre: ',customer.name);

const {name, age, city, state, country, pincode, address:{description}} = customer;
console.log('Nombre: ', name);
console.log('Edad: ', age);
console.log('Ciudad: ', city);
console.log('Estado: ', state);
console.log('País: ', country);
console.log('Código Postal: ', pincode);
console.log('description: ', description);

console.log("arrays");

const pokemons:string[]=['Pinkachi','charizad','tree'];
console.log(pokemons[0]);
const[p1,p2,p3='no existe']=pokemons;
console.log(p1);
console.log(p2);
console.log(p3);
export {};