// 1) Construindo uma função que cria um objeto pessoa: - Factory Function
function criaPessoa (nome, sobrenome, idade){
    return {
        nome:nome,
        sobrenome:sobrenome, 
        idade:idade
    };
};


// 2) Construindo o objeto por meio da função:
const pessoa_01 = criaPessoa('Lucas', 'Lourenção', 36);
const pessoa_02 = criaPessoa('Paulo Henrique', 'Silva', 23);
const pessoa_03 = criaPessoa('Luana', 'Kilpel', 23);
const pessoa_04 = criaPessoa('Marina', 'Menezes', 4);
const pessoa_05 = criaPessoa('Elisa', 'Szul', 1);


// OBS: Quando os parâmetros da função são os mesmo utilizados nos argumentos  do return, é possível elaborar a função do seguinte modo:
/*
function criaPessoa (nome, sobrenome, idade){
    return {
        //ATRIBUTOS
        nome,// ao invés de nome:nome,
        sobrenome,// ao invés de sobrenome:sobrenome,
        idade,// ao invés de idade:idade

        
    };
};
*/