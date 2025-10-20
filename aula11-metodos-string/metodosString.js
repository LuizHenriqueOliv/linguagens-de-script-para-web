const codigo = "abcdef123456"
const parte1 = codigo.slice(0, 6)
const parte2 = codigo.slice(6, 12)
console.log(parte1)
console.log(parte2)


// remover espaços em brancos
let word = '    foo    '
console.log(word.trim())


// split => separar uma string por um parâmetro
let stringSplit = "01/01/2000"
const [dia, mes, ano] = stringSplit.split("/")
console.log(dia)
console.log(mes)
console.log(ano)

const frase = "Nome: João Silva | Idade: 28 | Email: joao.silva@email.com";

// 1 - contém email
let temEmail = frase.includes("Email")
if (temEmail){
    console.log("Tem email")
} else {
    console.log("Não tem email")
}

// 2 - nome completo
let nomeCompleto = frase.slice(6, 16)

//  3 - idade
let idade = parseInt(frase.slice(26, 28))

// 4 - email
let email = frase.slice(38)

// 5 - email tem o @email.com
let emailCorreto = email.includes("@email.com")
if (emailCorreto) {
    console.log("Email está correto")
} else {
    console.log("Email Incorreto")
}

// 6 - pegar o primeiro nome
let primeiroNome = nomeCompleto.split(" ")[0]

// 7 - criar uma descrição
let descricao = `${nomeCompleto} tem ${idade} anos e seu email é ${email}`
console.log(descricao)

