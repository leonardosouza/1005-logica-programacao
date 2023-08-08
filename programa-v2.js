console.log("=== MEU SEGUNDO PROGRAMA ===");

function converter() {
  // Entrada
  let nome = document.getElementById("nome").value;

  // Processamento
  nome = nome.toUpperCase();

  // Saída
  document.getElementById("resultado").innerText = nome;
}
