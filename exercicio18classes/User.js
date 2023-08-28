class User {
    constructor(fullName, email, pass){
        this.fullName = fullName;
        this.email = email;
        this.pass = pass
    }
    login(emailL, password){
        emailL = prompt('Digite seu email: ')
        password = prompt('Digite sua senha: ')
        if(this.email == emailL && this.pass == password){
            console.log('Email bem sucedido')
        }else{
            console.log('não')
        }
    }
}

const caio = new User("Caio","caio@123", "123")
caio.login()