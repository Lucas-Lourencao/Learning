// 1) Inicializando um array:
const alunos = ['Luiz', 'João', 'Maria', 1 , true, null]; 
/*Repare que:
1. A estrutura de um array é muito semelhante a lista Python;
2. Um array aceita estrutura de dados heterogêneas, contudo a boa prática pede que um array contenha apenas dados de um mesmo tipo;
*/

// 2) console log do array
console.log(alunos);


// 3) Assim como as strings, os Arrays são indexados:
// 3.1) Exemplo 01:
console.log(alunos[0]); // output -> Luiz

// 3.2) Exemplo 02:
console.log(alunos[0][1]); // output -> substring 'u' de L'u'iz

// 4) Editando o valor de um array:
alunos[0] = 'Eduardo';
console.log(alunos); // output -> [ 'Eduardo', 'João', 'Maria', 1, true, null ]

// 5) Inserindo mais um elemento no array:
alunos[(alunos.length + 1)] = 'Pedro';
console.log(alunos);

// 5.1 Repare que como foi adicionado um elemento duas posições após o último elemento o penúltimo elemento da nova lista alunos é vazio (undefined) e seu tipo é undefined:
console.log(alunos[6], typeof(alunos[6]));

// 5.2 Para inserir um elemento ao final e um array sem se preocupar em saber o seu tamanho, basta utilizar o método push, veja:
alunos.push('Marcelo'); // Vai adicionar o aluno 'Marcelo'ao final do array
console.log(alunos);

// 5.3 Adicionando no começo do array:
alunos.unshift('Chaves'); //Agora 'Chaves' é o primeiro aluno da lista;
console.log(alunos);

// 6) Removendo um elemento do array:
// 6.1) Removendo um elemento do final do array;
alunos.pop(); // Este método vai remover sempre o último elemento do array;
console.log(alunos); // Repare que 'Marcelo' foi removido;

// 6.2) Se você quiser salvar o elemento removido em uma variável, basta aplicar o método pop armazenando o elemento nela, veja:
const removido = alunos.pop();
console.log(removido, alunos); // Repare que Pedro foi removido da lista e é retornado na variável removido;

// 6.3) Removendo um elemento do início do array;
alunos.shift(); // Repare que 'Chaves' foi removido;
console.log(alunos);

// 6.4) Deletando um elemento do array sem alterar a posição dos demais elementos;
delete alunos[1];
console.log(alunos); // Repare que 'João' foi deletado. Contudo na posição 1 temos um elemento vazio e, com isso, não foram alterados as posições dos demais elementos.

// 7) Fatiamento de arrays:
// 7.1) Indices positivos:
console.log(alunos.slice(0, 3)); //slice(posição_inicio, posição_final)

// 7.2) Indices negativos:
console.log(alunos.slice(0, -2)); 

// 8) Verificando se alunos é um array:
// 8.1) typeof alunos:
console.log(typeof(alunos)); // output -> object. Até pq um array é um objeto ordenado automaticamente;

// 8.2) Para ter certeza que é um array é possível fazer o seguinte:
console.log(alunos instanceof Array); // output -> true. Pq alunos é um array, senão retornaria false.

// 8.3) quando não é um Array:
const naoArray = 123;
console.log(naoArray instanceof Array); // output -> false; 

