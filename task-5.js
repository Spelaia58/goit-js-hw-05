class Car {
  static getSpecs(Car) {
    console.log(
      `Max Speed:${Car.maxSpeed}, Speed:${Car.speed}, Is On:${Car.isOn}, Distance:${Car.distance}, Price:${Car.price} `
    );
  }
  constructor({ maxSpeed, price }) {
    this.maxSpeed = maxSpeed;
    this._price = price;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (this.maxSpeed >= this.speed + value) {
      return (this.speed += value);
    }
  }
  decelerate(value) {
    if (this.speed - value >= 0) {
      return (this.speed -= value);
    }
  }
  drive(hours) {
    if (this.isOn === true) {
      this.distance = hours * this.speed * this.distance;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
