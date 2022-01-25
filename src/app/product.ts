// esse é o nosso domain
export class Produto {
    constructor(idProduto: number, nomeProduto: string,
        precoProduto: number) {
        this.idProduto = idProduto;
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
    }

    idProduto: number;
    nomeProduto: string;
    precoProduto: number;
}