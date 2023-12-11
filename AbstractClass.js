"use strict";
class Machine {
    constructor(manufacturer) {
        this.manufacturer = manufacturer;
    }
    summary() {
        return `${this.manufacturer} makes this machine.`;
    }
}
class Car extends Machine {
    constructor(manufacturer, position, speed) {
        super(manufacturer);
        this.position = position;
        this.speed = speed;
    }
    move() {
        this.position += this.speed;
    }
    moreInfo() {
        return `This is a car located at ${this.position} and going ${this.speed}mph!`;
    }
}
let myCar = new Car("Konda", 10, 70);
myCar.move();
console.log(myCar.moreInfo());
