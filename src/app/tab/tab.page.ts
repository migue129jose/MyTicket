import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  constructor(private menu: MenuController,
    private navController: NavController) { }

  ngOnInit() {
  }
  logout(){
    this.navController.navigateRoot("/tab/login")
  }

}
