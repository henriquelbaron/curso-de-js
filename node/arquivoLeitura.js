const fs = require('fs')


const caminho = __dirname + '/arquivo.json'
//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// caso seja arquivo no formato js não é preciso usar FS

const config = require('./arquivo.json')
console.log(config.db)

// ler diretorio
fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteudo da pasta')
    console.log(arquivos)
})