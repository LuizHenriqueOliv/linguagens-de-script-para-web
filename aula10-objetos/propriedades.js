let pessoa = {
    nome: "Ana",
    idade: 20,
    endereco: "Rua da Água",
    profissao: "programador",
}

for (const props in pessoa){
    console.log(pessoa[props])
}

const listNameProps = Object.keys(pessoa)
console.log(listNameProps)


