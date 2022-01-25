import { Produto } from './product'
import { TestandoService } from './testando.service';
import { Injectable } from '@angular/core';

@Injectable()


export class ProductService {

  constructor(private resultTeste: TestandoService) {
    this.resultTeste.unitario('Construtor/chamado construido com sucesso!')
  }

  //criar uma função para retornar uma lista de produtos
  public getProdutos() {
    this.resultTeste.unitario('Método/função getProdutos chamado superultra top!!')

    //propriedade que será a lista de produtos
    let listaProdutos: Produto[]

    //criando os itens de produtos
    listaProdutos = [
      new Produto(1, 'Quadro Baby Yoda', 199),
      new Produto(2, 'Mascara Darth Vader', 159),
      new Produto(3, 'Lightsaber', 89)
    ]
    this.resultTeste.unitario(listaProdutos)
    //retorno da lista montada/criada
    return listaProdutos
  }
}
