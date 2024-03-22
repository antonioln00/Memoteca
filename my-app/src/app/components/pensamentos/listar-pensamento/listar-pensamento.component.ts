import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'I love angular',
      autoria: 'Antonio Léo Neto',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha aplicação é decorada com @Input',
      autoria: 'Antonio Léo Neto',
      modelo: 'modelo2'
    }
  ];
}
