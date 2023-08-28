let spaceship = prompt("Digite o nome da nave")

let charToPlace = prompt("Qual caractere deseja substituir ?")

let replacementChar = prompt("Por qual caracter deseja substituir ?")

let newSpaceship = ""

for(let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == charToPlace) {
        newSpaceship += replacementChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert("O novo nome da nave é " + newSpaceship)