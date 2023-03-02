// 1) Declarando uma função em JavaScript:
function estruturaBasica() {
    console.log(`Esta é a estrutura sintática básica de uma função js! Para executar, basta chamar a função conforme codigo abaixo.`)
};

// 1.1) Chamada da função:
estruturaBasica();

// 1.2) Parâmetros de uma função:
function saudacao(nome) {
    console.log(`Bom dia, ${nome}!`)
};

saudacao('Lucas');

// 1.3) Aplicação do return:
function novaSaudacao(nome) {
    return `Bom dia, ${nome}!`
};

// Armazenando a função em uma variável:
const testeSaudacao = novaSaudacao('Marina');

// Exibindo a variável
console.log(testeSaudacao);

// Também é possível criar a função já dentro da variável:
const raiz = function (n) {
    return n ** 0.5;
}; //Atenção, neste caso é obrigatório que a funçaõ termine com ponto e virgula

console.log(raiz(9));
console.log(raiz(256));