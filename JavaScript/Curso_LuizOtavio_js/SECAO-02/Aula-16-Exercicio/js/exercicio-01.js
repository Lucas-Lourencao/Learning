// Demonstração do preventDefault para bloquear envio do formulário sem registrar os dados
function formulario(){
    const form = document.querySelector('.form');

    let contador = 1;
    function recebeEventoForm(evento){
        evento.preventDefault();
        console.log(`Pela ${contador}ª o form não foi enviado!`);
        contador++;
    };

    form.addEventListener('submit', recebeEventoForm);
};

formulario();