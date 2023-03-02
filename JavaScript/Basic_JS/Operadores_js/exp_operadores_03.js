// 3. Inicializando as variáveis
const num1 = 3;
const num2 = 10;
const num3 = '5';

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