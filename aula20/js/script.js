function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoa = [];

    function recebeEventoForm (evento){
        evento.preventDefalt();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    console.log(nome,sobrenome,peso,altura);


}
 form.addEventListener('submit', recebeEventoForm);

}
 meuEscopo();
