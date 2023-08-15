console.log("=== IMC ===");

const calcularImc = () => {
  console.log("Calculando...");
  // Entrada
  const peso = document.querySelector("#peso").value;
  const altura = document.querySelector("#altura").value;
  console.log(peso, altura);

  // Processamento
  const imc = (peso / (altura * altura)).toFixed(1);
  console.log(imc, typeof imc, isNaN(imc));

  let faixa = "Informe o peso e a altura!!!";

  if (imc < 18.5) {
    faixa = "abaixo do peso";
  } else if (imc <= 24.9) {
    faixa = "peso normal";
  } else if (imc <= 29.9) {
    faixa = "sobrepreso";
  } else if (imc <= 34.9) {
    faixa = "obesidade classe I";
  } else if (imc <= 39.9) {
    faixa = "obesidade classe II";
  } else {
    faixa = "obesidade classe III";
  }

  // Saída
  if (!isNaN(imc)) {
    document.querySelector(
      "#result"
    ).innerText = `Seu IMC é de ${imc} e sua classificação é ${faixa}`;
  } else {
    document.querySelector("#result").innerText = `${faixa}`;
  }
};
