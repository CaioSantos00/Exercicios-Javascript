function imc(a, b) {
    return new Promise((resolve, reject) => {
        console.log("Aguarde o cálculo está sendo executado")
        setTimeout(() => {
            if (typeof a === 'string' || typeof b === 'string') {
                reject('Não é um número')
            }else {
                resul = a / (b * b) 
                resolve(resul)
            }
        }, 3000)
    })
}

imc(4 , 1.60).then((result) =>{
    console.log('O seu IMC é: ' + result)

    if (result < 18.5) {
        console.log("Magro")
    }else if (result < 24.9) {
        console.log("Normal")
    }else if(result < 29.9) {
        console.log("Sobrepeso")
    }else if(result < 34.9) {
        console.log("Obeso")
    }else if(result < 40) {
        console.log("Obeso grave")
    }
}).catch((reje) => {
    console.log('Tente novamente ' + reje)
})