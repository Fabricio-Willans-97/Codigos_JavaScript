            /***********************************************/            
                        //EXEMPLOS DE SCRIPTS
            /***********************************************/



/* CALCULAR PORCENTAGEM DE UM VALOR

    function porcentagemNum(porcent, num) {  
        const porcentagem = (porcent / 100) * num
        return porcentagem
    }

    console.log(porcentagemNum(2, 400));
*/



/* VERIFICAR QUAL A PORCENTAGEM ENTRE DOIS VALORES

    function porcentagemNum(num1, num2) {  
        const porcentagem = Math.round((num1 / num2) * 100)
        return porcentagem
    }

    console.log(`${porcentagemNum(9, 68)}%`);
*/



/* INDICE DE MASSA CORPORAL (IMC)

    function imc(peso, altura) {
        const imc = (peso / (altura * altura)).toFixed(1)

        if (imc < 18.5) {
            console.log(`Fulano tem ${imc} de imc e esta abaixo do peso`)
        }
        else if (imc > 25) {
            console.log(`Fulano tem ${imc} de imc e esta acima do peso`)
        }
        else {
            console.log(`Fulano tem ${imc} de imc e esta no peso ideal`)
        }
    }
    imc(70, 1.75)
*/


