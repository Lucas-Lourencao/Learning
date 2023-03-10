// Demonstração do preventDefault para bloquear envio do formulário sem registrar os dados
function formulario(){
    const form = document.querySelector('.form');

    // contador criado apenas para demonstrar o número de envios
    let contador = 1;
    function recebeEventoForm(evento){
        // evento chamado para não permitir a atualização da página logo após o submit
        evento.preventDefault();

        console.log(`Pela ${contador}ª o form não foi enviado!`);
        contador++;
    };

    // Evento para escutar a ocorrência de evento específico
    form.addEventListener('submit', recebeEventoForm);
};

formulario();