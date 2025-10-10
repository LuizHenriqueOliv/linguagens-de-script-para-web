let lista = [1, 2, 3]


// adicionando no final
lista.push(4)
console.log(lista) // 1, 2, 3, 4
lista.pop()
console.log(lista) // 1, 2, 3

// adicionando no início
lista.unshift(0) // 0, 1, 2, 3
console.log(lista)
lista.shift() // 1, 2, 3
console.log(lista)

// desafio
nomes = ["Luiz", "Henrique", "Matheus", "Ruan", "Pedro"]
nomes.unshift("João")
nomes.push("Carlos")
nomes.pop()

for (let nome in nomes){
    console.log(nomes[nome])
}

