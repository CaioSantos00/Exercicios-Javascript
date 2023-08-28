let departureDateEntry = prompt("Digite a data de partida (formato: DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let  today = moment()

let dateDiff = today - departureDate 

let choseOpition = prompt("Escolha como gostaria de exibir: 1-Segundos\n 2-Minnutos\n 3-Horas\n 4-Dias")

if(choseOpition == "1") {
    let secondsDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de vôo: " + secondsDeparture + "Segundos")
} else if(choseOpition == "2") {
    let minutesDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo: " + minutesDeparture + "Minutos")
} else if(choseOpition == "3") {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo: " + hoursOfDeparture + "Horas")
} else if(choseOpition == "4") {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo: " + daysOfDeparture + "Dias")
} else {
    alert("Opção inválida")
}