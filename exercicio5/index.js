let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave")
chosenOption = prompt("Deseja entrar em dobra espacial ? \nSim \nNão")

while (chosenOption == "Sim") {
    warpCount += 1
    chosenOption = prompt("Deseja entrar na próxima dobra ?\n Sim\nNão")
} 

alert("Nome da nave :" + spaceship + "\nNúmero de dobras :" + warpCount)
