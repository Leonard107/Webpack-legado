const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(ojbeto){
    return { ...ojbeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta bic Azul'

console.log(produto, novoProduto)