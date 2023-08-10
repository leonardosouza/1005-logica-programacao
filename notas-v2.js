console.log("=== CONDICIONAIS ===");

/* Operadores de Comparação
> MAIOR QUE
< MENOR QUE
>= MAIOR OU IGUAL
<= MENOR OU IGUAL
!= DIFERENTE
== IGUALDADE
*/

/* Operadores Lógicos
E (AND) - &&
OU (OR) - ||
NÃO (NOT) - !
*/

// Entrada
const nota = Number(prompt("Digite a nota do aluno:"));
let resultado = "Nota Inválida!";

// Processamento
if (nota >= 0 && nota < 5) {
  resultado = "Reprovado";
} else if (nota >= 5 && nota < 7) {
  resultado = "Recuperação";
} else if (nota >= 7 && nota <= 10) {
  resultado = "Aprovado";
}

// Saída
console.log(nota);
document.write(`Nota: ${nota} <br>`);
document.write(`Resultado: ${resultado}`);
