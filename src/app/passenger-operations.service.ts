import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from './passenger';
import { PassengerDTO } from './passenger-dto';

@Injectable({
  providedIn: 'root'
})
export class PassengerOperationsService {

  baseURL:string = 'http://localhost:9090';
  passengerByNameEndPoint:string=this.baseURL+'/passenger/name';
  passengerByCityEndPoint:string=this.baseURL+'/passenger/city';
  passengerByPRNEndPoint:string=this.baseURL+'/passenger/id';
  allPassengerEndpoint = this.baseURL+'/passenger/All';

  passengerArr:Passenger[] = [];

  constructor(private http:HttpClient) { 

    console.log("Inside Constructor "+this.passengerByNameEndPoint);
    console.log("Inside Constructor "+this.passengerByCityEndPoint);
    console.log("Inside Constructor "+this.passengerByPRNEndPoint);


  }

  getPassengerDetailsByName(passengerName:string):Observable<PassengerDTO[]>{
    console.log("Inside Method 1 "+this.passengerByNameEndPoint);
    this.passengerByNameEndPoint=this.passengerByNameEndPoint+'/'+passengerName;
    console.log("After adding name 2 "+this.passengerByNameEndPoint);

    return this.http.get<PassengerDTO[]>(`${this.passengerByNameEndPoint}`);
  }

  getPassengerDetailsByCity(city:string):Observable<PassengerDTO[]>{
    console.log("Inside Method 1 "+this.passengerByCityEndPoint);
    this.passengerByCityEndPoint=this.passengerByCityEndPoint+'/'+city;
    console.log("After adding city 2 "+this.passengerByCityEndPoint);

    return this.http.get<PassengerDTO[]>(`${this.passengerByCityEndPoint}`);
  }

  getPassengerDetailsByPRN(prnNumber:number):Observable<PassengerDTO>{
    console.log("Inside Method 1 "+this.passengerByPRNEndPoint);
    this.passengerByPRNEndPoint=this.passengerByPRNEndPoint+'/'+prnNumber;
    console.log("After adding PRN 2 "+this.passengerByPRNEndPoint);

    return this.http.get<PassengerDTO>(`${this.passengerByPRNEndPoint}`);
  }

  Submit(passengerFromUser:Passenger)
  {
    
    this.passengerArr.push(passengerFromUser); 
    console.log("Inside Passenger Service : Passenger Added "+passengerFromUser.prnNumber);
    console.log(" Total Passengers Are :- "+this.passengerArr.length);
    
  }

  getPassengerArr():Passenger[]
  {
    return this.passengerArr;
  }


  getAllPassengersFromSpring():Observable<PassengerDTO[]>
  {
    console.log("inside service : "+this.allPassengerEndpoint);
      return this.http.get<PassengerDTO[]>(`${this.allPassengerEndpoint}`);
  }




}
