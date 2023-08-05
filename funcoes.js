console.log("\n=== FUNCOES ===");

// Declaração da Função
function saudacao(nome = "", sobrenome = "") {
  // var mensagem = "Boa noite " + nome + " " + sobrenome + "!";
  var mensagem = `Boa noite ${nome} ${sobrenome}`;
  return mensagem;
}

// Execução da Função
var saida1 = saudacao();
var saida2 = saudacao("Leonardo");
var saida3 = saudacao("Leonardo", "Souza");

console.log("Saída 1:", saida1);
console.log("Saída 2:", saida2);
console.log("Saída 3:", saida3);
