import { ProxyState } from "../AppState.js";
import { cluesService } from "../Services/CluesService.js";


//Private
function _draw() {
  document.getElementById("clue").innerHTML = ProxyState.clues[0].Template + `<h5>Score: ${ProxyState.score}</h5>`
}

//Public
export default class CluesController {
  constructor() {
    ProxyState.on("clues", _draw);
  }

  reveal() {
    cluesService.reveal()
  }

  evaluate(isCorrect) {
    cluesService.evaluate(isCorrect)
  }

}
