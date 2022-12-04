class Car {
    constructor(model) {
  this.speed = 0;
    this.model = model;
    }

    move(speed) {
        this.speed = speed;
        console.log(this.model + " moves with the speed of " + speed + "km/h.");
    }
}

class ElectricCar extends Car {
    constructor(model, engineType) {
        super(model);
        this.engineType = engineType;
        this.maxSpeed = 200;
    }

    typeOfEngine() {
    console.log(this.model + " have a type of engine as " + this.engineType + ".");
    }

    maxSpeedOfElectricCar() {
    // return super.move(this.maxSpeed); - Pokusao sam da koristim func iz Car klase ali mi izbacuje undefined;
    console.log(this.model + " moves with max speed of " + this.maxSpeed + "km/h.");
    }
}

class Van extends Car {
    constructor(model, numberOfSeats) {
        super(model);
        this.numberOfSeats = numberOfSeats;
    }

    numberOfSeatsInVan() {
        console.log(this.model + " have " + this.numberOfSeats + " seats.");
    }
}

let car = new Car("Mercedes");
car.move(100);

let electric = new ElectricCar("Tesla", "battery");
electric.typeOfEngine();
electric.maxSpeedOfElectricCar();

let van = new Van("WW Cady", 9);
van.numberOfSeatsInVan();
