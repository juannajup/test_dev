import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Proposta } from 'src/app/shared/models/proposta';
import { ActivatedRoute, Router } from '@angular/router';
import { PropostasService } from '../propostas.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-proposta',
  templateUrl: './editar-proposta.component.html'
})
export class EditarPropostaComponent implements OnInit {

  formEditar: FormGroup;
  idProposta: string;
  proposta: Observable<Proposta>;

  constructor(
    private formBuilder: FormBuilder,
    private propostasService: PropostasService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.idProposta = this.route.snapshot.params.id;
  }

  ngOnInit() {

    this.formEditar = this.formBuilder.group({
      nomeCliente: ['', Validators.required],
      dataProposta: [''],
      valor: ['', Validators.required],
      veiculoId: [''],
      id: [''],
    });

    this.proposta = this.propostasService
      .propostaPorId(this.idProposta)
      .pipe(tap(proposta => this.formEditar.patchValue(proposta)));

  }

  editarProposta() {

    this.formEditar.value.veiculo = null;

    this.propostasService
      .atualizar(this.formEditar.value)
      .subscribe(() => {
        this.router.navigate(['/propostas']);
      });
  }

}
