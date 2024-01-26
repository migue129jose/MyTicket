import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro!: FormGroup;

  constructor(public fb: FormBuilder) { 
     this.formularioRegistro = this.fb.group({
      'usuario' : new FormControl("", Validators.required),
      'contraseña' : new FormControl("", Validators.required),
      'confirmacioncontraseña' : new FormControl("", Validators.required),
      'nombre' : new FormControl("", Validators.required),
      'apellido' : new FormControl("", Validators.required),
      'correo' : new FormControl("", Validators.required),

     })

  }

  guardar() {
    console.log('Guardar método ejecutado');
  }

  ngOnInit() {
  }

}
