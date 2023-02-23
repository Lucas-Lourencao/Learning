const num1 = 3;
const num2 = 10;
const num3 = '5'
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
//-> % Resto da divisão - Retorna o resto de uma divisão.;
let restoDivisao = num2 % num1;
console.log(restoDivisao);
//-> // Divisor Inteiro;
console.log(`Diferentemente de Python, javascript não possui este operador.`)
//-> iteração 
const passo = 2;
let contador = 0;

++contador;
contador++;
contador = contador + 1;
contador += 1;

//Repare que é possível aumentar a dose de incremento conforme necessidade. Pode-se utilizar uma variável que atribua o passo ou passando o valor diretamente no incremento. Veja:
contador = contador + passo;
contador += passo;
console.log(contador)

console.log(`É importante registrar que o incremento pode ser realizado utilizando todos os tipos de operadores. Veja:`)

const novoPasso = 2
let novoContador = 0;
console.log(novoContador += novoPasso);
console.log(novoContador *= novoPasso);
console.log(novoContador **= novoPasso);
console.log(novoContador /= novoPasso);
console.log(novoContador %= novoPasso);