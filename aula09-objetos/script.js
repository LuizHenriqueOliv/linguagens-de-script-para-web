// iterando em objetos dentro do array
const pessoas = [{
    nome: "Daniel",
    idade: 40
}, {
    nome: "Maria",
    idade: 30
}, {
    nome: "Luiz",
    idade: 18
}]

for (const pessoa of pessoas) {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos`)
}

for (let i = 0; i < pessoas.length; i++){
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade}`)
}

// objetos (chave: valor)
let pessoa = {
    nome: "Ana",
    idade: 25,
    saudacao: function(){
        return "Olá, meu nome é " + this.nome
    }
}

// objetos nativos 
//      aqueles que já existem
// 

let obj = {
    name: "fulano",
    age: 32,
    preferencesFoods:['lasanha', 'feijoada', 'frutas'],
    friends: [
        {name: 'matheus'},
        {name: 'joao paulo'},
        {name: 'samily'}
    ],
    saudacao: () => {
        console.log("oi meus amigos")
    }
}

const objJson = JSON.stringify(obj)

console.log(objJson)
console.log(obj.friends[0].name)

// objetos literais
const pessoa = {
    nome: "João",
    idade: 30,
    falar: () => {
        console.log("Olá")
    }
}

pessoa.falar()

