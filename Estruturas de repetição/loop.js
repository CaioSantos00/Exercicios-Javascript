let namenave = prompt("Qual o nome da nave")
let dobra = 0
let opcao = ""
opcao = prompt("Você deseja entrar na dobra ? \n 1-Sim \n 2-Não")

while (opcao == "1") {
    dobra += 1
    alert("Você dobrou ")
    opcao = prompt("Proxíma dobra \n1-Sim \n2-Não ")
}
while(opcao == "2"){
    opcao= ""
    alert("Você saiu da dobra ou não dobrou")
}
alert("Nome da nave: " + namenave + "\nDobras: " + dobra)

/*let velocidade = 1
let aceleracao = 1

while (velocidade <= 100) {
   alert("Estamos acelerando " + velocidade + "km/s")
   velocidade = velocidade + aceleracao
}
*/