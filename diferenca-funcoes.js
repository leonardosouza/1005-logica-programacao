console.log("\n=== DIFERENCA FUNCOES ===");

// Declaração de Função - Nomeada
function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}

// Execução de Função - Nomeada
console.log("result 1:", soma()); // 0
console.log("result 2:", soma(5)); // 5
console.log("result 3:", soma(5, 3)); // 8

// Declaração de Função - Anonima
const multiplica = function (x = 0, y = 1) {
  return x * y;
};

// Execução de Função - Anonima
console.log("result 1:", multiplica()); // 0
console.log("result 2:", multiplica(2)); // 2
console.log("result 3:", multiplica(2, 3)); // 6

// Arrow Function - Exemplo 1
/*const sum = (a = 0, b = 0) => {
  return a + b;
};*/

const sum = (a = 0, b = 0) => a + b;

// Execução da Arrow Function
console.log("result 1:", sum()); // 0
console.log("result 2:", sum(5)); // 5
console.log("result 3:", sum(5, 3)); // 8

// Arrow Function - Exemplo 2
const greetings = apelido => `Bom Dia! ${apelido || ""}`;

// Execução da Arrow Function
console.log("Greetings:", greetings());
console.log("Greetings:", greetings("Leozão"));
