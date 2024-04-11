                    // OBJETOS
/***************************************************************

let roupa = { 
    itemName: 'Camisa', 
    itemPrice: 59, 
    itemAvailable: true, 
    itemCor: 'Azul' 
}  

roupa.itemCor = 'Vermelha' 

console.log(roupa) 
************************************************
***************************************************************
// Object.assign() "COPIAR PROPRIEDADES DE UM OBJETO PARA OUTRO"

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
// console.log(infoAdicional);
Object.assign(pessoa, infoAdicional)
console.log(pessoa);
************************************************
***************************************************************
// "ADICIONANDO E DELETANDO PROPRIEDADES DE UM OBJETO"
// delete objeto.chave      // deletar
// objeto.chave = 'valor'   //adicionando

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
***************************************************************
// Object.keys() "VERIFICAR CHAVES DE OBJETOS"

let pessoa = {
    nome: 'fulano',
    idade: 10,
    cor: 'parda'
}

console.log(Object.keys(pessoa));
************************************************
***************************************************************
// DESTRUCTURING ASSIGNMENT (OBJETOS)

const pessoa = {
    nome: 'fulano',
    idade: 15,
    cor: 'azul'
}

const {nome: valNome, idade: valIdade, cor: valCor} = pessoa

console.log(valNome);
console.log(valIdade);
console.log(valNome + ' tem ' + valIdade + ' anos de idade');
************************************************
***************************************************************
// JAVASCRIPT OBJECT NOTATION "JSON"

// Rigoroso na estrutura
// Apenas aspas duplas
// Não aceita comentários

let pessoa = {
    "nome": "fulano",
    "idade": 23,
    "profissao": "programador",
    "linguagens": ["PHP", "JS", "Python"]
}
console.log(pessoa.linguagens);
************************************************
***************************************************************
// JSON PARA STRING E VICE-VERSA

let pessoa = {
    "nome": "fulano",
    "idade": 23,
    "profissao": "programador",
    "linguagens": ["PHP", "JS", "Python"]
}

//converter JSON para STRING
let pessoaString = JSON.stringify(pessoa)
console.log(pessoaString);

//converter STRING para JSON
let pessoaJSON = JSON.parse(pessoaString)
console.log(pessoaJSON);
************************************************
***************************************************************
// METHOD DEFINITIONS

let calculadora = {
    somar: function(a,b) {
        return a + b
    },
    subtrair: function(a,b) {
        return a - b
    },
    dividir: function(a,b) {
        return a / b
    },
    multiplicar: function(a,b) {
        return a * b
    }
}

console.log(calculadora.somar(2, 3));
************************************************/










                // ORIENTAÇÃO A OBJETOS
