function adicionarCarrinho(nome, preco) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push({ nome: nome, preco: preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  var msg = document.getElementById('msg-sucesso');
  if (msg) {
    msg.textContent = `${nome} adicionado ao carrinho!`;
    msg.style.display = 'block';
    setTimeout(function () {
      msg.style.display = 'none';
    }, 2000);
  }
}

function atualizarAoCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let total = 0;
  let lista = '';

  carrinho.forEach(function (item, index) {
    let precoValido = parseFloat(item.preco);
    if (isNaN(precoValido)) return;
    total += precoValido;
    lista += `<li>${item.nome} - R$ ${precoValido.toFixed(2)}
                <button onclick="removerDoCarrinho(${index})" style="margin-left:10px;">❌</button>
              </li>`;
  });

  const carrinhoBox = document.querySelector('.carrinho-box');
  if (carrinhoBox) {
    if (carrinho.length > 0 && lista !== '') {
      carrinhoBox.innerHTML = `
        <h2 class="titulo-carrinho">Itens do seu Carrinho</h2>
        <ul>${lista}</ul>
        <p><strong>Total: R$ ${total.toFixed(2)}</strong></p>
      `;
    } else {
      carrinhoBox.innerHTML = 'Você ainda não adicionou nenhum item ao carrinho.';
    }
  }
}

function removerDoCarrinho(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarAoCarrinho();
}

document.addEventListener('DOMContentLoaded', function () {
  atualizarAoCarrinho();
});
