import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestandoService {
  //função para verificar se ProductService está executado corretamente 
  unitario(mensagemTeste: any) {
    console.log(mensagemTeste)
  }
}