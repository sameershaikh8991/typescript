class Person {
   
    id:number;
    name:string;


    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }


    display():string{
        return `roll number :${this.id} and name : ${this.name}`
    }
}


const p1 =new Person(1,"sam");

console.log(p1.display())


class StaticTest{
    static countInstance : number= 0;
    constructor(){
    StaticTest.countInstance++;
    }
   }
   new StaticTest();
   new StaticTest();
   new StaticTest();
   console.log(StaticTest.countInstance);