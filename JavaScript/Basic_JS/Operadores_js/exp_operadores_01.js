// 1. Inicializando as variáveis
const num1 = 3;
const num2 = 10;
const num3 = '5';

//-> + Adição e Concatenação de Strings;
let soma_numeros = num1 + num2;
let soma_string = num1 + num3;
console.log(`3 + 10 = ${soma_numeros}`);
console.log(`Perceba que ao tentar somar um number com uma string  o resultado será uma concatenação, veja: 3 + 5 = ${soma_string}.\nTipo de Dado resultante:`, typeof (soma_string));

//-> - Subtração;
let subtracao = num2 - num1;
let subtracao_string = num3 - num2;
console.log(`Subtraindo num2 - num1 temos ${subtracao}.\nQuando tentamos subtrair num3 - num2 temos o seguinte retorno: ${subtracao_string}. Isso pq apesar de num3 ser uma string, em razão da tipagem fraca do javascript, a operação é forçada a acontecer. Neste caso, se printarmos o tipo de dado resultante veremos que o retorno será um Number, veja: ${typeof (subtracao_string)}. Contudo algumas operações poderão trazer o retorno NaN que significa Not a Number.\nDesse modo é interessante conhecer formas de conversão de tipos como abaixo:`);

let teste1 = '5';
console.log(typeof (teste1));
let teste2 = parseInt(teste1);
let teste3 = parseFloat(teste1);
let teste4 = Number(teste1);

console.log(`Tipo de dado teste1: ${typeof (teste1)};\nTipo de dado teste2: ${typeof (teste2)};\nTipo de dado teste3: ${typeof (teste3)};\nTipo de dado teste4: ${typeof (teste4)}.`)