import { Component, OnInit, Input } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/shared/models/veiculo';
import { PropostasService } from '../../propostas/propostas.service';

@Component({
  selector: 'app-veiculo-detalhes',
  templateUrl: './veiculo-detalhes.component.html',
})
export class VeiculoDetalhesComponent implements OnInit {

  veiculo: Veiculo;

  veiculoId: string;

  constructor(
    private veiculosService: VeiculosService,
    private propostasService: PropostasService,
    private route: ActivatedRoute,
    private router: Router) {
      this.veiculoId = this.route.snapshot.params.id;
    }

    ngOnInit() {
    this.veiculosService.veiculoPorId(this.veiculoId)
    .subscribe(veiculo => this.veiculo = veiculo);
  }

  deletarVeiculo() {
    if (confirm('Você tem certeza que deseja deletar o veículo?')) {
      this.veiculosService.deletar(this.veiculo.id)
        .subscribe(x => {
          this.router.navigate(['/veiculos']);
        });
    }
  }

  deletarProposta(id) {
    if (confirm('Você tem certeza que deseja deletar a proposta?')) {
      this.propostasService.deletar(id)
        .subscribe(x => {
          this.veiculosService.veiculoPorId(this.veiculoId)
          .subscribe(veiculo => this.veiculo = veiculo);
        });
    }
  }

}
