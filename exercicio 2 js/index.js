let namePilot = prompt("Qual o seu nome ?")

let velocity = 0

let velocityNave = prompt("Qual velocidade gostaria ?")

let confirmVelocity = confirm("Estamos acelerando para " + velocityNave + "km/s")

if(confirmVelocity) {
    velocity = velocityNave
}

if(velocity <= 0) {
  alert("Nave está parada. Considere partir e aumentar a velocidade ")
} if(velocityNave < 40) {
    alert("Você está devagar, podemos acelerar ")
} else if(velocityNave < 80) {
    alert("Parece uma boa velocidade para manter")
} else if(velocityNave < 100) {
    alert("Velocidade alta. considere diminuir")
} else if(velocityNave > 100) {
    alert("Velocidade alta demais. Controle automático")
}

alert("Velocidade: " + velocityNave  + "\nNome: " + namePilot )
