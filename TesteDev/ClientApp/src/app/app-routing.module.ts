import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'veiculos', loadChildren: () => import('./modules/veiculos/veiculos.module').then(m => m.VeiculosModule)},
  {path: 'propostas', loadChildren: () => import('./modules/propostas/propostas.module').then(m => m.PropostasModule)},];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
