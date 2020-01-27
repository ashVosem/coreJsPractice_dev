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
  }
}

function addToLocalStorage(question){
  const all = getQuestionsFromLocalStorage()
  all.push(question)
  localStorage.setItem('questions[]',JSON.stringify(all))
}
function getQuestionsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('questions[]') || '[]')
}