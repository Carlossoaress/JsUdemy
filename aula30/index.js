const h1 = document.querySelector('.container h1');
const data = new Date();

function getdiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
switch(diaSemana) {
    case 0:
        diaSemanaTexto='Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto='Segunda-Feira';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto='Terça-Feira';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto='Quarta-Feira';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto='Quinta-Feira';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto='Sexta-Feira';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto='Sabado';
        return diaSemanaTexto;       
 }
} 

function getNomeMes(numeroMes){
    let numeroMes;
switch(numeroMes) {
    case 0:
        numeroMes='Janeiro';
        return numeroMes;
    case 1:
        numeroMes='Fevereiro';
        return numeroMes;
    case 2:
        numeroMes='Março';
        return numeroMes;
    case 3:
        numeroMes='Abril';
        return numeroMes;
    case 4:
        numeroMes='Maio';
        return numeroMes;
    case 5:
        numeroMes='Junho';
        return numeroMes;
    case 6:
        numeroMes='Julho';
        return numeroMes;       
    case 7:
        numeroMes='Agosto';
        return numeroMes;       
    case 8:
        numeroMes='Setembro';
        return numeroMes;       
    case 9:
        numeroMes='Outubro';
        return numeroMes;       
    case 10:
        numeroMes='Novembro';
        return numeroMes;       
    case 11:
        numeroMes='Dezenbro';
        return numeroMes;       
    case 12:
        numeroMes='Sabado';
        return numeroMes;       
 }
} 

h1.innerHTML = getNomeMes(data.getDay())
