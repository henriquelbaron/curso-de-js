const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)



const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

console.log(chavesVariadas.has(123))
console.log('deletado?')
console.log(chavesVariadas.delete(123))
console.log(chavesVariadas.has(123))

chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b')
console.log(chavesVariadas)