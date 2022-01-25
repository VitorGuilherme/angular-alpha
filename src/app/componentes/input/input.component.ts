// este será o componente-filho
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  //  criar as propriedades e defini-las como entrada de dados
  @Input() public mensagem: string = ''
  @Input('alerta') public outraMensagem: string = ''

  //criar a função para ser disparada via event-binding
  public exibirMensagem(): void{
    alert(this.outraMensagem)
  }
}