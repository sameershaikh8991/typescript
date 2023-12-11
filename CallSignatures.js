"use strict";
const Information = {
    id: 1,
    name: "product",
    price: 2000,
    info: (qty) => `product id ${Information.id} and name: ${Information.name} and price: ${Information.price} for quantity: ${qty}`
};
console.log(Information.info("40"));
