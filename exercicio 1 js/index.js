var olderPersonName = prompt("Digite o nome da pessoa mais velha") 

var olderPersonAge = prompt("Digite a idade da pessoa mais velha")

var youngerPersonName = prompt("Digite o nome da pessoa mais nova")

var youngerPersonAge = prompt("Digite a idade da pessoa mais nova")

 let ageDiference = olderPersonAge - youngerPersonAge 

 alert(
    "Pessoa mais velha: " + olderPersonName + "\nIdade: " + olderPersonAge +
    "\n\nPessoa mais nova: " + youngerPersonName + "\nIdade: " + youngerPersonAge +
    "\n\nDiferença entre idade: " + ageDiference
 )