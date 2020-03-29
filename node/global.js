// ao usar o freeze o objeto não pode mais ser modificado

global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})