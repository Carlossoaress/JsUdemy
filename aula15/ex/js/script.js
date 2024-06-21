const numero = Number(prompt('Digite um Número'));
const numeroTitulo = document.getElementById('numero-titulo');
const Texto = document.getElementById('texto');
numeroTitulo.innerHTML = numero; 

Texto.innerHTML = '';
Texto.innerHTML += `<p>Raiz quadrada: ${numero** 0.5}.</p>`;
Texto.innerHTML += `<p>É NaN:${Number.isNaN(numero)}</p>`;
Texto.innerHTML += `<p>${numero} é interiro: ${Number.isInteger(numero)}</p>`;
Texto.innerHTML += `<p> Arredondando para Baixo:${Math.floor(numero)}</p>`;
Texto.innerHTML += `<p>Arredondando para Cima: ${Math.ceil(numero)}</p>`;
Texto.innerHTML += `<p>Com Duas Casas Decimais:${numero.toFixed(2)}</p>`;
