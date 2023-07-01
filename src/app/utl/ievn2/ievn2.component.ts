import { Component } from '@angular/core';
import { IAlumnos } from '../alumnos';

@Component({
  selector: 'app-ievn2',
  templateUrl: './ievn2.component.html',
  styleUrls: ['./ievn2.component.css'],
})
export class Ievn2Component {

  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImagen: boolean = true;
  listFilter: string = '';

  showImage():void{
    this.muestraImagen=!this.muestraImagen;
  }

  alumnos: IAlumnos[] = [
    {
      "matricula":123,
      "nombre":"Kiliam",
      "edad":20,
      "correo":"leo_fcleon@hotmail.com",
      "pago":123.456,
      "foto": "https://www.cartonionline.com/wordpress/wp-content/uploads/2023/02/goku.jpg",
      "calif":10
    },
    {
      "matricula":333,
      "nombre":"Mbappe",
      "edad":20,
      "correo":"mbappe_fcparissaintgerman@hotmail.com",
      "pago":1239.42,
      "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIzpxHOyUFuCQQ2tF4si0n8MEqNC7S11ZUe8GsfqXZY8p0yBL0QokAgyMpUU4dQG63Ds&usqp=CAU",
      "calif": 8
    },
    

  ]


}
