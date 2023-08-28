class nave {
    constructor(name, quantidade, portas, engatada){
        this.name = name 
        this.quantidade = quantidade
        this.portas = false
        this.engatada = false
    }
    hitch(){
        this.portas = true
        this.engatada = true
    }
}
let caixa = []
function cadaster() {
    namenew = prompt("NOME")
    quanti = prompt("QUANTIDADE")
}
function menu(opcoes) {
    while (opcoes != "1" && opcoes != "2" && opcoes != "3") {
       opcoes = prompt("1-Cadastrar naves\n 2-Imprimir naves\n 3-Sair")
} return opcoes 
           
    }
    switch (menu) {
        case "1":
            let add = cadaster()
            caixa.push(add)
            break;
    
        default:
            break;
    }          
menu()
