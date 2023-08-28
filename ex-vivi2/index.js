let dias = document.getElementById('dias');
let numeroCapital = document.getElementById('numeroCapital');
let caixa = document.getElementById('caixa');
let calculo = document.getElementById('button');

calculo.addEventListener('click', () => {
    if (dias.value == '' || numeroCapital.value == '') {
        alert("Digite algum valor")
    }else{
    let capital = numeroCapital.value
    let taxa = 10
    let tempo = dias.value
    resulTaxa = 10/100
    resul = capital * resulTaxa * tempo
    caixa.innerText = 'O juros irá ser de: R$' + Math.round(resul)
    }
})

