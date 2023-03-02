// 2. Inicializando as variáveis
const num1 = 3;
const num2 = 10;
const num3 = '5';

// -> * Multiplicação;
let produto_numeros = num1 * num2;
let produto_numero_string = num2 * num3;
const num4 = 'L5'
let produto_numero_stringRaiz = num3 * num4
console.log(produto_numeros, produto_numero_string, produto_numero_stringRaiz, '\nRepare que a terceira multiplicação retornou o NaN. Isso se deu em razão da impossibilidade de converter a string para um number.')

//-> / Divisão;
let divisao = num2 / num1;
console.log(divisao, typeof (divisao), `\nRepare que o JS não distingue o tipo de dado Int e Float.`);

//-> ** Exponenciação;
let exponenciacao = num1 ** num2;
console.log(exponenciacao);