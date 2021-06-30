import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/shared/models/veiculo';
import { VeiculosService } from './veiculos.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html'
})
export class VeiculosComponent implements OnInit {

  veiculos: Veiculo[];

  constructor() { }

  ngOnInit() {
    this.veiculosService.veiculos().subscribe(veiculos => this.veiculos = veiculos);
  }

}
