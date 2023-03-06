// OPERADORES LÓGICOS:

// 1) && -> AND -> E
console.log(true && true && true && true);  // output >>> true
console.log(true && false && true && true); // output >>> false. com operador && basta um false para o resultado ser false
console.log(false || false || false || false); // output >>> false

// 2) || -> OR  -> OU
console.log(true && true && true && true);  // output >>> true
console.log(false || true || true || true);  // output >>> true, com operador || basta um true para o resultado ser true
console.log(false || false || false || false); // output >>> false

// 3) !  -> NOT -> NÃO;
console.log(!true) // output >>> false, pois  a negação de true é false;
console.log(!!true) // output >>> true, pois  a negação da negação de true é é true;

// Exemplo Login:

const usuario = 'Lucas'; 
const senha = '123456';

const validaLogin = usuario === 'Lucas' && senha === '123456';
console.log(validaLogin) // O Login só será validado se no formulário as duas variáveis forem preenchidas corretamente; 

const tentativaInvalida_01 = usuario === 'Luca' && senha === 123456; // false
console.log(tentativaInvalida_01)

const tentativaInvalida_02 = usuario === 'Lucas' && senha === 12345; // false
console.log(tentativaInvalida_02)

