import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculosComponent } from './veiculos.component';
import { AddVeiculoComponent } from './add-veiculo/add-veiculo.component';
import { VeiculoDetalhesComponent } from './veiculo-detalhes/veiculo-detalhes.component';
import { VeiculoCardComponent } from './veiculo-card/veiculo-card.component';
import { EditarVeiculoComponent } from './editar-veiculo/editar-veiculo.component';
import { SharedModule } from 'src/app/shared/shared.module';


const ROUTES: Routes = [
  {path : '', component: VeiculosComponent},
  {path : 'add-veiculo', component: AddVeiculoComponent},
  {path : 'detalhes/:id', component: VeiculoDetalhesComponent},
  {path : 'editar/:id', component: EditarVeiculoComponent},
];


@NgModule({
  declarations: [VeiculosComponent, VeiculoCardComponent, AddVeiculoComponent, VeiculoDetalhesComponent, EditarVeiculoComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: []
})
export class VeiculosModule { }
