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
************************************************/ 

 
 
 
                    // ARRAY
/************************************************ 
let compras = ['feijão', 'arroz', 'leite', 'pão'] 

compras[1] = 'carne' 

console.log(compras); 

console.log(compras[3]); 
***********************************************
***********************************************

const num = [7, 8, 9]
num.push(10, 11, 12) //adiciona valor no final
num.unshift(1, 2, 3) //adiciona valor no inicio
num.splice(3, 0, 4, 5, 6) //adiciona valor no meio (a partir de / deletar num)


console.log(num)

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
while (i <= 10) {
    if (i ===8) break
    console.log('Numeo ', i)
    i++
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





/***********************************************/

const filmes = [
    {id: 1, nomeFilme: 'Matrix'},
    {id: 2, nomeFilme: 'John Wick'},
    {id: 3, nomeFilme: 'Caça Fantasmas'}
]

console.log(filmes.find(filmes => filmes.nomeFilme == 'Matrix'
));

/***********************************************/