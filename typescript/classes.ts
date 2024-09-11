class Car {
  // Properties
  private _color: string;
  private _make: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error(`Doors must be an even number`);
    }
  }

  // Accessors
  get color() {
    return `The color of the car is ` + this._color;
  }
  set color(color) {
    this._color = color;
  }
  get doors() {
    return this._doors;
  }

  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  worker(): string {
    return this._make;
  }
}

let myCar1 = new Car("Cool Car Company", "blue", 2);

console.log(myCar1.accelerate(35));
console.log(myCar1.turn("right"));

let myCar2 = new Car("Galaxy Motors", "red");
console.log(myCar2.doors);

// Expansion of a class
class ElectricCar extends Car {
  private _range: number;
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }
  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }
  charge() {
    console.log(this.worker() + " is charging.");
  }
}

let spark = new ElectricCar("Spark Motors", "silver", 124, 2);
let eCar = new ElectricCar("Electric Car Co.", "black", 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
