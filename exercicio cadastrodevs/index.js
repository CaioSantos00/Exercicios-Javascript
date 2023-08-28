const addTech = document.getElementById('add')
addTech.addEventListener('click', function addrow() {
    const ul = document.getElementById('ul')
    
    const numbers = Math.floor(Math.random() * 100);
    const li = document.createElement('li')
    li.id = 'newId-' + numbers
    console.log(li)
    const label = document.createElement('label')
    label.innerText = 'Nome da Sua tecnologia'
    label.id = 'labelTech'
    const br2 = document.createElement('br')
    const input = document.createElement('input')
    input.type = 'text'
    input.name = 'inputNumber' + numbers
    input.id = 'input'
    

    const br1 = document.createElement('br')

    const labelr = document.createElement('label')
    labelr.innerText = '1-3 anos'
    const radio1 = document.createElement('input')
     radio1.type = 'radio'
    radio1.innerText = "1-3 anos"
    radio1.name = 'idr1' + numbers
    radio1.id = 'idr1'
    radio1.value = "1-3 anos"

    const labelr2 = document.createElement('label')
    labelr2.innerText = "3-6 anos"
    const radio2 = document.createElement('input')
    radio2.type = 'radio'
    radio2.innerText = "3-6 anos"
    radio2.name= 'idr1' + numbers
    radio2.id = 'idr2'
    radio2.value = "3-6 anos"

    const br = document.createElement('br')

    const del = document.createElement('button')
    del.innerText = "Deletar"
    del.id = 'delNumber'

    del.addEventListener('click', function dele(ev) {
        const remocao = document.getElementById(li)
        if (li) {
            li.remove(numbers)
        }
    })
   
    li.append(label, br2, input, br1, labelr, radio1, labelr2, radio2, br, del)
    ul.appendChild(li)
    
})

const form = document.getElementById('form')
form.addEventListener('submit', function enviodados(ev) {
 ev.preventDefault()
 const name = document.getElementById('nome').value
   const input1 = document.getElementById('input').value
   const r1 = document.getElementById('idr1')
   const r2 = document.getElementById('idr2')

 
    
    console.log(name)
    console.log(input1)
    let techDev = []
    let devs = {nome: name,techs: techDev}
    techDev.push(input1)
    console.log(devs)
    function checar() {
        if (r1.checked) {
            document.getElementById('idr1').value
            techDev.push(r1)
            console.log(r1)
        }
        if (r2.checked) {
            document.getElementById('idr2').value
            techDev.push(r2)
            console.log(r2)
        }        
    }checar()

    document.getElementById('nome').value = ''
    document.getElementById('input').value = ''
    document.getElementById('idr1').value = ''
    document.getElementById('idr2').value = ''
    
    document.getElementById('ul').remove()
 
})