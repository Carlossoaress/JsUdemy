function criaPessoa (nome , sobrenome , idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade:idade
    };

}

const pessoa1 = criaPessoa('luiz','otavia',25);
const pessoa2 = criaPessoa('carlos ','soares',30);
const pessoa3 = criaPessoa('grayce','kelly',34);
const pessoa4 = criaPessoa('johnny','edson',9);
const pessoa5 = criaPessoa('mirian','soares',55);


console.log(pessoa4);