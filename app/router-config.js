
import { QuizzesController } from "./controllers/QuizzesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [QuizzesController],
    view: ``
  }
])