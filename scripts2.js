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



/* 6 Números aleatórios (Mega-sena) /

    function numAleatorio() {
        let numSorteados = []
        let min = Math.ceil(1);
        let max = Math.floor(60);

        // CORRIGIR NÚMEROS REPETIDOS
        while (numSorteados.length <= 5) {
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

        //CORRIGIR ORDEM DOS NÚMEROS
        let numSorteadosOrdem = formatDecimal().sort(function(a, b) {
            return a - b;
        })

        console.log(numSorteadosOrdem);
        // document.getElementById('numSorteados').innerHTML = numSorteadosOrdem.join(' - ')
    }

    numAleatorio()

*/
