import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {
    id: 1,
    name: 'Pc components',
    client: {
        name: 'John',
        lastname: 'Doe',
        address:{
            country: 'USA',
            city: 'Los Angeles',
            street: '23 street',
            number: 15,
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 56626556,
    },
    items: [
        {
            id:1,
            product: 'Cpu Intel i9',
            price: 599,
            quantity:1,
        },
        {
            id:2,
            product: 'Keyboard kingston',
            price: 399,
            quantity:2,
        },
        {
            id:3,
            product: 'Screen Samsung',
            price: 899,
            quantity:1
        }
    ]


}