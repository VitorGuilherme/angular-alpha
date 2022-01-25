import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  /* criar o "anunciador" do evento que será disparado para enviar os dados para o 
  componente-pai */
  @Output() anunciador = new EventEmitter<any>()

  // criar o objeto literal - conjunto de dados - que será enviado
  public objDados: any = {}

  //função para enviar os dados
  public enviarDados(): void {
    this.anunciador.emit(this.objDados)
  }
}