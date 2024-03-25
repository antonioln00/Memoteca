import { Router, ActivatedRoute } from '@angular/router';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { ServicePensamentoService } from '../../../service/service-pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private _service: ServicePensamentoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id')
    this._service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  editarPensamento() {
    this._service.editar(this.pensamento).subscribe(() => {
      this._router.navigate(['/listarPensamento'])
    })

  }

  cancelar() {
    this._router.navigate(['/listarPensamento'])
  }

}
