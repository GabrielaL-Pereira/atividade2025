let carrinho = []; 

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco});
  atualizarCarrinho();
}
  
function atualizarAoCarrinho () {
  let total = 0;
  let lista = '';
}

carrinho.forEach(item => {
  total += item.preco;
  lista += `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`;
});

const carrinhoBox = document.querySelector('.carrinho-box');
if (carrinhoBox) {
  if (carrinho.length > 0) {
    carrinhoBox.innerHTML = `
      <h2 class="titulo-carrinho">Itens do seu Carrinho</h2>
      <ul>${lista}</ul>
      <p><strong></strong></p>
`;
} else {
  carrinhoBox.innerHTML = `Você ainda não adicionou nenhum item ao carrinho.`;
  }
}