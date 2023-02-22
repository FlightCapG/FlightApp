import { Component } from '@angular/core';
import { Passenger } from '../passenger';
import { PassengerDTO } from '../passenger-dto';
import { PassengerOperationsService } from '../passenger-operations.service';

@Component({
  selector: 'app-view-passenger',
  templateUrl: './view-passenger.component.html',
  styleUrls: ['./view-passenger.component.css']
})
export class ViewPassengerComponent {

  allPassengers:PassengerDTO[]=[];

  passenger:PassengerDTO = new PassengerDTO(0,'',0,'','','')

  constructor(private passengerService:PassengerOperationsService)
  {
    console.log("All Passenger List")
    passengerService.getAllPassengersFromSpring().subscribe(
      data=>{
          this.allPassengers = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );

  }

  getPassengers1(passengerName:string){
    this.passengerService.getPassengerDetailsByName(passengerName).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allPassengers = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

  getPassengers2(city:string){
    this.passengerService.getPassengerDetailsByCity(city).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allPassengers = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

  getPassengers3(Prn:string){
let prnNumber:number = parseInt(Prn);
    this.passengerService.getPassengerDetailsByPRN(prnNumber).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.passenger = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

}
