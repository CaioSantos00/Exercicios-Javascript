const autor = require("./autor");
const coment = require("./coment");

class Post {
    constructor(texto){
        this.texto = texto; 
        this. coment =  []
        this.dataPu = new Date();
    }
    addComent(){
        this.coment.push(new coment())
    }
}

module.exports = Post