                    // OBJETOS
/************************************************

let roupa = { 
    itemName: 'Camisa', 
    itemPrice: 59, 
    itemAvailable: true, 
    itemCor: 'Azul' 
}  

roupa.itemCor = 'Vermelha' 

console.log(roupa) 
************************************************
************************************************
// COPIAR PROPRIEDADES DE UM OBJETO PARA OUTRO

let pessoa = {
    nome: 'fulano',
    idade: 23,
    profissao: 'programador'
}

let infoAdicional = {
    cor: 'parda',
    altura: '1.85',
    formacao: 'superior'
}

// console.log(pessoa);
//  console.log(infoAdicional);
Object.assign(pessoa, infoAdicional)
console.log(pessoa);
***********************************************
***********************************************
// ADICIONANDO E DELETANDO PROPRIEDADES DE UM OBJETO

let pessoa = {
    nome: 'fulano',
    idade: 23,
    profissao: 'programador',
    cor: 'parda',
    altura: '1.85',
    formacao: 'superior'
}
console.log(pessoa);

delete pessoa.cor //deletando
pessoa.cidade = 'belo horinte' //adicionando

console.log(pessoa);
************************************************
************************************************
// VERIFICAR CHAVES DE OBJETOS

let pessoa = {
    nome: 'fulano',
    idade: 10,
    cor: 'parda'
}

console.log(Object.keys(pessoa));
************************************************/






 

 
 
                    // ARRAY
/************************************************ 
let compras = ['feijão', 'arroz', 'leite', 'pão'] 

compras[1] = 'carne' 

console.log(compras); 

console.log(compras[3]); 
***********************************************
***********************************************
//ADICIONANDO VALORES NA ARRAY

const num = [7, 8, 9]
num.push(10, 11, 12) //adiciona valor no final //pop remove ultimo valor
num.unshift(1, 2, 3) //adiciona valor no inicio //shift remove primeiro valor
num.splice(3, 0, 4, 5, 6) //adiciona valor no meio (a partir de / deletar/substituir num)


console.log(num)
***********************************************
***********************************************
//LOCALIZANDO ITENS NUMA ARRAY

const filmes = [
    {id: 1, nomeFilme: 'Matrix'},
    {id: 2, nomeFilme: 'John Wick'},
    {id: 3, nomeFilme: 'Caça Fantasmas'}
]

// console.log(filmes.includes({id: 1, nomeFilme: 'Matrix'}))

//console.log(filmes.find(function(movie) {
//   return movie.nomeFilme == 'Matrix'
//})) 

console.log(filmes.find(filmes => filmes.nomeFilme == 'Matrix'
)); //ARROW FUNCTION

***********************************************
***********************************************
//REMOVENDO ITENS DA ARRAY

const num = [5, 6, 7, 8]
const final = num.splice(2, 1) //a partir do index 2 remover 1 item

console.log(num)
console.log(final)

***********************************************
***********************************************
//ESVAZIANDO ARRAY

let num = [5, 6, 7, 8]

//num = []
//num.length = 0
//num.splice(0, num.length)
console.log(num);

***********************************************
***********************************************
//CONCATENANDO ARRAY
let numbers = [5, 6, 7, 8]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters) //concatenar array
half = all.slice(3, 5) //dividir array (inicio/fim)

console.log(all)
console.log(half)

***********************************************
***********************************************
//JOIN ARRRAY
let clientes = ["Andre", "Jose", "Marcela"]

let clientsJoin = clientes.join('.')

console.log(clientsJoin)


***********************************************
***********************************************
//REVERTENDO ARRAY

let clientes = ["Andre", "Jose", "Marcela"]

//clientes.sort() //Ordem alfabetica
clientes.reverse() //Ordem alfabetica reversa

console.log(clientes)

***********************************************
***********************************************
//VERIRICANDO ELEMENTOS NA ARRAY

const tempLondon = [18, -13, 8, 2, 4]

const tempPositive = tempLondon.every(function(value) {
    return value >= 0
})

console.log(tempPositive) //valores true or false
***********************************************
***********************************************
//FILTRANDO VALORES ARRAY

const tempLondon = [18, -13, 8, 2, 4]

const tempPositive = tempLondon.filter(function(value) {
    return value >= 0
})

// const tempPositive = tempLondon.filter(value => value >= 0) //ARROW FUNCTION

console.log(tempPositive) //valores positivo
***********************************************
***********************************************
// LOOPS EM ARRAY

let produtos = ['sapato', 'camisa', 'calça', 'bone']

for (let n = 0; n  < produtos.length; n++) {
    console.log(produtos[n]);
}
***********************************************/


 





 
 
                    // FUNCTION
