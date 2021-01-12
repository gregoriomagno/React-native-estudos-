const produtos = [
    {nome: 'Notebook', preco: 2499, fragil:  true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil:false}
]

console.log(produtos.filter(function(p){
    return p.preco >500 && p.fragil
}))

const caro = produtos=> produtos.preco >=500
const fragil = produtos=> produtos.fragil

console.log(produtos.filter(caro).filter(fragil))
