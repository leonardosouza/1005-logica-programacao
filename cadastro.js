console.log("=== CADASTRO ===");

const cadastrar = () => {
  try {
    adicionarItemCarrinho();
  } catch (error) {
    alert(error);
  }

  atualizarTabela();
  limparTodosOsCampos();
};

function adicionarItemCarrinho() {
  // Capturar dados de entrada
  const produto = document.querySelector("#produto").value;
  const quant = Number(document.querySelector("#quant").value);
  const preco = Number(document.querySelector("#preco").value);

  // Criando um objeto (item / produto)
  const item = {
    produto,
    quant,
    preco,
  };

  // Adicionando item / produto no array (carrinho)
  if (produto.length >= 3 && quant != 0 && preco != 0) {
    carrinho.push(item);
    localStorage.items = JSON.stringify(carrinho);
    return;
  }
  // alert("Por favor preencha os campos do formulários!");
  throw new Error("Por favor preencha os campos!");
}

function atualizarTabela() {
  // Gerando as linhas da tabela
  const trs = carrinho
    .map((item) => {
      return `<tr>
      <td>${item.produto}</td>
      <td>${item.quant}</td>
      <td>${item.preco.toFixed(2)}</td>
      <td>${(item.preco * item.quant).toFixed(2)}</td>
    </tr>`;
    })
    .join("");

  // Atualizando a tabela
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = trs;
}

function limparTodosOsCampos() {
  const inputs = Array.from(document.querySelectorAll("input"));

  inputs
    .map((input) => {
      input.value = "";
      return input;
    })
    .shift()
    .focus();
}

const carrinho = JSON.parse(localStorage.items) || [];
atualizarTabela();
