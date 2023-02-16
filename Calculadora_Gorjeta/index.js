function valConta() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
        
    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = `${tipPercent}%`
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('billEach').innerHTML = formatMoney(billEach)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
}

//FORMATAR CASAS DECIMAIS DO VALOR
function formatMoney(value) {
    //consertar o 1 centavo perdido
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return `${value} R$`
}

//QUANTAS PESSOAS VÃO DIVIDIR
function formatSplit(value) {
    if (value == 1) {
        return `${value} Pessoa`
    }
    else {
        return `${value} Pessoas`
    }
}