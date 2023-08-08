console.log("=== CALCULADORA ===");

const calcular = function () {
  // console.log("Funcionou?");

  // Entrada
  const n1 = parseInt(document.getElementById("n1").value || 0);
  const n2 = parseInt(document.getElementById("n2").value || 0);
  const operator = document.getElementById("operador").value;
  console.log(n1, operator, n2);

  /* Implementação Alternativa (<select>)
  const itemSelected =
    document.getElementById("operador").options.selectedIndex;

  const operator =
    document.getElementById("operador").options[itemSelected].value;
  */

  // Processamento
  let result;

  switch (operator) {
    case "add":
      result = n1 + n2;
      break;

    case "sub":
      result = n1 - n2;
      break;

    case "mul":
      result = n1 * n2;
      break;

    case "div":
      result = n1 / n2;
      break;

    case "pot":
      result = n1 ** n2;
      break;
  }

  // Saída
  document.getElementById("result").value = result;
};

// DESAFIO - FAZER UM PROGRAMA DE COMPARAÇÃO LÓGICA

/*
> MAIOR QUE
< MENOR QUE
>= MAIOR OU IGUAL
<= MENOR OU IGUAL
!= DIFERENTE
== IGUALDADE
*/
