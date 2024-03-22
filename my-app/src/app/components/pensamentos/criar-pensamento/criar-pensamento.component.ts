import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { ServicePensamentoService } from '../../../service/service-pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private _servicePensamento: ServicePensamentoService, private _router: Router ) {

  }

  criarPensamento(){
    this._servicePensamento.criar(this.pensamento).subscribe(() => {
      this._router.navigate(['/listarPensamento'])
    })
  }

  cancelar(){
    this._router.navigate(['/listarPensamento'])
  }
}
