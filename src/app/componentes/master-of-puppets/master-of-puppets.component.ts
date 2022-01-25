// este é o componente-pai
import { Component } from '@angular/core';

@Component({
  selector: 'app-master-of-puppets',
  templateUrl: './master-of-puppets.component.html',
  styleUrls: ['./master-of-puppets.component.css']
})
export class MasterOfPuppetsComponent{
// criar uma função para receber e "tratar" os dados enviados pelo componenente-filho
public recebendoDados(dadosRecebidos:any): void {
  // variavel que "acessará" os dados
  let receptora: string = 'Obrigado por se cadastrar ' + dadosRecebidos.nome + '.';
  receptora = receptora + ' O email ' + dadosRecebidos.email + ' foi cadastrado com sucesso!'


  // chamar a janela aberta
  alert(receptora)
}
}

/* // criar duas propriedades para enviar os dados para o componente-filho (input component)
public texto: string = 'Texto será exibido no componente'
public outroTexto: string = 'Texto que será exibido na janela de alerta!'*/
