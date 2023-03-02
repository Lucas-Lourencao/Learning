// Reescrevendo a função raiz:
// 1) Modo convencional:
// Também é possível criar a função já dentro da variável:
const Raiz = function (n) {
    return n ** 0.5;
}; //Atenção, neste caso é obrigatório que a funçaõ termine com ponto e virgula

// 1.1) Utilização da arrow function:
const raiz = (n) => {
    return n ** 0.5;
};
// a) perceba que a palavra function é suprimida;
// b) perceba a entrada dos sinais => que caracterizam uma seta, por isso "arrow function"

console.log(raiz(25))

// 1.2) A função acima também pode ser escrita do seguinte modo:
const novaRaiz = n => n ** 0.5 
// a) como existe apenas uma linha de execução, {} é dispensado;
// b) como existe apenas um parâmetro na função, () é dispensado;

// Perceba que Raiz, raiz e novaRaiz fazem exatamente a mesma coisa!
console.log(novaRaiz(25));