import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs903';
  grupo = "IDGS903";

  alumnos={
    matricula:"2001470",
    nombre:"Juan",
    fechaNacimiento: new Date(2002,5,5),
    pago: 123.456,
  }

  duplicarN(valor:number): number{
    return valor*2;
  }
}


