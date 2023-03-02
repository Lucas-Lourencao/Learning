// 1) Cirando um default para os parâmetros:
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

// Exibindo o resultado sem a passagem de parâmetros:
console.log(soma()); // output -> 2
