import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-destacado',
  templateUrl: './destacado.page.html',
  styleUrls: ['./destacado.page.scss'],
})
export class DestacadoPage implements OnInit {
  event_list: any;

  constructor(private events: EventsService) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.events.getEvents().then(
      res =>{
        this.event_list = res;
        console.log("Eventos del servidor",this.event_list)
      }
      )
      console.log("Local Events",this.events.getLocalEvents().events);
      
  }
}
