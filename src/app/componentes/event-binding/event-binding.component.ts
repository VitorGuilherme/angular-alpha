import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  //vamos implementar uma função para ser vinculada na view via event-binding
  public exibirAlerta(): void {
    console.log('Evento disparado. Leitura via terminal do browser!')
    alert('Evento disparado. Função chamada! Dados vinculados!')
  }
}
