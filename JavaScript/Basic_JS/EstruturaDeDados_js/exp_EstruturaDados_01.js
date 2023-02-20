//Tipos de dados primitivos: string, number, undefined, null, boolean, symbol

const nome = 'Lucas'; // tipo de dado string. 
const idade = 36; // tipo de dado number.
const peso = 88.6; // tipo de dado number (mesmo sendo um número de ponto flutuante).
let sobrenome; // tipo de dado undefined.
const dado = null; // tipo de dado null; 
const aprovado = true; // tipo de dado boolean
const cursando = false; // tipo de dado boolean

// O tipo de dado symbol será visto mais adiante, em que pese também ser um tipo de dado primitivo.

// Para descobrir o tipo de dado de uma variável basta utilizar a funnção typeof, veja:

console.log(typeof nome, nome);
console.log(typeof idade, idade);
console.log(typeof peso, peso);
console.log(typeof sobrenome, sobrenome);
console.log(typeof dado, dado);
console.log(typeof aprovado, aprovado);
console.log(typeof cursando, cursando);
