import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/shared/models/veiculo';
import { VeiculosService } from '../veiculos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html'
})
export class EditarVeiculoComponent implements OnInit {
  formEditar: FormGroup;
  veiculo: Observable<Veiculo>;
  veiculoRetorno: Veiculo;
  veiculoId: string;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.veiculoId = this.route.snapshot.params.id;
  }

  ngOnInit() {

  }

  salvarVeiculo() {

  }
}
