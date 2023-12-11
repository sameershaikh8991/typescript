console.log("hello");

let num:number =5 

function sum(a:number,b:number):number{
    return a+b;
}

console.log(sum(2,5));


//optional parameter

function test(name:String,id?:number){
    return `Hello ,${name}`
}

const x =test("sameer");

console.log(x)


const a:number[]=[1,2,3,4,5,6,];

const d :number[]= a.map((c) => c*2);

const numToString:string[] =a.map((b:number) => b.toString());

console.log(numToString);

const evenNum :number[] =a.filter((cnum) =>  cnum%2===0);

console.log(evenNum);




function time(hour:number|string,min:number|string){
    if(typeof hour ==="string"){
        console.log("hour is string")
    }
    return hour+":"+min;
}

console.log(time(1,"30"));