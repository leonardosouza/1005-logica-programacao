console.log("=== FOREACH ===");

// Array Literal
let carrinho = [];

const celular = {
  nome: "celular",
  marca: "Apple",
  modelo: "Iphone X",
  preco: 5000.0,
  quant: 3,
};

const notebook = {
  nome: "notebook",
  marca: "Sony",
  modelo: "Vaio",
  preco: 3500.0,
  quant: 5,
};

carrinho.push(celular);
carrinho.push(notebook);
console.table(carrinho);

// HOC (High Order Function)
// Função Nomeada
function pegaProdutos(produto, index) {
  console.log(index, produto);
}

carrinho.forEach(pegaProdutos);

// Função Anonima
carrinho.forEach(function (produto, index) {
  console.log(index, produto);
});

// Arrow Function
console.log(
  carrinho.forEach((produto, index) => {
    return produto.preco * produto.quant;
  })
);

// console.log(carrinho);

console.log("=== MAP ===");

console.table(
  carrinho.map((produto, index) => {
    // destructuring
    const { quant, preco, marca, nome } = produto;

    // return {
    //   nome,
    //   marca,
    //   preco,
    //   quant,
    //   total: quant * preco,
    // };

    // spread operator
    return {
      ...produto,
      total: quant * preco,
    };
  })
);

console.table(carrinho);

console.log("=== FILTER ===");

console.table(
  carrinho.filter((item, index) => {
    return item.quant > 3;
  })
);

console.table(carrinho);

console.log("=== REDUCE ===");

const quantTotal = carrinho.reduce(function (acc, current) {
  console.log(acc, current.quant);
  return acc + current.quant;
}, 10);

console.log(quantTotal);

const totalEstoque = carrinho.reduce(
  (acc, curr) => acc + curr.preco * curr.quant,
  0
);

console.log(totalEstoque);

// DESAFIO - PARA CASA

// *=================*
//  *===============*
//   *=============*
//    *===========*
//     *=========*
//      *=======*
//       *=====*
//        *===*
//         *=*
//          *

console.log("=== DESAFIO - CORRECAO ====");

let ini = 0;
let fim = 20;

for (let x = 0; x < 11; x++) {
  for (let i = 0; i <= 20; i++) {
    if (i == ini || i == fim) {
      document.write("*");
    } else if (i < ini || i > fim) {
      document.write("&nbsp;");
    } else {
      document.write("=");
    }
  }

  document.write("<br>");
  ini++;
  fim--;
}

document.write("<hr>");

// for (let i = 1; i < 20; i += 2) {
//   i < 19
//     ? document.write("&nbsp".repeat(i), "*", "=".repeat(18 - i), "*", "<br/>")
//     : document.write("&nbsp".repeat(i), "*");
// }
