            /***********************************************/            
                        //EXEMPLOS DE SCRIPTS
            /***********************************************/



/* CALCULAR PORCENTAGEM DE UM VALOR /

    function porcentagemNum(porcent, num) {  
        const porcentagem = (porcent / 100) * num
        console.log(`${porcent}% de ${num} é igual a ${porcentagem}`);
    }
    //porcentagem e numero total
    porcentagemNum(2, 400)
*/



/* VERIFICAR QUAL A PORCENTAGEM ENTRE DOIS VALORES /

    function porcentagemNum(num1, num2) {  
        const porcentagem = Math.round((num1 / num2) * 100)
        console.log(`${num1} de ${num2} é ${porcentagem}%`);
    }

    porcentagemNum(9, 68)
*/



/* INDICE DE MASSA CORPORAL (IMC) /

    function imc(nome, peso, altura) {
        const imc = (peso / (altura * altura)).toFixed(1)

        if (imc < 18.5) {
            console.log(`${nome} tem ${imc} de imc e esta abaixo do peso`)
        }
        else if (imc > 25) {
            console.log(`${nome} tem ${imc} de imc e esta acima do peso`)
        }
        else {
            console.log(`${nome} tem ${imc} de imc e esta no peso ideal`)
        }
    }
    //Nome | Peso | Altura
    imc('Fulano', 70, 1.75)
*/



/* NÚMERO ALEATÓRIO Math.random() /

    let numAleatorio = function(min, max) {
        min = Math.ceil(min);
        //Math.ceil() retorna o menor número inteiro maior ou igual a "x", ex: Math.ceil(7.004);  // 8
        max = Math.floor(max);
        //Math.floor() retorna o menor número inteiro dentre o número "x", ex: Math.floor( 45.95); //  45
        console.log(Math.floor(Math.random() * (max - min) + min));
}
    // Numero minimo e maximo
    numAleatorio(-10, 10)
    
*/



/* Números aleatórios (Mega-sena) /

        // QUANTOS NÚMEROS SERÃO GERADOS
    function formatSplit(value) {
        if (value == 1) {
            return `${value} Número`
        }
        else {
            return `${value} Números`
        }
    }

    function valNum() {
        let split = document.getElementById('splitInput').value
        document.getElementById('splitValue').innerHTML = formatSplit(split)
    }

    function numAleatorio() {
        let numSorteados = []
        let min = Math.ceil(1);
        let max = Math.floor(60);
        let qtdNum = 10 // document.getElementById('splitInput').value

        // CORRIGIR NÚMEROS REPETIDOS
        while (numSorteados.length < qtdNum) {
            let randomNumber = Math.floor(Math.random() * (max - min) + min).toString()
                if (numSorteados.includes(randomNumber) == false) {
                    numSorteados.push(randomNumber)
                }
                else { 
                    console.log(`${randomNumber} repetiu`); // Verificar quais números repetiram
                    continue
                }
        }

        // CORRIGIR NÚMEROS ABAIXO DE 2 DIGITOS
        function formatDecimal(){
            for (let n = 0; n < numSorteados.length; n++) {
                if (numSorteados[n].length < 2) {
                    numSorteados[n] = '0' + numSorteados[n]
                    console.log(`${numSorteados[n]} é abaixo de 2 digitos`); // Verificar qual número é abaixo de 2 digitos
                } else continue
            }
            return numSorteados
        }

        // CORRIGIR ORDEM DOS NÚMEROS
        let numSorteadosOrdem = formatDecimal().sort(function(a, b) {
            return a - b;
        })

        console.log(numSorteadosOrdem);
        // document.getElementById('numSorteados').innerHTML = numSorteadosOrdem.join(' - ')
    }
    numAleatorio()

*/



/* CONTADOR DE PALAVRAS /

    class WordCounter {
        countWords(string) {
            // Verifica se a string é vazia
            if (!string) {
                return 0;
            }
      
            // Divide a string em palavras usando expressão regular
            const words = string.split(/\s+/);
      
            // Retorna o número de palavras na string
            return words.length;
        }
    }
  
    const counter = new WordCounter();
    const text = "Olá, tudo bem? Quantas palavras tem nesta frase?";
    const wordCount = counter.countWords(text);
    console.log("Número de palavras:", wordCount);
*/



/* CALCULADORA DE RETANGULOS /

    class Retangulo {
        constructor(largura, altura) {
            this.largura = largura;
            this.altura = altura;
        }

        calcularArea() {
            return this.largura * this.altura;
        }

        calcularPerimetro() {
            return 2 * (this.largura + this.altura);
        }
    }

    const retangulo = new Retangulo(5, 8);
    console.log("Área do retângulo:", retangulo.calcularArea());
    console.log("Perímetro do retângulo:", retangulo.calcularPerimetro());
*/



/* CONTA BANCARIA /
    class ContaBancaria {
    constructor(numeroConta, saldo) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
  
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
  
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }
  
    consultarSaldo() {
      return this.saldo;
    }
  }
  
  // Exemplo de uso da classe ContaBancaria
  const minhaConta = new ContaBancaria("123456", 1000);
  minhaConta.depositar(500);
  console.log(minhaConta.consultarSaldo());
*/



/* SISTEMA DE RESERVAS DE VOO /

    class Voo {
        constructor(codigoVoo, origem, destino, assentosDisponiveis) {
            this.codigoVoo = codigoVoo;
            this.origem = origem;
            this.destino = destino;
            this.assentosDisponiveis = assentosDisponiveis;
        }
  
        reservarAssento() {
            if (this.assentosDisponiveis > 0) {
                this.assentosDisponiveis--;
                console.log("Assento reservado com sucesso!");
            } else {
                console.log("Não há assentos disponíveis para reserva.");
            }
        }
  
        consultarAssentosDisponiveis() {
            return this.assentosDisponiveis;
        }
    }
  
    // Exemplo de uso da classe Voo
    const meuVoo = new Voo("123", "São Paulo", "Rio de Janeiro", 100);
    meuVoo.reservarAssento();
    console.log(meuVoo.consultarAssentosDisponiveis());
*/



/* SISTEMA BIBLIOTECA /

    class Livro {
        constructor(titulo, autor) {
            this.titulo = titulo;
            this.autor = autor;
            this.disponivel = true;
        }
  
        emprestar() {
            if (this.disponivel) {
                this.disponivel = false;
                console.log("Livro emprestado com sucesso!");
            } else {
                console.log("O livro não está disponível para empréstimo.");
            }
        }
  
        devolver() {
            if (!this.disponivel) {
                this.disponivel = true;
                console.log("Livro devolvido com sucesso!");
            } else {
                console.log("O livro já está disponível.");
            }
        }
  
        consultarDisponibilidade() {
            return this.disponivel ? "Disponível" : "Indisponível";
        }
    }
  
    // Exemplo de uso da classe Livro
    const meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien");
    console.log(meuLivro.consultarDisponibilidade()); // "Disponível"
    meuLivro.emprestar();
    console.log(meuLivro.consultarDisponibilidade()); // "Indisponível"
    meuLivro.devolver();
    console.log(meuLivro.consultarDisponibilidade()); // "Disponível"
*/
