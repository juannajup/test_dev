import { Component, OnInit, Input } from '@angular/core';
import { Veiculo } from 'src/app/shared/models/veiculo';

@Component({
  selector: 'app-veiculo-card',
  templateUrl: './veiculo-card.component.html'
})
export class VeiculoCardComponent implements OnInit {

  @Input()  veiculo: Veiculo;

  constructor() { }

  ngOnInit() {
  }

}
