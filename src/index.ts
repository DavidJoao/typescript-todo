import { v4 as uuidV4 } from 'uuid'
// console.log(uuidV4())

const list = document.querySelector<HTMLUListElement>('#list');
const input = document.querySelector<HTMLInputElement>('#input-field')
const addButton = document.querySelector('#add-button')
const form = document.querySelector<HTMLFormElement>('#form')

form?.addEventListener('submit', e => {
    e.preventDefault()

    if (input?.value == '' || input?.value == null) return
    
    const task = {
        id: uuidV4,
        title: input.value,
        completed: false,
        createdAt: new Date()
    }
})