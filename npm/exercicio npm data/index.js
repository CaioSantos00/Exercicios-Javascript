const dayjs = require("dayjs")

function data(dateNa, resul1, aniver) {
    dateNa = "30-03-2006"
    console.log(dateNa)
    resul1 = dayjs().subtract(2006, 'year')
    resul = resul1.$y
    console.log(`Idade atual: ${resul}`)  
    aniver = 2006 + resul + 1
    console.log(`Próximo aniver: 30-03-${aniver}`)
    
}
data()