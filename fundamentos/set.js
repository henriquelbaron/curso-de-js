// não aceita repetição/ não indexada

const times = new Set()

times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Avai')
times.add('Vasco')


console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
console.log(times.delete('Avai'))
console.log(times.has('Avai'))


const nomes = ['Henrique','Nair','Lucas','Henrique']
const nomeSet = new Set(nomes)
console.log(nomeSet)