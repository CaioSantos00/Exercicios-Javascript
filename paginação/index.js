const data = Array.from({ length: 100 })
    .map((_, i) => `<div class="item">Item ${(i + 1)}</div>`)

const html = {
    get(element) {
        return document.querySelector(element)
    }
}


let perPage = 5
    const state = {
        page: 1,
        perPage,
        totalPage: Math.ceil(data.length / perPage)
    }
console.log("Página total " + state.totalPage)

const controls = {
    next() {
        state.page++
        const lastPage = state.page > state.totalPage
        if (lastPage) {
            state.page--
        }
    },
    prev() {
        state.page--
        if(state.page < 1){
            state.page++
        }
    },
    goTo(page) {
        if (page < 1) {
            page = 1 
        }
state.page = page
if (page > state.totalPage) {
    state.page = state.totalPage
}
    },
    createListeners(){
        html.get('.first').addEventListener('click', () =>{
            controls.goTo(1)
            update()
            })
        html.get('.last').addEventListener('click', () =>{
            controls.goTo(state.totalPage)
            update()
            })

        html.get('.next').addEventListener('click', () =>{
            controls.next()
            update()
            })
                html.get('.prev').addEventListener('click', () =>{
            controls.prev()
            update()
            })

}
}
controls.createListeners()


const list= {
    create(item) {
        const div = document.createElement('div')
        div.classList.add('item')
        div.innerHTML = item

        html.get('.list').appendChild(div)
    },
    update() {
        html.get('.list').innerHTML = ""
        let page = state.page - 1
         
        let start = page * state.perPage
        let end = start + state.perPage
        const paginatedItems = data.slice(start, end)
        paginatedItems.forEach(list.create)
    }
}


const buttons = {
    create () {

    },
    update() {
        html.get('.paginate .numbers').innerHTML = ""
    },
}

function update() {
    list.update()
    buttons.update()
    console.log(state.page)
}

function init() {
    update()
    controls.createListeners()
}
init()