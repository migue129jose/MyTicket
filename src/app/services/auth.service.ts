import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
    return new Promise((accept, rejec) => {
      if(credential.Usuario == 'migue.jose129@gmail.com' && credential.Contrasena == 'Miguel1234'){
        accept('Login Correcto');
      }else{
        rejec('Login incorrecto')
      }
    });

  }
}
