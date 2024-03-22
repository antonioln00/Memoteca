import { ServicePensamentoService } from '../../../service/service-pensamento.service';
import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {

  constructor(private _service: ServicePensamentoService) {

  }
  listaPensamentos: Pensamento[] = [];

  ngOnInit(): void {
    this._service.listar().subscribe((listaPensamentos) => this.listaPensamentos = listaPensamentos);
  }
}
