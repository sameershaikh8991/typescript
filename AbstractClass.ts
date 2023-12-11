abstract class Machine {
    constructor(public manufacturer: string) {
    }

    summary(): string {
        return `${this.manufacturer} makes this machine.`;
    }


    abstract moreInfo(): string;
}
class Car extends Machine {
    constructor(manufacturer: string, public position: number, protected speed: number) {
        super(manufacturer);
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