console.log("=== REPETICAO - NA PRATICA ===");

// Arrays
console.log(carros);
console.log(carros.constructor);
carros.push("Celta");
carros.push("Palio");
console.log(carros.length);

// while
let i = 0;

while (i < carros.length) {
  document.write(carros[i], "<br>");
  i++;
}

document.write("<hr>");

// for
for (let i = 0; i < carros.length; i++) {
  const carro = carros[i];
  document.write(carro, "<br>");
}

document.write("<hr>");

// for of (array)
for (const carro of carros) {
  document.write(carro, "<br>");
}

// Objetos
console.log(pessoa);

document.write("<hr>");
document.write(pessoa.nome, "<br>");
document.write(pessoa.altura, "<br>");
document.write(pessoa.peso, "<br>");
document.write(pessoa.sexo, "<br>");

// for in (objetos)
document.write("<hr>");
for (const key in pessoa) {
  console.log(key, pessoa[key]);
  document.write(pessoa[key], "<br>");
}

// Array de Objetos
document.write("<hr>");
console.dir(Array.prototype);
console.log(concessionaria);

// Imprima toda a lista de carros
concessionaria.forEach(function (carro) {
  document.write(`${carro.marca} ${carro.modelo} - ${carro.ano}`, "<br>");
});

document.write("<hr>");

concessionaria
  .filter(function (carro) {
    return carro.ano > 2020;
  })
  .forEach(function (carro) {
    document.write(`${carro.marca} ${carro.modelo} - ${carro.ano}`, "<br>");
  });

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
