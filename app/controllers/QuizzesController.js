import { quizzesService } from "../services/QuizzesService.js";

export class QuizzesController {

  constructor() {
    console.log('Quizzes Controller, reporting for duty');
    this.getQuizzes()
  }

  getQuizzes() {
    console.log('Getting you some sick triv, nerd 🤓');
    quizzesService.getQuizzes()
  }

}