export class Passenger {

    prnNumber : number;
    passengerName : string;
    passengerAge : number;
    city : string;
    phoneNumber : string;
    email : string;

    constructor(

        prnNumber : number,
        passengerName : string,
        passengerAge : number,
        city : string,
        phoneNumber : string,
        email : string,
    
    
    ){

        this.prnNumber = prnNumber;
        this.passengerName = passengerName;
        this.passengerAge = passengerAge;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}


