let input = document.getElementById('input')
let btnBusca = document.getElementById('btnBusca')
let infoClima = document.getElementById('infoClima')
let divCity = document.getElementById('divCity')
let erro = document.getElementById('erro')
let city;

btnBusca.addEventListener('click', async function atualizaClima() {
    divCity.innerHTML =''
    infoClima.innerHTML = ''
    city = input.value
        if (city !== '') {
        erro.innerText = ''

    const buscaClima = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa0f33a054890bc5fd73371867e43d84&lang=pt_br`)
    input.value = ''
    if (!buscaClima.ok) {
        erro.innerText = 'Erro ' + buscaClima.status
        console.log('OK ERROR')
    }else {
    const resulClima = await buscaClima.json()
    console.log(resulClima)
    let resulTemperatura = resulClima.main.temp
    let redondo = Math.floor(resulTemperatura)
    let resul = redondo - 273

    let nameCity = document.createElement('div')
    nameCity.id = 'nameCity'
    nameCity.innerText = resulClima.name
    

    let divImgClima = document.createElement('div')
    divImgClima.id = 'divImgClima'
    let imgClima = document.createElement('img')
    let grauEinfo = document.createElement('div')
    grauEinfo.id = 'grauEinfo'
    let grauCelsiu = document.createElement('div')
    grauCelsiu.id = 'grauCelsiu'
    grauCelsiu.innerText = resul + '°'
    let climaAtual = document.createElement('div')
    climaAtual.id = 'climaAtual' 

    resulClima.weather.forEach(objWeather => {
        climaAtual.innerText = objWeather.description
        imgClima.src= `https://openweathermap.org/img/wn/${objWeather.icon}@2x.png`
    });

    divCity.append(nameCity)
    divImgClima.append(imgClima)

    grauEinfo.append(grauCelsiu)
    grauEinfo.append(climaAtual)
    infoClima.append(divImgClima, grauEinfo)

    
    }      
    } else {
        erro.innerText = 'Verifique e tente novamente'
    }
    
})