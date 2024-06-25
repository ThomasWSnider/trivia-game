import { generateId } from "../utils/GenerateId.js"

export class Quiz {

  constructor(data) {
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
    this.answered = false
    this.answeredCorrectly = false
    this.id = generateId()
  }


  get quizHTMLTemplate() {
    return `
      <div class="row">
        <div class="col-12">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8">
              <div class=" shadow mb-5 bg-light">
                <div class="d-flex align-items-center">
                  <p class="fs-5 text-center pt-4 mx-auto">${this.question}</p>
                  <p class="fs-3 ps-1"><i class="mdi mdi-check-all text-success d-none"><i
                        class="mdi mdi-close text-danger d-none"></i></i></p>
                </div>
                <hr>
                <div class="d-flex justify-content-around pb-2">
                  <button onclick="app.QuizzesController.answerQuiz('${this.id}', 'True')" class="btn fw-bold">${this.correctAnswer == "True" ? this.correctAnswer :
        this.incorrectAnswers}</button>
                  <button onclick="app.QuizzesController.answerQuiz('${this.id}', 'False')" class="btn fw-bold">${this.correctAnswer == "False" ? this.correctAnswer :
        this.incorrectAnswers}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

// {
//   "type": "boolean",
//   "difficulty": "easy",
//   "category": "History",
//   "question": "Thomas Crapper was a plumber who invented the flushing toilet.",
//   "correct_answer": "False",
//   "incorrect_answers": [
//       "True"
//   ]
// }