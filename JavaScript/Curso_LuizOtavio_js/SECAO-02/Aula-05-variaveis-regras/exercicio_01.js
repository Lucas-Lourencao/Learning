//*Lucas Lourenção tem 36 anos, pesa 88 Kg, tem 1,85 de altura e seu IMC é de indiceDeMassaCorporal. Lucas nasceu em anoDeNascimento.

const nome = 'Lucas';
const sobrenome = 'Lourenção';
const idade = 36;
const peso = 88;
const alturaEmMetros = 1.85;

let indiceDeMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
let anoDeNascimento = 2023 - idade;

// Retorno utilizando Template String:
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg, tem ${alturaEmMetros / 100} m de altura e seu IMC é de ${indiceDeMassaCorporal}. ${nome} nasceu em ${anoDeNascimento}.`)
