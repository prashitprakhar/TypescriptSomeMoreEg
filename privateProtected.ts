class Vehicle {
    ownerName: string;
   // private vehicleType: string;
    protected wheels: number;

    constructor(name: string, wheels: number){
        this.ownerName = name;
        //this.vehicleType = type;
        this.wheels = wheels;
    }

    vehicleDetails(){
        console.log("Vehicle belongs to No One");
    }
    
}

class Bike extends Vehicle{
    private color: string;
    constructor(name: string, wheels: number, colorOfVeh: string){
        super(name, wheels);
        this.color = colorOfVeh;
    }
    vehicleDetails(){
        console.log("Vehicle Bike belongs to "+this.ownerName+". It's color is :"+this.color+" and it has wheels equals "+this.wheels);    
    }
}

let veh1: Vehicle = new Bike("Rahul", 2, "Black");
veh1.vehicleDetails();