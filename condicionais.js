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
switch (nota) {
  case 10:
  case 9.75:
  case 9.5:
  case 9.25:
  case 8.75:
  case 8.5:
  case 8.25:
  case 7.75:
  case 7.5:
  case 7.25:
  case 7:
    resultado = "Aprovado";
    break;

  case 6.75:
  case 6.5:
  case 6.25:
  case 6:
  case 5.75:
  case 5.5:
  case 5.25:
  case 5:
    resultado = "Recuperação";
    break;

  case 4.75:
  case 4.5:
  case 4.25:
  case 4:
  case 3.75:
  case 3.5:
  case 3.25:
  case 3:
  case 2.75:
  case 2.5:
  case 2.25:
  case 2:
  case 1.75:
  case 1.5:
  case 1.25:
  case 1:
  case 0.75:
  case 0.5:
  case 0.25:
  case 0:
    resultado = "Reprovado";
    break;

  default:
    resultado = "Nota Inválida!";
    break;
}

// Saída
console.log(nota);
document.write(`Nota: ${nota} <br>`);
document.write(`Resultado: ${resultado}`);
