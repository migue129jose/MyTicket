import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin!: FormGroup;
  alertController: any;

  constructor(public fb: FormBuilder) {

    this.formularioLogin = this.fb.group({
      'Usuario': new FormControl("", Validators.required),
      'Contraseña': new FormControl("", Validators.required)  
      
    })


   }

  ngOnInit() {
  }
  async ingresar(){

    var usuarioString = localStorage.getItem('usuario');
var usuario: any; 

if (usuarioString !== null) {
    usuario = JSON.parse(usuarioString);
} else {
    
  const alert = await this.alertController.create({
    header: 'Datos incorrectos',
    message: 'Los datos que ingresaste son incorrectos.',
    buttons: ['Aceptar']
  });

  await alert.present();
}



  }
}
