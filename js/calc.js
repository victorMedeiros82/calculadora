//declarando variáveis
var result = ''
var troca = ''
var troca2 = ''
var result2 = ''
var ultimoValorNum=''
//função que adiciona os elementos ao display.
function adicionar(n) {
//pega o ultimo valor do input (display)
ultimoValorNum=document.getElementById('display').value.slice(-1)
//verifica se o ultimo valor NÃO É um número
if(!isNaN(ultimoValorNum)) {
    document.getElementById('display').value+=n
}else if (n === '+' || n === '-' || n === '*' || n === '/' || n === ','){
    if (ultimoValorNum === '+' || ultimoValorNum === '-' || ultimoValorNum === '*' || ultimoValorNum === '/' || ultimoValorNum === ',') {
       //se for sinal e o ultimo num for sinal nao acrescenta 
    } 
}else {
    //se nao for sinal e o ultimo valor for num acrescenta sinal
        document.getElementById('display').value+=n 
    }

}
//função eval() realiza os calculos.
function resultado() {
    //troca ',' por '.'
    troca = document.getElementById('display').value.replaceAll(',', '.')
    result = eval(troca)
    //troca '.' por ','
    troca2 = result.toString().replaceAll('.', ',')
    result2 = document.getElementById('display').value = troca2
    // document.getElementById('display').value = 'Nada para resolver'
    return
}

//função para limpar o display quando clica no C.
function limpar() {
    document.getElementById('display').value = ''
}
//função que eleva o valor do display ao quadrado X².
function potencia() {
    result = document.getElementById('display').value
    document.getElementById('display').value = Math.pow(parseFloat(result), 2)
}

