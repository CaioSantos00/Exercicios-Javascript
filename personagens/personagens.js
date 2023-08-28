class personagens {
    constructor(nome, vida, ataque, defesa){
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    Atacar(resul, resul2){
     resul = this.ataque - this.defesa;
     console.log(resul)
     resul2 = this.vida - resul
     console.log(resul2)
    }
}
/*const um = new personagens("EU", 100, 60, 50)
console.log(um)
console.log(um.Atacar())*/

class thief extends personagens  {
  AtacarThief(resulDobro, resulAtaque, resulVida){
    resulDobro = this.ataque * 2
   console.log(resulDobro)
    resulAtaque = resulDobro - this.defesa
    console.log(resulAtaque)
    resulVida = this.vida - resulAtaque
    console.log(resulVida)
  }
}
/*const um = new thief("EUthief", 100, 60, 50)
console.log(um)
console.log(um.AtacarThief())*/

class mage extends personagens {
  constructor(nome, vida, ataque, defesa, magia){
  super(nome, vida, ataque, defesa)
  this.magia = magia
  }
  ataqueMage(resulMage){
   resulMage = this.ataque + this.magia
   console.log(resulMage)
  }
}
const um = new mage("EUMage", 100, 60, 50, 60)
console.log(um)
console.log(um.ataqueMage())