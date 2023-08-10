console.log("=== CONDICIONAIS ===");

/* Operadores de Comparação
> MAIOR QUE
< MENOR QUE
>= MAIOR OU IGUAL
<= MENOR OU IGUAL
!= DIFERENTE
== IGUALDADE
*/

// Entrada
const nota = Number(prompt("Digite a nota do aluno:"));
let resultado = "Reprovado";
const notaCorte = 7;
const notaMax = 10;
const notaMin = 0;

// Processamento
if (nota >= notaCorte) {
  resultado = "Aprovado";
}

if (nota > notaMax) {
  resultado = "Nota Inválida!";
}

if (nota < notaMin) {
  resultado = "Nota Inválida!";
}

// Saída
console.log(nota);
document.write(`Nota: ${nota} <br>`);
document.write(`Resultado: ${resultado}`);
