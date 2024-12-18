let total = 0;
limpar()

function adicionar() {
    //recupera o produto
    let produto = document.getElementById('produto').value;

    //separa o nome e o valor do produto
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    //recupera a quantidade
    let quantidade = document.getElementById('quantidade').value;

    //calcula subtotal
    let preco = quantidade * valorUnitario;

    //cria a section para todos os produtos adicionando no carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span> </section>`;

    //calcula o valor total
    total = total + preco;
    let totalGeral = document.getElementById('valor-total');
    totalGeral.textContent = `R$ ${total}`;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}