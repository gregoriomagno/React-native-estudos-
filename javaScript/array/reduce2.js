const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false }

]
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 100)
console.log(resultado)

const todosBolsista = alunos.map(a=>a.bolsista).reduce(function(acumulador,atual){
    console.log(acumulador,atual,acumulador&&atual)
    return acumulador && atual
} )
console.log(todosBolsista)

const algumBolsista = alunos.map(a=>a.bolsista).reduce(function(acumulador,atual){
    console.log(acumulador, atual, acumulador || atual)
    return acumulador || atual
})
console.log(algumBolsista)