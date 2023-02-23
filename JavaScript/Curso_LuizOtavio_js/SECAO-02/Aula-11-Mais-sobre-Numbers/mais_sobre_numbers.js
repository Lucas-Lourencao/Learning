let num1 = 1;
let num2 = 2.5;
let num3 = 1500;
let num4 = 10.5789551255547;
let temp = num4 * "olá";

//1) soma 
console.log(num1 + num2); //resultado = 3.5

//2) convertendo um number para uma string - concatenação
console.log(num1.toString() + num2); //resultado = 12.5

//3) convertendo uma string para um binário
console.log(num3.toString(2));

//4) arredondando um number de ponto flutuante
console.log(num4.toFixed(2));

//5) verificando o tipo de dado
console.log(Number.isInteger(num1));
console.log(temp)
console.log(Number.isNaN(temp))

//6) Precisão de numeros
let num5 = 0.7;
let num6 = 0.1;
let num7 = 0.3;


// repare que a soma não resultará em um valor exato
console.log(num5 + num6) // 0.7999999999999999

num5 += num6;
num5 += num6;
num5 += num6;

console.log(num5) // resultado = 0.9999999999

// Forma de tratar esta imprecisão:
//6.1) Forma equivocada:
num5 = num5.toFixed(2);
console.log(num5, Number.isInteger(num5)) //resultado 1, false

num7 += num6;
num7 += num6;
num7 += num6;
num7 += num6;
num7 += num6;
num7 += num6;
num7 += num6;

console.log(num7, Number.isInteger(num7)); // resultado: 0.99999999, false

//6.2) Forma correta:
//6.2.1)
num5 = parseFloat(num5);
console.log(num5, Number.isInteger(num5)); //resultado 1, true

//6.2.2)
num7 = Number(num7.toFixed(2));
console.log(Number.isInteger(num7));





