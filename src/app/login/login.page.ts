import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import {Storage} from '@ionic/storage-angular';
import { Router } from '@angular/router';
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
  validation_messages={
    Usuario:[
      {type: "required", message:"El usuario es obligatorio"},
      {type: "pattern", message:"Colocar un correo valido"}
    ],
    Contrasena: [
      {type: "required",  message: "Campo requerido"},
      {type: "pattern",   message: "Ingrese una contraseña valida"},
      {type: "minLength", message: "Debe tener minimo 4 caracteres"},
      
    ]
    

      
    
    
  }

  constructor(public fb: FormBuilder, private authService:AuthService, private navCntrl: NavController, private storage: Storage) {

    this.formularioLogin = this.fb.group({
      'Usuario': new FormControl("", Validators.compose ([Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
      'Contrasena': new FormControl("",  Validators.compose([Validators.required,Validators.minLength(4), Validators.maxLength(10),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]*$/)
      ]))  
      
    })


   }

  ngOnInit() {
  }
  
  
  login(login_data: any){
    console.log(login_data);
    this.storage.create().then(() => {
    this.authService.loginUser(login_data).then(res =>{
      this.storage.set('userLoggedIn', true);
      console.log(res);
      this.navCntrl.navigateForward('/tab/home')

    })
  }

    )}

  
}