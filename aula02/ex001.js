// tipos de dados
let numero = 10
let nome = "Luiz"
let logico = true

// o 'printf' do javascript
console.log(`Olá, ${nome}`)

// desvios condicionais
if (numero > 5){
    console.log("Numero maior que 5");
} else {
    console.log("Numero menor que cinco")
}


// comandos de repetição
for (i = 0; i < 5; i++){
    console.log("contador: " + i)
}

while (numero > 0) {
    console.log("Numero atual: " + numero)
    numero--;
}


// funções
function somar(a, b){
    return a + b
}

let soma = somar(10, 5)
console.log(`A soma é: ${soma}`)

