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
    },
    {
      conteudo: 'Temos de descobrir segurança dentro de nós próprios. Durante o curto espaço de tempo da nossa vida precisamos encontrar o nosso próprio critério de relações com a existência em que participamos tão transitoriamente. Otimismo é esperar pelo melhor. Confiança é saber lidar com o pior.',
      autoria: 'Boris Pasternak',
      modelo: 'modelo3'
    }
  ];
}
