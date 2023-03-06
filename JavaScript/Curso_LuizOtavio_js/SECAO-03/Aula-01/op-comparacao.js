// OPERADORES DE COMPARAÇÃO:
// 1) >   Maior que;
console.log(10 > 5);

// 2) >=  Maior que ou igual a;
console.log(10 >= 5);
console.log(10 >= 10);
console.log(1 >= 2);

// 3) <   Menor que;
console.log(10 < 5);

// 4) <=  Menor que ou igual a;
console.log(10 <= 11);
console.log(10 <= 10);
console.log(2 <= 1);

// 5) ==  Igualdade (Compara valores); *** Recomendado não utilizar
const num1 = 10;
const num2 = '10';
const comp = num1 == num2;
console.log(comp); // output >>> true, repare que os valores são iguais mas o tipo de dado não.

// 6) === Igualdade estrita (Compara valores e tipo de dado);
const num3 = 10;
const num4 = '10';
const novaComp = num1 === num2;
console.log(novaComp); // output >>> false, pois compara valores e tipos de dados.

// 7) !=  Diferente (Compara valores); *** Recomendado não utilizar
const a = 10;
const b = '10';
console.log(a != b); // output >>> false

// 8) !== Diferente estrito (Compara valores e tipo de dado);
const A = 10;
const B = '10';
console.log(A !== B); // output >>> true
