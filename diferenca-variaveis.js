console.log("\n=== DIFERENCA VARIAVEIS ===");

// Ecmascript
// Em 2015 (Antes Jun) - ES5 (var)
// Em 2015 (Depois Jun) - ES6 (let, const)

// VAR
var escola = "Lets Code";
var escola = "Ada"; // redeclaração (recriar na memória) - PERMITIDO
escola = "Concorrente"; // reatribuição (mudar o valor) - PERMITIDO
console.log("escola", escola);

// LET
let company = "Lets Code";
// let company = "Ada"; // redeclaração (recriar na memória) - PROIBIDO
company = "Concorrente"; // reatribuição (mudar o valor) - PERMITIDO
console.log("company", company);

// CONST
const empresa = "Lets Code";
// const empresa = "Ada"; // redeclaração (recriar na memória) - PROIBIDO
// empresa = "Concorrente"; // reatribuição (mudar o valor) - PROIBIDO
console.log("empresa", empresa);
