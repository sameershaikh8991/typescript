"use strict";
console.log("hello");
let num = 5;
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 5));
//optional parameter
function test(name, id) {
    return `Hello ,${name}`;
}
const x = test("sameer");
console.log(x);
const a = [1, 2, 3, 4, 5, 6,];
const d = a.map((c) => c * 2);
const numToString = a.map((b) => b.toString());
console.log(numToString);
const evenNum = a.filter((cnum) => cnum % 2 === 0);
console.log(evenNum);
function time(hour, min) {
    if (typeof hour === "string") {
        console.log("hour is string");
    }
    return hour + ":" + min;
}
console.log(time(1, "30"));
