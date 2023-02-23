// window é um objeto em javascript com vários métodos e funções.

// Método alert('');
window.alert('Este é um alerta tipo alert!');

// Método confirm('');
window.confirm('Este é um alerta confirm!');
/* No caso do alerta tipo prompt, ok retorna um boolean True
 e cancel retorna False*/

// Método prompt('');
window.prompt('Digite o seu nome:');


// os comandos acima podem ser escritos omitindo o objeto window:
alert('alert sem o objeto window!');
confirm('confirm sem o objeto window!');
prompt('Digite o seu nome:');

// Capturando o retorno dos métodos confirm e prompt
let confirma = confirm('Você realmente deseja sair?'); //Lebrar que a captura é um boolean
let formulario = prompt('Informe seu nome completo:'); //Lembrar que a captura será de uma string

console.log(confirma, typeof (confirma), formulario, typeof (formulario));


