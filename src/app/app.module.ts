import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlightsComponent } from './flights/flights.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ResumenReservaComponent } from './resumen-reserva/resumen-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    RoomListComponent,
    ResumenReservaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
