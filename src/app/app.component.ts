import { Component } from '@angular/core';

@Component({
  selector: 'bp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking-process';
  selectedDestinationId: string = "";
  onOpenFlights(){
    
  }
  onFlightSelected(destinationId: string) {
    console.log('Selected Destination ID:', destinationId);
    this.selectedDestinationId = destinationId;
  }
  
}







