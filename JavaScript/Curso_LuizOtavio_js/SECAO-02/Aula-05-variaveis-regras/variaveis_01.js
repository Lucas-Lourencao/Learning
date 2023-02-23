// Regras para inicialização de variáveis:
/*
1. Não pode,os criar variáveis com palavras reservadas;
2. Variáveis precisam ter nomes significativos, ou seja, que indiquem algum significado;
3. Não podem começar com número;
4. Não podem conter espaços ou traços;
5. Podem ser descritas no modelo camelCase;
6. São case sensitives;
7. Não é possível redeclarar variáveis utilizando o let;
8. Não utilize VAR, utilize LET;
*/

let nome; /*Em JS é possível fazer a inicialização de uma variável 
sem atribuir um valor a ela. */

nome = 'Lucas';
console.log(nome);

var nome_ = 'Franciely' // Para incializar uma variável, antigamente utilizava-se a palavra reservada var.
console.log(nome_)

/*Diferença entre var e let:
1. Variáveis criadas com var podem ser redeclaradas. 
Variáveis criadas com LET não podem ser redeclaradas. 
Mesmo assim, não utilize VAR. Utilize LET.*/