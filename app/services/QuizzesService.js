import { AppState } from "../AppState.js";
import { Quiz } from "../models/Quiz.js";

class QuizzesService {

  constructor() {
    console.log('I am the QuizzesService, thank you');
  }

  async getQuizzes() {
    // @ts-ignore
    const response = await axios.get('https://opentdb.com/api.php?amount=10&category=9&type=boolean')
    console.log('I got some hard questions here pal.', response);

    const quizzes = response.data.results.map((quiz) => new Quiz(quiz))
    AppState.quizzes = quizzes
    console.log('Good luck', AppState.quizzes);
  }
}

export const quizzesService = new QuizzesService()