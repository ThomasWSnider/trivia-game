import { AppState } from "../AppState.js";
import { quizzesService } from "../services/QuizzesService.js";
import { setHTML } from "../utils/Writer.js";

export class QuizzesController {

  constructor() {
    console.log('Quizzes Controller, reporting for duty');
    AppState.on('quizzes', this.drawQuizzes)
    this.getQuizzes()
  }

  getQuizzes() {
    console.log('Getting you some sick triv, nerd 🤓');
    quizzesService.getQuizzes()
  }

  drawQuizzes() {
    const quizzes = AppState.quizzes
    let quizInnerHTML = ``
    quizzes.forEach((quiz) => quizInnerHTML += quiz.quizHTMLTemplate)
    setHTML('quizContainer', quizInnerHTML)
  }

}