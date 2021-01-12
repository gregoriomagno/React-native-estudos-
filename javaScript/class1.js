class Lancamento{
    constructor(nome = 'Generico', valor = 0){
        this.nome =nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.Lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.Lancamentos.push(l) )
    }
    sumario(){
        let valorConsolidado = 0
        this.Lancamentos.forEach(l =>{
            valorConsolidado+=l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(6,2021)
contas.addLancamentos(salario,contaDeLuz)
console.log(contas.sumario())