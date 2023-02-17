const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search')


formAddTodo.addEventListener('submit', event =>{
    event.preventDefault()
    const addInput = event.target.add.value.trim()

    if(addInput){
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${addInput}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`}

    event.target.add.value = ''

})

todosContainer.addEventListener('click', event=>{
    const elementoClicado = event.target
    if (Array.from(elementoClicado.classList).includes('delete')){
        elementoClicado.parentElement.remove()
    }    
})  

formSearch.addEventListener('input', event => {
    event.preventDefault()
    
    const inputSearch = event.target.value.trim()

    Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputSearch))
    .forEach(todo => {
        todo.classList.add('hidden')
        todo.classList.remove('d-flex')
    })

    Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputSearch))
    .forEach(todo => {
        todo.classList.remove('hidden')
        todo.classList.add('d-flex')
    })



    
})




























// formSearch.addEventListener('input', event=>{
//     event.preventDefault()
//     const inputSearch = event.target.value.trim()
    
//     console.log(inputSearch)  

//     Array.from(todosContainer.children)
//     .filter(todo => !todo.textContent.includes(inputSearch))
//     .forEach( todo => {
//         todo.classList.remove('d-flex')
//         todo.classList.add('hidden')
//         console.log(inputSearch.textContent)
//     })


// })

