const nome = 'Lucas';
console.log(nome);

//nome = 'teste'; // Tentativa de alterar o valor de uma constante resultará em erro sintático;
//console.log(nome); // TypeError: Assignment to constant variable.

const primeiroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = '15';

console.log('O resultado da soma do primeiroNumero com o segundoNumero é', primeiroNumero + segundoNumero + ', cujo tipo de dado é um', typeof (primeiroNumero + segundoNumero) + '.');
console.log('==*==')
console.log('O resultado da soma do primeiroNumero com o terceiroNumero é', primeiroNumero + terceiroNumero + ', cujo tipo de dado é um', typeof (primeiroNumero + terceiroNumero) + ', uma concatenação forçada de um number com uma string resultando numa string graças a tipagem fraca do JS.');