import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'bp-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(private flight : FlightService) { }
  vuelosCards:any = []
  @Output() validarVuelo = new EventEmitter<string>(); 
  selectedDestinationId:string = ""
  cargarVuelos(){
    let vuelo = this.flight.getFlight() 
    this.vuelosCards = vuelo;
    //console.log(this.vuelosCards);
  }
  botonEvent(destinationId: string) {
    this.selectedDestinationId = destinationId;
    this.validarVuelo.emit(this.selectedDestinationId)
    //console.log(this.validarVuelo.emit(this.selectedDestinationId));
    
    
  }
  ngOnInit(): void {
   this.cargarVuelos() 
  }

}
