import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  event_list = []

  constructor(private events: EventsService) {}
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
