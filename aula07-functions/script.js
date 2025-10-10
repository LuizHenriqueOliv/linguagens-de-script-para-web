// função declarada
function somar(a, b){
    let resultado = a + b
    return resultado
}

// // função expressa
const somar = function(a, b){
    let resultado = a + b
    return resultado
} 

// arrow function
const somar = (a, b) => a + b

console.log(somar(1, 2))

// funções alta ordem (callback)
function greeting(name){
    console.log(`hello ${name}`)
}

function processUserInput(callback){
    let name = 'luiz'
    callback(name)
}

processUserInput(greeting)

// funções aninhadas
function saudacao(nome){
    function mensagem(){
        return `Olá ${nome}, seja bem vindo!`
    }

    return mensagem()
}

console.log(saudacao("Luiz"))