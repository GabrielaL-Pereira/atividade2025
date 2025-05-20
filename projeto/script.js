function carregarDados() {
    const jsonData = '{"nome": "Carlos", "idade": 40}';
    const objeto = JSON.parse(jsonData);
    document.getElementById("resultado").innerText = `Nome: ${objeto.nome}, Idade: ${objeto.idade}`;
  }
  
  const clientes = [
    {
      nome: "João Silva",
      endereco: "Rua das Flores, 123",
      dataNascimento: "1985-03-15",
      cpf: "123.456.789-00"
    },
    {
      nome: "Maria Oliveira",
      endereco: "Avenida Brasil, 456",
      dataNascimento: "1990-07-22",
      cpf: "987.654.321-11"
    },
    {
      nome: "Carlos Souza",
      endereco: "Travessa da Paz, 789",
      dataNascimento: "1978-12-03",
      cpf: "321.654.987-22"
    }
  ];
  
  const tbody = document.querySelector("#tabela-clientes tbody");
  const listarBtn = document.getElementById("listar-btn");
  
  listarBtn.addEventListener("click", function () {
    tbody.innerHTML = "";
  
    clientes.forEach(cliente => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${cliente.nome}</td>
        <td>${cliente.endereco}</td>
        <td>${cliente.dataNascimento}</td>
        <td>${cliente.cpf}</td>
      `;
  
      tbody.appendChild(row);
    });
  });
  
    function adicionarAoCarrinho(produto) {
      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      if (!carrinho.includes(produto)) {
        carrinho.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        alert(`${produto} adicionado ao carrinho!`);
      } else {
        alert(`${produto} já está no carrinho.`);
      }
    }