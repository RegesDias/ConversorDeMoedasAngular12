import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './component';
import { ConversorService, MoedaService } from './services';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './diretives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';



@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ConversorComponent
  ],
  providers:[
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
