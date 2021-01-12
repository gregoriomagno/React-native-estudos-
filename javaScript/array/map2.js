 const carrinho = [
    '{ "preco": 3.45}',
    '{  "preco": 13.90}',
    '{  "preco": 41.22}',
    '{"preco": 7.50}',
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto =>produto.preco
let resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)