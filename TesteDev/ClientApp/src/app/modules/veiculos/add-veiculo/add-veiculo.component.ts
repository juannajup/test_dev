import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/shared/models/veiculo';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { VeiculosService } from '../veiculos.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-veiculo',
  templateUrl: './add-veiculo.component.html'
})
export class AddVeiculoComponent implements OnInit {

  formCadastar: FormGroup;
  veiculo: Veiculo;
  veiculoRetorno: Veiculo;
  veiculoId: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.formCadastar = this.formBuilder.group({

    });

  }

  cadastrarVeiculo() {
    if (this.formCadastar.value.vendido.length === 0) {
      this.formCadastar.value.vendido = false;
    }
    this.formCadastar.value.proposta = null;

    this.veiculosService
      .pipe(
        tap((veiculo: Veiculo) => {
          this.veiculoRetorno = veiculo;
        })
      )
      .subscribe((veiculo: Veiculo) => {
        this.router.navigate(['/veiculos/detalhes', veiculo.id]);
      });
  }
}
