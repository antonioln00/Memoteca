import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love angular',
    autoria: 'Antonio Léo Neto',
    modelo: 'modelo3'
  };

  ngOnInit(): void {
  }

  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
      return 'pensamento-p'
  }

}
