// 1) Aplicação com Numbers
function soma(x, y) {
    const resultado = x + y;
    return resultado;
};

// Aplicação da função soma:
console.log(soma(2, 2));

// Armazenando a função em uma variável:
const resultado = soma(4, 6); // perceba que não há conflito entre as variáveis resultado, pois a variável interna a função está em um escopo diferente daquela fora da função.

console.log(resultado);

// 2) Aplicação sem a passagem de parâmetros:
console.log(soma()); // Retorna NaN, pois os parâmetros são obrigatórios

// 3) Aplicação com strings:
console.log('Lucas', 'Lourenção'); // output -> 'Lucas Lourenção'

