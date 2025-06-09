document.getElementById('form-cadastro').addEventListener('submit', function (event) {
  event.preventDefault();

  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // filtra itens válidos
  carrinho = carrinho.filter(item =>
    item && typeof item.nome === 'string' && !isNaN(Number(item.preco))
  );

  // itens válidos
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio. Adicione itens antes de finalizar o pedido.");
    return;
  }

  // calcula + lista de itens
  let total = 0;
  let listaItens = "<ul>";
  carrinho.forEach(item => {
    const preco = Number(item.preco);
    total += preco;
    listaItens += `<li>${item.nome} - R$ ${preco.toFixed(2)}</li>`;
  });
  listaItens += "</ul>";

  // pega dados formulário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const cpf = document.getElementById('cpf').value;
  const endereco = document.getElementById('endereco').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;

  // resumo do pedido e dados do cliente
  const resumo = `
    <h2>RESUMO DO PEDIDO</h2>
    <p><strong>Cliente:</strong> ${nome}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>CPF:</strong> ${cpf}</p>
    <p><strong>Endereço:</strong> ${endereco}</p>
    <p><strong>Cidade:</strong> ${cidade}</p>
    <p><strong>Estado:</strong> ${estado}</p>
    <h3>ITENS DO CARRINHO:</h3>
    ${listaItens}
    <p><strong>Total: R$ ${total.toFixed(2)}</strong></p>
    <p style="color: green; font-weight: bold;">Pedido realizado com sucesso!</p>
  `;

  const resumoDiv = document.getElementById('resumo-pedido');
  resumoDiv.innerHTML = resumo;
  resumoDiv.style.display = 'block';

  // limpa
  localStorage.removeItem('carrinho');

  // limpa o formulário
  this.reset();
});
