import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor( private router: Router, 
    private storage: Storage){}


    async canActivate() {
    console.log('Ingreso al guard')
    const mosIntro= await this.storage.get('mosIntro');

    if(mosIntro){
      console.log('Ingreso a la intro');
      return true;
      
    }else{
      console.log('No ingreso a la intro');
      this.router.navigateByUrl('/tad/intro');
      return false;
    }
  }
  
}
