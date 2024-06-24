class QuizzesService {

  constructor() {
    console.log('I am the QuizzesService, thank you');
  }

  getQuizzes() {
    console.log('I got some hard questions here pal.');
  }
}

export const quizzesService = new QuizzesService()