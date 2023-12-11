"use strict";
// const emp :{
//     id:number,
//     name:string,
// }={
//     id:1,
//     name:"sameer",
// };
const student = {
    id: 1,
    name: "sameer"
};
console.log(student);
const product = {
    qty: 2,
    price: 50
};
const calTotalPrice = (product) => {
    return product.qty * product.price;
};
const price = (product) => product.price * product.qty;
const cal = (product) => product.price * product.qty;
console.log(price(product));
