import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { OperasBasComponent } from '../operas-bas/operas-bas.component';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [OperasBasComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule

  ],
  exports:[
    OperasBasComponent
  ]
})
export class OperasModule { }