import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room';

@Component({
  selector: 'app-resumen-reserva',
  templateUrl: './resumen-reserva.component.html',
  styleUrls: ['./resumen-reserva.component.css']
})
export class ResumenReservaComponent implements OnInit {
  selectedRoom: Room | null = null;

  constructor() {}

  ngOnInit(): void {

  }

  showReservationSummary(room: Room) {
    this.selectedRoom = room;
  }
}
