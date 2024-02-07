import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  event_list: any;
  category_list:any;

  constructor(private events: EventsService, private storage: Storage,private router: Router ) {}
   goToIntro(){
    console.log("go to intro")
    this.router.navigateByUrl('/tab/intro');
    this.storage.set('mostreLaIntro',true);

   }

  ionViewDidEnter(){
    this.events.getEvents().then(
      res =>{
        this.event_list = res;
        console.log("Eventos del servidor",this.event_list)
      }
      )
      console.log("Local Events",this.events.getLocalEvents().events);
      this.events.getCategorias().then(
        (res) => {
          this.category_list = res;
          console.log('Categorías desde el servidor', this.category_list);
        }              
      );
  }

}
