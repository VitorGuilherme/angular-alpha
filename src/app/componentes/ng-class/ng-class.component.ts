import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  //criando a primeira propriedade para vincular com ngClass
  cssAlteradoViaVar: string = 'color size'
  objCSS: PropsCss = new PropsCss()
}
//criando uma classe com propriedade CSS
class PropsCss {
  color: boolean = true
  size: boolean = true
}