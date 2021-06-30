import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PropostasService } from '../propostas.service';
import { Proposta } from 'src/app/shared/models/proposta';
import { Veiculo } from 'src/app/shared/models/veiculo';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { VeiculosService } from '../../veiculos/veiculos.service';

@Component({
  selector: 'app-add-proposta',
  templateUrl: './add-proposta.component.html'
})
export class AddPropostaComponent implements OnInit {

  formCadastar: FormGroup;
  proposta: Proposta;
  propostaRetorno: Proposta;
  idProposta: string;
  veiculo: Veiculo;
  veiculoId: string;

  constructor(
    private formBuilder: FormBuilder,
    private propostasService: PropostasService,
    private veiculosService: VeiculosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.veiculoId = this.route.snapshot.params.id;

    this.veiculosService.veiculoPorId(this.veiculoId)
    .subscribe(veiculo => this.veiculo = veiculo);
  }

  ngOnInit() {

  }

  cadastrarProposta() {

  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.resposta[0]}`;
    } else {
      // server-side error
      errorMessage = `${error.error.resposta[0]}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