/************************************************ 

function statusVenda(status, total) { 
    console.log('Transação ' + status + '. O valor total foi R$' + total) 
} 

statusVenda('Aprovada', 75) 
************************************************ 
************************************************ 

function porcentagem10(preco) { 
    return preco - (preco * 10/100) 
} 

// let total = porcentagem10(02) 
//console.log(total) 

console.log(porcentagem10(20)) 

************************************************/ 


 





 
 
            // OPERADOR CONDICIONAL TERNARIO
/************************************************ 
let driver = 90 

let speed = driver > 110 ? 'Acima' : 'Abaixo' 

console.log(speed) 
************************************************/
 

 





 
 
            // OPERADORES LOGICO
/************************************************ 
// && (AND) - || (OU) - ! (NOT) 

let temIdade = true 
let temTitulo = false 

let podeVotar = temIdade && temTitulo 
console.log(podeVotar) 

let podeViajar = !podeVotar 
console.log(podeViajar) 
************************************************/ 







 
 
 
                // IF E ELSE
/************************************************ 
let driverSpeed = 40 
 
if (driverSpeed > 110) { 
    console.log('Acima da velocidade'); 
} 
else if (driverSpeed > 40 && driverSpeed <= 110) { 
    console.log('Velocidade média'); 
} 
else { 
    console.log('Velocidade baixa'); 
} 
************************************************/ 







 
 
 
                // SWITCH E CASE
/************************************************ 
let airport = 'A' 

switch (airport) { 
    case 'MCO': 
        console.log('Orlando') 
        break 
    case 'JFK': 
        console.log('John F. Kennedy') 
        break 
    case 'SEA': 
        console.log('Seattle') 
        break 
    default: 
console.log('Esse Aeroporto não existe'); 
} 
***********************************************/ 
 






 
 

                // LOOP
/************************************************ 

for (i = 1; i <10; i++) {
    console.log('Numero ', i)
}

for (i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é impar`);
    }
}
***********************************************
************************************************ 

while (i <= 20) {
    console.log('Numero ', i)
    i++
}
***********************************************
************************************************ 
i = 1

do {
    console.log('Numero ', i)
    i++
} while (i <= 10)
***********************************************
************************************************ 
const myCar = {
    model: 'BMW',
    year: 2022
    km: 40000
}

for (let i in myCar)
    console.log(i, myCar[i])

***********************************************
************************************************ 
const friends = ['Marcos', 'Ana', 'Jose']

for (let i in friends)
console.log(i)

***********************************************
************************************************ 
// BREAK

i = 1
while (i <= 10) {
    if (i === 8) break
    console.log('Numero ', i)
    i++
}

***********************************************
************************************************
//CONTINUE


for (let i = 20; i >= 0; i--) {
    if (i % 2 == 0) {
        console.log(i + ' é par')
        continue
    }
    console.log(i);
}
***********************************************/










        //FACTORY E CONSTRUCTOR
/*********************************************** 
const livro = { 
    livroTitulo: 'Bomba atomica', 
    livroAutor: 'Perry Mason', 
    livroPaginas: 360, 
    livroCapitulos: { 
        capt1: 'cidade', 
        capt2: 'mato', 
        capt3: 'montanha' 
    }, 
    printLivro: function() { 
        console.log('Imprimindo...' + livro); 
    } 
} 

livro.printLivro() 

//function printLivro() { 
//    console.log('Imprimindo...'); 
//} 
//printLivro() 
*********************************************** 
*********************************************** 
function criarLivro(titulo, autor, paginas) { 
    const livro = { 
        livroTitulo: titulo, 
        livroAutor: autor, 
        livroPaginas: paginas, 
        printLivro: function() { 
            console.log('Imprimindo...'); 
        } 
    } 
    return livro 
} 

const livro1 = criarLivro('Bomba atomica', 'Perry Mason', 350) 
livro1.cor = 'Branco' // adicionar propriedades ao objeto 

console.log(livro1) 
*********************************************** 
*********************************************** 
function CriarLivro(titulo, autor, paginas) { 
        this.livroTitulo = titulo, 
        this.livroAutor = autor, 
        this.livroPaginas = paginas; 

} 

const livro1 = new CriarLivro('Bomba atomica', 'Perry Mason', 350) 

console.log(livro1) 
***********************************************/

