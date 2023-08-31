//exercicio 1 
/*a. vai aparecer o elemento do indice "0" de elenco que é matheus  e virginia que seria  o indice 3 do elenco da length -1
e no console 3 vai aparecer objeto do indice [2] do canal que seria globo e horario 
*/

// exercicio 2 
/* a. ele vai imprimir no console o nome do cachorro juca, a idade 3 e a raça srd 
o gato ele vai copiar o objeto do cachorro alterando apenas o nome para juba 
 atartaruga ele vai copiar o gato e alterar apenas a letra a pelo o ficando jubo

b. a sintexe dos 3 pontos copia o objeto que vem após os 3 pontos*/


//exercicio 3 

/*a. vai ser impresso no primero console "false" e no segundo "undefined"

/*b.vai ser impresso no primeiro console o backender do objeto pessoa que é falso 
e no segundo console vai aparecer undefined pois não tem a propriedade altura*/ 


// exercicio 1 da escrita de codigo

/*a.
const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
 }
 function retornaNome(parametro) {
    const frase = `Eu sou ${parametro.nome}, mas pode me chamar de: ${parametro.apelidos[0]}, ${parametro.apelidos[1]}, ${parametro.apelidos[2]}`
    console.log(frase)
 }

 retornaNome(pessoa)*/

    
 /*b. 

 const pessoa2 = {
    ...pessoa,
    apelidos: ["vikings", "vadio", "vwm"]
 }

retornaNome(pessoa2)*/

//exercicio 2 escrita 

/*a. 

const pessoa1 = {
    nome: "Luiz",
    idade: 39,
    profissao:"programador" ,
}

const pessoa2 = {
    nome: "Diego",
    idade: 37,
    profissao: "analista",
}*/

/*b. 

function funcao1(pessoa) {
const resultado = []
resultado.push(pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao)
return resultado
}

console.log(funcao1(pessoa1))
console.log(funcao1(pessoa2))*/


//exercicio 3 escrita de codigo

/*a. 
const carrinho = []

//b.
const frutas1 = {
    nome: "banana",
    disponibilidade: true ,
}

const frutas2 = {
    nome: "maçã",
    disponibilidade: true ,
}

const frutas3 = {
    nome: "laranja",
    disponibilidade: true ,
}
 
//c.
function funcao1(fruta) {
    carrinho.push(fruta)
}

funcao1(frutas1)
funcao1(frutas2)
funcao1(frutas3)

//d.
console.log(carrinho)*/