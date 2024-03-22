import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { ServicePensamentoService } from '../../../service/service-pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private _servicePensamento: ServicePensamentoService, private _router: Router, private _route: ActivatedRoute)
    { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this._servicePensamento.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this._servicePensamento.excluir(this.pensamento.id!).subscribe(() => {
        this._router.navigate(["/listarPensamento"])
      })
    }
  }

  cancelar() {
    this._router.navigate(["/listarPensamento"])
  }
}
