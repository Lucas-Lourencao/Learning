let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

/* Modo 01 - Criando uma variável temporária
const varATemp = varA
varA = varB;
varB = varC;
varC = varATemp; 

console.log(varA, varB, varC);*/

// Modo 02 - Sem criar uma variável temporária - Será explicado mais adiante.
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);