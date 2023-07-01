import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

  alumnoForm!:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.alumnoForm=this.initForm(); //Inicializamos con los campos que tenemos en el formulario
   
  }

  onSubmit():void{
    console.log('Form->',this.alumnoForm.value);
    this.obtenerValores();
  }
  obtenerValores():void{
    const mat= this.alumnoForm.get('matricula')?.value;
    const nom= this.alumnoForm.get('nombre')?.value;
    const ed= this.alumnoForm.get('edad')?.value;
    const cor= this.alumnoForm.get('correo')?.value;
    const pag= this.alumnoForm.get('pago')?.value;
    const fot= this.alumnoForm.get('foto')?.value;
    const cal= this.alumnoForm.get('calif')?.value;

    console.log('Matricula->',mat);
    console.log('Nombre->',nom);
    console.log('Edad->',ed);
    console.log('Correo->',cor);
    console.log('Pago->',pag);
    console.log('Foto->',fot);
    console.log('Calificacion->',cal);
    console.log('Form->',this.alumnoForm.value);
  }

  initForm():FormGroup{
    return this.fb.group({
      matricula:['', [Validators.required] ],
      nombre:['', [Validators.required, Validators.minLength(3)] ],
      edad:['', [Validators.required], Validators.pattern('[0-9]{2}') ],
      correo:['', [Validators.required] ],
      pago:['', [Validators.required] ],
      foto:['', [Validators.required] ],
      calif:['', [Validators.required] ]
    });

  }

}
