import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
//criando as propriedades para vincular via ngStyle
cores: string = '#380F6C'
tamanho: number = 12
//instancia da classe
objStyle: EstiloCss = new EstiloCss()
}

//crinado a classepara vincular a diretiva ngStyle
class EstiloCss{
  'color': string = '#33C9FF'
  'font-size.%': number = 80
  'font-weight': string = 'bold'
}