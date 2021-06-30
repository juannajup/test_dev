import { Component, OnInit } from '@angular/core';
import { PropostasService } from './propostas.service';
import { Router } from '@angular/router';
import { Proposta } from 'src/app/shared/models/proposta';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.component.html'
})
export class PropostasComponent implements OnInit {

  propostas: Proposta[];

  constructor(
    private propostasService: PropostasService,
    private router: Router) { }

  ngOnInit() {
    this.propostasService.propostas().subscribe(propostas => this.propostas = propostas);
  }

  deletarProposta(id) {
    if (confirm('Você tem certeza que deseja deletar a proposta?')) {
      this.propostasService.deletar(id)
        .subscribe(x => {
          this.propostasService.propostas().subscribe(propostas => this.propostas = propostas);
        });
    }
  }

}
