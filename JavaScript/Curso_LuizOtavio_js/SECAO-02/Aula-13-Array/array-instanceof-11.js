// 8) Verificando se alunos é um array:
// 8.1) typeof alunos:
console.log(typeof(alunos)); // output -> object. Até pq um array é um objeto ordenado automaticamente;

// 8.2) Para ter certeza que é um array é possível fazer o seguinte:
console.log(alunos instanceof Array); // output -> true. Pq alunos é um array, senão retornaria false.

// 8.3) quando não é um Array:
const naoArray = 123;
console.log(naoArray instanceof Array); // output -> false; 