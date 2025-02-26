import { ICustomer, showCustumerData } from "./utils/customer-util";

const customer:ICustomer= {
    name: 'John',
    age: 30,
    city: 'New York',
    state: 'NY',
    country: 'USA',
    pincode: 12345,
    address: {
        description: '123 Main St',
        city: 'New York',
        country: 'USA'
    }
}
showCustumerData(customer);

export {};