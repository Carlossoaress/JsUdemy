// atribuiçao via desestruturaçao
//{}objeto
const pessoa = {
    nome:'luiz',
    sobrenome: 'otaviao',
    idade:30,
    endereco: {
        rua:'av brasil',
        numero: 320
    }
}

const {nome,sobrenome}= pessoa;
console.log(nome, sobrenome);