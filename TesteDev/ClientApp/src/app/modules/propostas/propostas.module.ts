import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropostasComponent } from './propostas.component';
import { AddPropostaComponent } from './add-proposta/add-proposta.component';
import { EditarPropostaComponent } from './editar-proposta/editar-proposta.component';
import { SharedModule } from 'src/app/shared/shared.module';

const ROUTES: Routes = [
  {path : '', component: PropostasComponent},
  {path : 'add-proposta/:id', component: AddPropostaComponent},
  {path : 'editar-proposta/:id', component: EditarPropostaComponent},
];

@NgModule({
  declarations: [PropostasComponent, AddPropostaComponent, EditarPropostaComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: []
})
export class PropostasModule { }
