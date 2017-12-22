//console.log("hello world !!");

class ClassDemo {
    make: string;
    color: string;

    constructor(company: string, bodyColor: string){
        this.make = company;
        this.color = bodyColor;
    }

    carDetails(): void{
        console.log("Car is from "+this.make+". And color of the car is : "+this.color);
        
    }
}

let car1 = new ClassDemo("Lamborghini", "Black");
car1.carDetails();