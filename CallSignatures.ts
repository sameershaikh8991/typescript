type sample = {
    id: number;
    name: string;
    price: number;
    info: (qty: string) => string;
};

const Information: sample = {
    id: 1,
    name: "product",
    price: 2000,
    info: (qty): string => `product id ${Information.id} and name: ${Information.name} and price: ${Information.price} for quantity: ${qty}`
};

console.log(Information.info("40"));
