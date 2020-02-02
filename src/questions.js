export class Question {
  static create(question){
    return fetch('https://ash-vosem-core-js-practice.firebaseio.com/questions.json',{
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-type' : 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      question.id = response.name
      return question
    })
    .then(addToLocalStorage)
    .then(Question.renderList)
  }
  static renderList(){
    const questions = getQuestionsFromLocalStorage()

    const html = questions.length
    ? questions.map(toCard).join('')
    : `<div class="mui--text-headline">Пока что рифм нема :(</div>`

    const questionsList = document.getElementById('questionsList')
    questionsList.innerHTML = html
   
  }
}

function addToLocalStorage(question){
  const all = getQuestionsFromLocalStorage()
  all.unshift(question)
  localStorage.setItem('questions[]',JSON.stringify(all))
}
function getQuestionsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('questions[]') || '[]')
}
function toCard(question) {
  return ` <div class="mui--text-black-54">${question.text}</div>`
}