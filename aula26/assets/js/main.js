const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('evento previnido');
    setResultado('olá mundo!');
});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;
}