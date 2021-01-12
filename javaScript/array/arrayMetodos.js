const pilotos = ['Vettel','Alonso', ' Raikkonen','Massa']
pilotos.pop()//remove ultimo item do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um item no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

pilotos.splice(2,0,'Bottas', 'Massa') // adicionando com splice
console.log(pilotos)

pilotos.splice(3,1,)// removendo um item com splice
console.log(pilotos)

// Criando sub-arrays com slice

const algunsPilotos = pilotos.slice(2)// criando sub-array do array pilotos apartir do 2º elemento
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)// criando sub-array do array pilotos apartir do 2º elemento ate o 4º que nao entra no novo array
console.log(algunsPilotos2)