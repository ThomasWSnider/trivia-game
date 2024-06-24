export class Quiz {

  constructor(data) {
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
  }


  get quizHTMLTemplate() {
    return `
          <div class="row">
            <div class="col-12">
              <div class="row justify-content-center">
                <div class="col-6 shadow mb-5">
                  <h3 class="fs-5 text-center pt-2">${this.question}</h3>
                  <hr>
                  <div class="d-flex justify-content-around pb-2">
                    <button class="btn fw-bold">${this.correctAnswer == "True" ? this.correctAnswer : this.incorrectAnswers}</button>
                    <button class="btn fw-bold">${this.correctAnswer == "False" ? this.correctAnswer : this.incorrectAnswers}</button>
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