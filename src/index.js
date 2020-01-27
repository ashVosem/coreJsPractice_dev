import {Question} from './questions'
import './styles.css' 
import { isValid } from './util'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitButton = form.querySelector('#submit')

form.addEventListener('submit',submitFormHandler)
input.addEventListener('input',() => {
  submitButton.disabled = !isValid(input.value)
})

function submitFormHandler(event){
  event.preventDefault()

  if(isValid(input.value)){
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    }

  //Disable spam on button
  submitButton.disabled = true  
  // Asynq req to serv to save text
  Question.create(question).then(() => {
    input.value = ''
    input.className = ''
    submitButton.disabled = false
  })
  }
}
