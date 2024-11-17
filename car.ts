interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}


class CarCar implements Vehicle {
    make: string;
    model: string;
    year: number;

    
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    
    start(): void {
        console.log("Car engine started");
    }
}


const myCarCar = new Car("Toyota", "Camry", 2021);


myCar.start(); 