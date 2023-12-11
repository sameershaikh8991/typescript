// const emp :{
//     id:number,
//     name:string,
// }={
//     id:1,
//     name:"sameer",
// };


// const product :{
//     id:number,
//     qty:number,
//     price:number,
// } ={
// id:1,
// qty:1
// };


// console.log(emp.id);


// function  add(a :number,b:number){
//     return a+b;
// }


// function  add<T,U>(a :T,b:T){
//     return a+b;
// }


// console.log(add(2,4));



interface Student{
    id :number;
    name:string;

}


const student:Student ={
    id: 1,
    name: "sameer"
}   


console.log(student);


interface Product {
    qty:number;
    price : number;
}


const product:Product ={
    qty: 2,
    price: 50
}


const calTotalPrice :(product:Product) => number =(product :Product):number =>{
    return product.qty * product.price
}


const price = (product :Product) :number => product.price* product.qty;


const cal =(product :Product) :number => product.price * product.qty;

console.log(price(product));


