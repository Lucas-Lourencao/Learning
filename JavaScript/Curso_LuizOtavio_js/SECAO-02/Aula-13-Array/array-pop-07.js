// 6) Removendo um elemento do array:
// 6.1) Removendo um elemento do final do array;
alunos.pop(); // Este método vai remover sempre o último elemento do array;
console.log(alunos); // Repare que 'Marcelo' foi removido;

// 6.2) Se você quiser salvar o elemento removido em uma variável, basta aplicar o método pop armazenando o elemento nela, veja:
const removido = alunos.pop();
console.log(removido, alunos); // Repare que Pedro foi removido da lista e é retornado na variável removido;