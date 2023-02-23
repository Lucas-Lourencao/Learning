// Regras para inicialização de variáveis:
/*
1. Não pode,os criar constantes com palavras reservadas;
2. Constantes precisam ter nomes significativos, ou seja, que indiquem algum significado;
3. Não podem começar com número;
4. Não podem conter espaços ou traços;
5. Podem ser descritas no modelo camelCase;
6. São case sensitives;
7. Não é possível modificar o valor de uma constante;
8. Não utilize VAR, utilize CONST;
9. Diferente das variáveis LET as variáveis constantes (CONST) devem receber um valor para ser inicializadas;
*/
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