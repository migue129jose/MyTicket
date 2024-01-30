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

  constructor(public fb: FormBuilder,
    public alertController: AlertController) { 
     this.formularioRegistro = this.fb.group({
      'usuario' : new FormControl("", Validators.required),
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