/***************************************************************
let animal = {
    animalCriado: '',
    setAnimal: function(novoAnimal) {
        this.animalCriado = novoAnimal
    },
    getAnimal: function() {
        return this.animalCriado
    }
}

animal.setAnimal('Cachorro')
console.log(animal.getAnimal());
************************************************
***************************************************************
// PROTOTYPES

let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
console.log(pessoa.hasOwnProperty('maos'));

let pessoaNova = Object.create(pessoa)

console.log(pessoaNova.maos);
console.log(Object.getPrototypeOf(pessoaNova) === Object.prototype);
console.log(Object.getPrototypeOf(pessoaNova) === pessoa);
console.log(pessoaNova.hasOwnProperty('maos'))
************************************************
***************************************************************
//CLASSES

let cachorro = {
    raca: 'Poodle',
    patas: 4,
    som: function(){
        console.log('au au');
    }
}

let gato = Object.create(cachorro)
gato.raca = 'Maine'
gato.som = function() {
    console.log('miau');
}

console.log(cachorro);
console.log(gato);
gato.som()
************************************************
***************************************************************
// CLASSES CONSTRUCTOR POR FUNCTION

function criarAnimal(especie, patas, cor) {
    let animal = Object.create({})
    animal.especie = especie
    animal.patas = patas
    animal.cor = cor
    return animal
}

let cachorro = criarAnimal('cachorro', 3, 'azul')
cachorro.som = function() {
    console.log('au au');
}

console.log(cachorro);
cachorro.som()
************************************************
***************************************************************
// CLASSES CONSTRUCTOR POR NEW

function CriarAnimal(especie, patas, cor) {
    this.especie = especie
    this.patas = patas
    this.cor = cor
    this.som = function() {
        console.log('latido');
    }
}

let cachorro = new CriarAnimal('cachorro', 3, 'azul')

console.log(cachorro);
cachorro.som()
************************************************
***************************************************************
// CLASSES CONSTRUCTOR POR PROTOTYPE

function CriarAnimal(especie, patas, cor) {
    this.especie = especie
    this.patas = patas
    this.cor = cor
}

CriarAnimal.prototype.som = function() {
    console.log('au au');
}

let cachorro = new CriarAnimal('cachorro', 3, 'azul')

console.log(cachorro);
cachorro.som()
************************************************
***************************************************************
// class e constructor DO ES6

class Pessoa {
    constructor(nome, idade, cor) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
    }
}

let fulano = new Pessoa('fulano', 41, 'parda')

console.log(fulano);
************************************************
***************************************************************
// Mais sobre class e constructor DO ES6

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    saudacao() {
        return 'olá'
    }
}

Pessoa.prototype.cor = 'parda'
Pessoa.prototype.profissao = 'dev web'

let fulano = new Pessoa('fulano', 28)

console.log(fulano);
console.log(fulano.saudacao());
console.log(Pessoa.prototype);
************************************************
***************************************************************
// Override no protype

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

Pessoa.prototype.cor = 'parda'
Pessoa.prototype.nome = 'sem nome' //OVERRIDE
let fulano = new Pessoa('fulano', 28)

console.log(fulano.nome);
console.log(Pessoa.prototype.nome);
************************************************
***************************************************************
// Symbol "Valor padrão no prototype, não pode ser trocado"

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

let nome = Symbol()
Pessoa.prototype[nome] = 'sem nome'

let fulano = new Pessoa('fulano', 28)

console.log(fulano.nome);
console.log(Pessoa.prototype[nome]);
************************************************
***************************************************************
// GET e SET
// get: resgata um valor de uma propriedade
// set: altera valor de uma propriedade

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    get getCor() {
        return this.cor
    }

    set setCor(cor) {
        this.cor = cor
    }
}

let fulano = new Pessoa('fulano', 25)
console.log(fulano);

fulano.setCor = 'azul'
console.log(fulano.getCor);
************************************************
***************************************************************
// extends "HERANÇA"

class Pai {
    constructor(pernas) {
        this.pernas = pernas
    }
}

class Filho extends Pai {
    constructor(pernas, idade) {
        super(pernas, pernas)
        this.idade = idade
    }
}

let filho = new Filho(2, 24)
console.log(filho);

console.log(filho instanceof Pai); // Verifica quem é o pai do objeto utilizado
console.log(new Filho instanceof Pai);

***************************************************************/



 

 


                    // ARRAY
