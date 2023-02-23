//1) Método Length
function tamanhoString() {
    let verificaTamanho = document.getElementById("metodoLenght");
    let tamanho = verificaTamanho.length;
    document.getElementById("divOculta").innerHTML(`<p>A palavra digitada tem ${tamanho} caracteres!</p>`);
}

