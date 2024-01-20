export abstract class Vehicle {
    abstract getNumberOfSeats():number
}

(()=> {
    const printCarSeats = (cars:Vehicle[]) => {
        for(const car of cars){
            if (car instanceof Tesla){
                console.log("tesla",car.getNumberOfSeats())
                continue
            }
            if (car instanceof Audi){
                console.log("Audi",car.getNumberOfSeats())
                continue
            }
            if (car instanceof Toyota){
                console.log("Toyota",car.getNumberOfSeats())
                continue
            }
            if (car instanceof Honda){
                console.log("Honda",car.getNumberOfSeats())
                continue
            }
            if (car instanceof Volvo){
                console.log("Volvo",car.getNumberOfSeats())
                continue
            }
        }
    }
})

export class Tesla extends Vehicle {

    constructor(private numberOfSeats:number){
        super()
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats
    }
}

export class Audi extends Vehicle {

    constructor(private numberOfSeats:number){
        super()
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats
    }
}

export class Toyota extends Vehicle {

    constructor(private numberOfSeats:number){
        super()
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats
    }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats:number){
        super()
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats
    }
}


export class Volvo extends Vehicle {

    constructor(private numberOfSeats:number){
        super()
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats
    }
}