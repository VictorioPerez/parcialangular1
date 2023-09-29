import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room';
@Component({
  selector: 'bp-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  @Input() roomCard:any = []
  @Input() selectedDestinationId: string = "";
  @Output() roomSelected = new EventEmitter<Room>();

  selectedRoom: Room | null = null;

  constructor(private roomService : RoomService) { }
  cargarRoom() {
    if (this.selectedDestinationId) {
      let rooms = this.roomService.getRoomsByDestinationId(this.selectedDestinationId);
      this.roomCard = rooms;
    } else {
      this.roomCard = this.roomService.getRoom();
    }
  }
  selectRoom(room: Room) {
    this.selectedRoom = room;
    this.roomSelected.emit(room);
    console.log(this.selectedRoom);
    
  }
  ngOnInit(): void {
    this.cargarRoom()
  }

}
