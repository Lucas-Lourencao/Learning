// 1) Inicializando uma variavel
let num1 = 9.50;
let num2 = 9.49;

// 2) Arredondando para baixo
console.log(Math.floor(num1)); // resultado = 9

// 3) Arredondando para cima
console.log(Math.ceil(num2)); // resultado = 10

// 4) Arredondando
console.log(Math.round(num1)); // resultado = 10
console.log(Math.round(num2)); // resultado = 9

// 5) Obtendo o maior elemento de uma serie
console.log(Math.max(1, 2, 3, 4, 12, 28, 35, 5, 7, -4)) // resultado  = 35

// 6) Obtendo omenor elemento de uma serie
console.log(Math.min(1, 2, 3, 4, 12, 28, 35, 5, 7, -4)) // resultado  = -4

// 7) Gerando um numero aleatorio - Perceba que sempre será gerado um número no intervalo [0:1[
let num3 = Math.random().toFixed(2)
console.log(num3)

// 7.1) Se quisermos gerar um numero entre 5 e 10, podemos fazer da seguinte forma:
let num4 = Math.round(Math.random() * 5 + 5);
console.log(num4)

// 8) ATENÇÃO: Em JavaScript ao dividirmos um número por zero não retorna erro, veja:
a = 100 / 0 // resultado = infinity

console.log(`O resultado ${a} é um tipo de dado retornado quando uma operação se aproxima do infinito, como no caso da divisão de um número por outro muito pequeno.

Excepcionalmente, em JavaScript, divisão de números por zero ao invés de gerar um erro, é dado como saída o tipo Infinity.`)

// Potenciação com pow
a = Math.pow(2, 10); // resultado = 1024
b = 2 ** 10; // resultado = 1024

console.log(a, b)

console.log(a == b);