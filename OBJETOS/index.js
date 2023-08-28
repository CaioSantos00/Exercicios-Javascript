let nomeNave = prompt("Digite o  nome da nave: ")
let tipoNave = prompt("Digite o tipo da nave: ")
let velocidadeM = prompt("Digite a velocidade máxima da nave: ")


function acer(acelerar, nave, quanto, quanto1, result, result1) {
    nave = 0
    while (true) {
        acelerar = prompt("1 Acelerar\n 2 Desacelerar\n3 Parar ")
        if (acelerar == "1") {
         quanto = prompt("Quanto vc deseja acelerar ? ")
         result = parseInt(nave)+parseInt(quanto)
    
         alert("Velocidade atual " + result)
    
         if (result >= velocidadeM){
             alert("Velocidade ultrapassada !!\n Desacelere")
             
         }
       
    }     
    
     if (acelerar == "2") {
        quanto1 = prompt("Quanto vc deseja desacelerar ? ")
      result1 = result - quanto1
        alert("Velocidade atual " + result1)
     }
     if (acelerar == "3"){
        alert("Parou a nave")
        break
    }
}

}  
acer()


