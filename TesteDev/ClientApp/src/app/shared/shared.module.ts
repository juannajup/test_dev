import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VeiculosService } from '../modules/veiculos/veiculos.service';
import { PropostasService } from '../modules/propostas/propostas.service';
import { MomentModule } from 'ngx-moment';


@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MomentModule],
  exports: [InputComponent, CommonModule, FormsModule, ReactiveFormsModule, MomentModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        VeiculosService,
        PropostasService
      ]
    };
  }
}