/***************************************************************
let compras = ['feijão', 'arroz', 'leite', 'pão'] 

compras[1] = 'carne' 

console.log(compras); 
console.log(compras[3]);
************************************************
***************************************************************
// "ADICIONANDO E REMOVENDO VALORES NA ARRAY"
// Array.prototype.push()       // adiciona valor no final da array
// Array.prototype.pop()        // remove ultimo valor da array
// Array.prototype.unshift()    // adiciona valor no inicio da array
// Array.prototype.shift()      // remove primeiro valor da array
// Array.prototype.splice()     // adiciona val no meio (a partir de / deletar/ substituir val) de uma array


const num = [7, 8, 9]
num.push(10, 11, 12) 
num.unshift(1, 2, 3)
num.splice(3, 0, 4, 5, 6)


console.log(num)
************************************************
***************************************************************
// Array.prototype.slice()  "RETORNAR UM ARRAY A PARTIR DE OUTRO ARRAY"

let numbers = [5, 6, 7, 8, 9]

console.log(numbers.slice(2,4)); // indice 2 até 4
console.log(numbers.slice(2)); // indice 2 até o fim
console.log(numbers.slice(2, -3)); // negativo remove os ultimos digito informado
************************************************
***************************************************************
// Array.prototype.includes() "LOCALIZANDO ITENS NUMA ARRAY"

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


let carros = ['BMW', 'FIAT', 'AUDI']
console.log(carros.includes('FIAT'))
************************************************
***************************************************************
// Array.prototype.splice() "REMOVENDO ITENS DA ARRAY"

const num = [5, 6, 7, 8]
const final = num.splice(2, 1) //a partir do index 2 remover 1 item

console.log(num)
console.log(final)

************************************************
***************************************************************
// Array.prototype.forEach() "EXECUTA CADA ELEMENTO DO ARRAY"

let numbers = ['um', 'dois', 'tres', 'quatro', 'cinco']

numbers.forEach(numero => {
    console.log(numero);
})

************************************************
***************************************************************
// Array.prototype.reverse() "INVERTER ARRAY"

let numbers = ['um', 'dois', 'tres', 'quatro', 'cinco']

console.log(numbers.reverse());
************************************************
***************************************************************
// Array.prototype.sort() "ORDENANDO ARRAY"

let clientes = ["Andre", "Jose", "Marcela"]

clientes.sort()

console.log(clientes)
************************************************
***************************************************************
// "ESVAZIANDO ARRAY"

let num = [5, 6, 7, 8]

//num = []
//num.length = 0
//num.splice(0, num.length)
console.log(num);

************************************************
***************************************************************
// Array.prototype.concat() "CONCATENANDO ARRAY"

let numbers = [5, 6, 7, 8]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters) //concatenar array
half = all.slice(3, 5) //dividir array (inicio/fim)

console.log(all)
console.log(half)

************************************************
***************************************************************
// Array.prototype.join() "JOIN ARRRAY - JUNTANDO ARRAY"

let clientes = ["Andre", "Jose", "Marcela"]

let clientsJoin = clientes.join('.')

console.log(clientsJoin)


************************************************
***************************************************************
// "VERIRICANDO ELEMENTOS NA ARRAY"

const tempLondon = [18, -13, 8, 2, 4]

const tempPositive = tempLondon.every(function(value) {
    return value >= 0
})

console.log(tempPositive) //valores true or false
************************************************
***************************************************************
// Array.prototype.filter() "FILTRANDO VALORES ARRAY"

const tempLondon = [18, -13, 8, 2, 4]

const tempPositive = tempLondon.filter(function(value) {
    return value >= 0
})

// const tempPositive = tempLondon.filter(value => value >= 0) //ARROW FUNCTION

console.log(tempPositive) //valores positivo
************************************************
***************************************************************
// "LOOPS EM ARRAY"

let produtos = ['sapato', 'camisa', 'calça', 'bone']

for (let n = 0; n  < produtos.length; n++) {
    console.log(produtos[n]);
}
************************************************
***************************************************************
// DESTRUCTURING ASSIGNMENT (ARRAY)

let animais = ['doginho', 'gato', 'arara']

let [animal1, animal2, animal3] = animais

console.log(animal1);
console.log(animal2);
console.log(animal3);
************************************************/










            //METODOS DE STRING
