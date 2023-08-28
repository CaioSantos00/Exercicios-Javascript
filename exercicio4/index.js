let departureLightYearsEntry = prompt("Digite a distância em ano luz")

let choseOpition = prompt("Escolha: \n1-Parsec\n2-Unidade astronônima\n3-Quilômetros ")

let choseUnity 
let convertedDistance

switch (choseOpition) {
    case "1":
        choseUnity = "Parsec"
        convertedDistance = departureLightYearsEntry * 0.306601
        break
    case "2":
        choseUnity = "Unidade astronônima"
        convertedDistance = departureLightYearsEntry * 63241.1
        break
    case "3":
        choseUnity = "Quilômetros"
        convertedDistance = departureLightYearsEntry * 9.5 * Math.pow(10, 12)
        break
    default : "Nenhuma opção escolida"
        break;
}

alert("Distância em ano luz: \n" + departureLightYearsEntry + " " + choseUnity + " " + convertedDistance)