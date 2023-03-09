// Exercicio proposto de fato
function formulario(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const cadastro = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        cadastro.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        
        console.log(cadastro);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} foi cadastrado com ${peso.value}Kg e ${altura.value}m no banco de dados.</p>`;
    };

    form.addEventListener('submit', recebeEventoForm);
};

formulario();