/***************************************************************
// String.prototype.trim() "Remover tudo que não é string"

let nome = '            Fulano'

console.log(nome.trim);
************************************************
***************************************************************
// String.prototype.padStart() "INSERIR CARACTERES ANTES DA STRING"
// String.prototype.padEnd "INSERIR CARACTERES DEPOIS DA STRING"

let numero = '450'

console.log(numero.padStart(6, '0')); // quantidade de caracter e caracter a ser inserido
console.log(numero.padEnd(6, '0'));
************************************************
***************************************************************
// "DIVIDIR UMA STRING POR UM SEPARADOR E ADICIONAR EM UM ARRAY"
// String.prototype.split() 

let frase = 'O rato roeu,a roupa do rei de roma'

let palavras = frase.split(' ')
console.log(palavras);
************************************************
***************************************************************
// String.prototype.repeat() "REPETE STRING DE ACORDO COM PARAMETRO NUMBER"

let palavra = 'casa '
console.log(palavra.repeat(3));
************************************************
***************************************************************
// String.prototype.toUpperCase() "RETORNA O VALOR DA STRING ORIGINAL CONVERTIDO EM LETRAS MAIÚSCULAS"
// String.prototype.toLowerCase() "RETORNA O VALOR DA STRING ORIGINAL CONVERTIDO EM LETRAS MINÚSCULAS"
// String.prototype.toString() "RETORNA UMA STRING REPRESENTANDO O OBJETO ESPECIFICADO"

let palavra1 = 'palavra'
let palavra2 = 'CASA'
let numero = 1562

console.log(palavra1.toUpperCase())
console.log(palavra2.toLowerCase())
console.log(numero.toString())
************************************************/


 





 
 
                    // FUNCTION
/************************************************

function statusVenda(status, total) { 
    console.log('Transação ' + status + '. O valor total foi R$' + total) 
} 

statusVenda('Aprovada', 75) 
************************************************
***************************************************************

function porcentagem10(preco) { 
    return preco - (preco * 10/100) 
} 

// let total = porcentagem10(02) 
//console.log(total) 

console.log(porcentagem10(20)) 

************************************************
***************************************************************
// REST OPERATOR
let num1 = 5
let num2 = 7
let num3 = 14

function print(...args) {
    for (let n = 0; n < args.length; n++) {
        console.log(args[n]);
    }
}

print(num1, num2)
print(num3, num1)
************************************************/

 






 
 
            // OPERADORES LOGICO
/***************************************************************
// && (AND) - || (OU) - ! (NOT) 

let temIdade = true 
let temTitulo = false 

let podeVotar = temIdade && temTitulo 
console.log(podeVotar) 

let podeViajar = !podeVotar 
console.log(podeViajar) 
************************************************
***************************************************************
// OPERADOR CONDICIONAL TERNARIO

let driver = 90 

let speed = driver > 110 ? 'Acima' : 'Abaixo' 

console.log(speed)              
************************************************
***************************************************************
// IF E ELSE

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
************************************************
***************************************************************
// SWITCH E CASE

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
************************************************/ 
 






 
 

                // LOOP
/***************************************************************
// FOR

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
************************************************
***************************************************************
//WHILE

i = 1
while (i <= 20) {
    console.log('Numero ', i)
    i++
}
************************************************
***************************************************************
// DO WHILE

i = 1

do {
    console.log('Numero ', i)
    i++
} while (i <= 10)
************************************************
***************************************************************
const myCar = {
    model: 'BMW',
    year: 2022
    km: 40000
}

for (let i in myCar)
    console.log(i, myCar[i])

************************************************
***************************************************************
const friends = ['Marcos', 'Ana', 'Jose']

for (let i in friends)
console.log(i)

************************************************
*************************************************************** 
// BREAK

i = 1
while (i <= 10) {
    if (i === 8) break
    console.log('Numero ', i)
    i++
}

************************************************
***************************************************************
//CONTINUE


for (let i = 20; i >= 0; i--) {
    if (i % 2 == 0) {
        console.log(i + ' é par')
        continue
    }
    console.log(i);
}
************************************************/










        //FACTORY E CONSTRUCTOR
/***************************************************************
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
************************************************
***************************************************************
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
************************************************
***************************************************************
function CriarLivro(titulo, autor, paginas) { 
        this.livroTitulo = titulo, 
        this.livroAutor = autor, 
        this.livroPaginas = paginas; 

} 

const livro1 = new CriarLivro('Bomba atomica', 'Perry Mason', 350) 

console.log(livro1) 
************************************************/










                    // DEBUGS E ERROS
