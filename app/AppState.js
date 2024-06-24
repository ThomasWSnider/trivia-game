import { Quiz } from "./models/Quiz.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  /**
   * @type {Quiz[]}
   */
  quizzes = []
}

export const AppState = createObservableProxy(new ObservableAppState())