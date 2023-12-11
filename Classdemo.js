"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        return `roll number :${this.id} and name : ${this.name}`;
    }
}
const p1 = new Person(1, "sam");
console.log(p1.display());
class StaticTest {
    constructor() {
        StaticTest.countInstance++;
    }
}
StaticTest.countInstance = 0;
new StaticTest();
new StaticTest();
new StaticTest();
console.log(StaticTest.countInstance);
