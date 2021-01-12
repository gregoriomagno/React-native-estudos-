let aprovados = new Array('Bia',' Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[3])

aprovados[3]='paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9]= 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1,'Elemento1', 'elemento2')
console.log(aprovados)