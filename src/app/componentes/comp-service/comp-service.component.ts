import { Component } from '@angular/core';
//importando os recurso necessários
import { Produto } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-comp-service',
  templateUrl: './comp-service.component.html',
  styleUrls: ['./comp-service.component.css'],
  providers:[ProductService]
})
export class CompServiceComponent {
  //casting das propriedades que serão usadas
  cestaProdutos!: Produto[]


  //chamando o constructor
  constructor(private objDoService: ProductService) {
  
  }

  //criando uma função para - através do uso do objeto criado - acessar a lista de produtos
  acessandoListaProdutos() {
    this.cestaProdutos = this.objDoService.getProdutos()
  }
}