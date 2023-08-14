console.log("=== ESTRUTURA DE DADOS===");

// Arrays
// Uma chave criada na memória para guardar um conjunto de informações

// API
console.dir(Array.prototype);

// Sintaxe
// OOP ou POO
// Explicito
const carros = new Array("Gol", "Palio", "IX35", "Tucson", "Marea");
carros.push("Ferrari"); // add no final array
carros.unshift("Fusca"); // add no inicio array
carros.splice(2, 0, "Uno"); // add na posicao especifica
carros.splice(3, 1, "Corsa"); // substitui na posicao especifica
carros.splice(1, 1); // remove na posicao especifica
carros.pop(); // remove o ultimo elemento
carros.shift(); // remove o primeiro elemento
carros.sort(); // ordenar (alfabeticamente)
carros.reverse(); // inverter

console.log(carros, carros.constructor);
console.log("");

// Literal
// Implicito
const autos = ["Gol", "Palio", "IX35", "Tucson", "Marea"];
autos.push("Ferrari"); // add no final array
autos.unshift("Fusca"); // add no inicio array
autos.splice(2, 0, "Uno"); // add na posicao especifica
autos.splice(3, 1, "Corsa"); // substitui na posicao especifica
autos.splice(1, 1); // remove na posicao especifica
autos.pop(); // remove o ultimo elemento
autos.shift(); // remove o primeiro elemento
autos.sort(); // ordenar (alfabeticamente)
console.log(autos, autos.constructor);

// Objetos

/* MÁ PRATICA
const pessoa1 = ["Leonardo", 1.87, 100, "M", true];
const pessoa2 = ["Maria", 1.6, 70, "F", false];
*/

// Sintaxe
// OOP ou POO
const pessoa = new Object();
pessoa.nome = "Maria";
pessoa.altura = 1.6;
pessoa.peso = 70;
pessoa.sexo = "F";
pessoa.dev = false;
console.log(pessoa);

// Literal
const people = {
  nome: "Leonardo",
  altura: 1.87,
  peso: 100,
  sexo: "M",
  dev: true,
};
console.log(people);

// Juntando Tudo
const car = {
  marca: "Chevrollet",
  cor: "vermelho",
  ano: 1997,
  modelo: "Vectra",
  placas: "XBC-8915",
  portas: 2,
  combustivel: "G",
  acessorios: ["bancos de couro", "aerofolio", "turbo", "rebaixado", "radio"],
  oKM: false,
  localidade: {
    cidade: "Rio de Janeiro",
    uf: "RJ",
  },
};

console.log(car);

const concessionaria = [
  {
    marca: "Chevrollet",
    cor: "vermelho",
    ano: 1997,
    modelo: "Vectra",
  },
  {
    marca: "Fiat",
    cor: "preto",
    ano: 2008,
    modelo: "Palio",
  },
  {
    marca: "VW",
    cor: "preto",
    ano: 2012,
    modelo: "Fox",
  },
];
console.table(concessionaria);
