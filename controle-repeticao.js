console.log("=== CONTROLE DE REPETICAO ===");

document.write("<h3>Números de 1 à 10 (um por linha)</h3>");

let num = 1,
  limit = 10;

while (num <= limit) {
  document.write(num, "<br>");
  // num = num + 1;
  // num += 1;
  num++;
}

document.write("<hr>");
document.write("<h3>Números de 50 à 1 (separado por espaço)</h3>");

num = 50;
limit = 0;

while (num > limit) {
  document.write(num, " ");
  // num = num - 1;
  // num -= 1;
  num--;
}

document.write("<hr>");
document.write("<h3>Números Pares de 100 à 200 (separado por traço)</h3>");
// 100 - 102 - 104 ... 198 - 200

num = 100;
limit = 200;

while (limit >= num) {
  //   if (num != limit) {
  //     document.write(num + " - ");
  //   } else {
  //     document.write(num);
  //   }

  // operador ternário
  // (condition) ? true : false
  document.write(num, num != limit ? " - " : "");
  num += 2;
}

document.write("<hr>");
document.write("<h3>Números Ímpares de 99 à 1 (separado por traço)</h3>");

num = 99;
limit = 1;

while (num >= limit) {
  num == 1 ? document.write(num) : document.write(num + " - ");
  num -= 2;
}

document.write("<hr>");
document.write("<h3>Sorteio</h3>");
/*
const numGerado = parseInt(Math.random() * 10);
let chute;

do {
  chute = prompt("Chute um número (0-10):");

  if (chute == numGerado) {
    document.write(`Você acertou o número ${chute} !!!`);
  }
} while (chute != numGerado);
*/

document.write("<hr>");
document.write("<h3>Números de 1 à 10 com Loop While</h3>");

num = 1;
limit = 10;

while (num <= limit) {
  document.write(num, " ");
  num++;
}

document.write("<hr>");
document.write("<h3>Números de 1 à 10 com For Loop</h3>");

// for(preparacao; condicao_logica; incremento_decremento) {}
for (let num = 1, limit = 10; num <= limit; num++) {
  document.write(num, " ");
}