/***************************************************************
// debugger e input por função

function checkNumber(num) {
    let number = Number(num)
    if (Number.isNaN(number)) {
        alert("Por favor,apenas numero")
        console.log(num);
        debugger
    } else {
        console.log(num);
        debugger
    }
}
debugger
let number = prompt('Digite um numero')
checkNumber(number)
************************************************
***************************************************************
// EXCEPTION

function testString(palavra) {
    if (typeof palavra != 'string') {
        throw new Error('O parametro precisa ser uma string')
    }
    else {
        console.log(palavra);
    }
}

testString('445')
************************************************
***************************************************************
// try, catch e finally

try {
    let c = a + b
} catch(error) {
    console.log('Algo deu errado: ' + error);
} finally {
    console.log('Executou')
}
************************************************
***************************************************************
// ASSERTION

let array = [1, 2, 3, 4]
let array2 = [1, 2, 3, 4]
let array3 = []

function iterarArray(arr) {
    if (arr.length == 0) {
        throw new Error('Array sem elemento')
    } else {
        for(let i = 0; i < arr.length; i++) {
            console.log(i);
        }
    }
}

function arrVazio(arr) {
    if (arr.length > 0) {
        throw Error('Array não pode ter elementos')
    } else {
        console.log('Funcionando');
    }
}

iterarArray(array)
iterarArray(array2)
arrVazio(array3)
************************************************/










                // EXPRESSÕES REGULARES
/***************************************************************
//Criando e testando uma expressão regular

let reg1 = new RegExp("teste")
let reg2 = /teste/

console.log(reg1.test('Tem teste?'));
console.log(reg2.test('Tem teste?'));
************************************************
***************************************************************
//Conjuntos
const numeros = /[123456]/
const numeros2 = /[1-20]/

console.log(numeros.test("Tem o numero 3?"));
console.log(numeros2.test("Tem o numero 24563?"));
************************************************/










            // PROGRAMAÇÃO ASSINCRONA
/***************************************************************
//CALLBACKS

console.log('Ainda não chamou o callback');

setTimeout(function() {
    console.log("Ola mundo");
}, 2000); // 2 segundos

console.log('Ainda não chamou o callback');
************************************************
***************************************************************
// PROMISES

let promessa = Promise.resolve(4 + 8)

console.log('teste');
console.log(promessa);

// promessa.then((value) => {console.log(`O valor é ${value}`)})
promessa.then((value) => {return value + 5})
.then((value) => {console.log(`O novo valor é ${value}`)})
************************************************
***************************************************************
// Erros no Promise

let promisseErrada = Promise.resolve(new Error ("Algo de errado não esta certo"))

promisseErrada
    .then((value) => {console.log(value);})
    .catch(reason => console.log("Erro: " + reason))
************************************************
***************************************************************
// Rejeitando Promises

function verifNum(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(console.log("O numero é: " + num))
        } else {
            reject(new Error("Falhou"))
        }
    })
}

verifNum(2)
verifNum(5)
************************************************
***************************************************************
// Várias Promises

const promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(10)
    }, 5000)
})

const promise2 = Promise.resolve(10)

const promise3 = new Promise((resolve, reject) => {
    resolve(10)
})

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values))
************************************************
***************************************************************
// Funções assincronas

async function somar(a, b) {
    return a + b
}

somar(2,4).then(value => console.log(value))
************************************************
***************************************************************
// Await

function somaComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a + b)

        }, 4000)
    })
}

async function resSoma(a, b, c) {
    let x = somaComDelay(a, b)
    let y = c

    return await x + y
}

console.log(resSoma(1, 2, 3).then(value => console.log(value)));
************************************************
***************************************************************
// Generations

function* criarId() {
    let id = 0
    while(true) {
        yield id++
    }
}

let criaId = criarId()

console.log(criaId.next().value);
console.log(criaId.next().value);
************************************************/
