import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro!: FormGroup;

  validation_messages={
    usuario:[
      {type: "required", message:"El usuario es obligatorio"},
      {type: "pattern", message:"Colocar un correo valido"}
    ]
    
  }
  

  constructor(public fb: FormBuilder,
    public alertController: AlertController) { 
     this.formularioRegistro = this.fb.group({
      'usuario' : new FormControl("", Validators.compose ([Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
      'contraseña' : new FormControl("", Validators.required),
      'confirmacioncontraseña' : new FormControl("", Validators.required),
      

     })

  }

  
  ngOnInit() {
  }
 async guardar() {
    var f=this.formularioRegistro.value;
    

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'DATOS IMCOMPLETOS',
        message: 'Complete los campos requeridos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    var usuario = {
      usuario: f.usuario,
      contraseña: f.contraseña
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

  }


}
