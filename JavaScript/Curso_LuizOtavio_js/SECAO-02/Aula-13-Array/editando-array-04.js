// 4) Editando o valor de um array:
alunos[0] = 'Eduardo';
console.log(alunos); // output -> [ 'Eduardo', 'João', 'Maria', 1, true, null ]

// 5) Inserindo mais um elemento no array:
alunos[(alunos.length + 1)] = 'Pedro';
console.log(alunos);

// 5.1 Repare que como foi adicionado um elemento duas posições após o último elemento o penúltimo elemento da nova lista alunos é vazio (undefined) e seu tipo é undefined:
console.log(alunos[6], typeof(alunos[6]));