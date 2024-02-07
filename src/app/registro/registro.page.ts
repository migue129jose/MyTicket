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
    ],
    nombre: [
      { type: "required", message: "Campo requerido" },
      { type: "pattern", message:  "Ingresa un nombre correcto" }
    ],
    apellido: [
      { type: "required", message: "Campo requerido" },
      { type: "pattern", message:  "Ingresa un apellido correcto" }
    ],
    contrasena: [
      {type: "required",  message: "Campo requerido"},
      {type: "pattern",   message: "Ingrese una contraseña valida"},
      {type: "minLength", message: "Debe tener minimo 4 caracteres"},
      
    ],
    confirmacioncontrasena: [
      {type: "required",  message: "Campo requerido"},
      {type: "pattern",   message: "No coincide"},
      {type: "minLength", message: "Debe tener minimo 4 caracteres"},
      
    ]
  }
  

  constructor(public fb: FormBuilder,
    public alertController: AlertController) { 
     this.formularioRegistro = this.fb.group({
      'usuario' : new FormControl("", Validators.compose ([Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),
      'nombre': new FormControl("",Validators.compose([Validators.required,Validators.maxLength(20),Validators.pattern(/^[a-zA-Z\s']*$/)
        ])),
        'apellido': new FormControl("",Validators.compose([Validators.required,Validators.maxLength(20),Validators.pattern(/^[a-zA-Z\s']*$/)
        ])),
      'contrasena' : new FormControl("", Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]*$/)
      ])),
      'confirmacioncontrasena' : new FormControl("", Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]*$/)
      ])),
      

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
       
    console.log(localStorage.setItem('usuario', JSON.stringify(usuario)));
    

  }


}
