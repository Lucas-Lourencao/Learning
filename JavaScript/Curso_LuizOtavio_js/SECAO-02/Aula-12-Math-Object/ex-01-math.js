// Recebendo e armazenando um numero:
// PErceba que o numeroInformado tem que ser convertido para Number, pois senão não seria possível fazer operações matemáticas com ele.
let numeroInformado = Number(prompt(`Por favor, informe um número: `));

// printando o número - id = numero-escolhido:
document.getElementById("numero-escolhido").innerHTML = numeroInformado;

// Raiz quadrada do numero - id = raiz:
raiz = Math.pow(numeroInformado, 0.5);
document.getElementById("raiz").innerHTML = raiz;

// É inteiro? - id = e-inteiro:
e_inteiro = Number.isInteger(numeroInformado);
if (e_inteiro == true) {
    document.getElementById("e-inteiro").innerHTML = "é"
} else {
    document.getElementById("e-inteiro").innerHTML = "não é"
}

// É NaN? - id = e-nan:
e_nan = Number.isNaN(numeroInformado);
if (e_nan == true) {
    document.getElementById("e-nan").innerHTML = "é"
} else {
    document.getElementById("e-nan").innerHTML = "não é"
}

// Arredondando para baixo - id = baixo:
document.getElementById("baixo").innerHTML = Math.floor(numeroInformado);

// Arredondando para cima - id = alto:
document.getElementById("alto").innerHTML = Math.ceil(numeroInformado);

// Formatando com duas casas decimais - id = formatado:
let numeroFormatado = numeroInformado.toFixed(2);
document.getElementById("formatado").innerHTML = numeroFormatado;