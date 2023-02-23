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

let nomeCliente = 'Lucas Lourenção'; // variável escrita no modo camelCase
let nomecliente = 'Franciely Lourenção';
console.log(nomeCliente, 'e', nomecliente);

nomeCliente = 'Lucas';
nomecliente = 'Fran';
console.log(nomeCliente, 'e', nomecliente);


// Ao tentar alterar o valor de uma variável já inicializada, o terminal rertornará o seguinte erro de sintaxe: Identifier 'nomeCliente' has already been declared.

//Se tentarmos executar o bloco abaixo ele dará o erro na linha 25 e não executará os scripts abaixo do erro;
console.log('***=***')

//let nomeCliente = 'Lucas';
//let nomecliente = 'Fran';
console.log(nomeCliente, 'e', nomecliente);