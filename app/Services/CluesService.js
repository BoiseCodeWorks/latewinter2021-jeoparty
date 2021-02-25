import { ProxyState } from "../AppState.js";
import Clue from "../Models/Clue.js";
import { api } from "./AxiosService.js";

class CluesService {
  
  constructor() {
    this.getClues()
  }

  async getClues() {
    try {
      // ProxyState.clues = (await api.get("random?count=100")).data.map(c => new Clue(c))
      const data = (await api.get("random?count=100")).data
      ProxyState.clues = data.map(rawClueData => new Clue(rawClueData))

      console.log(ProxyState.clues)
    } catch (error) {
      console.error(error)
    }
  }

  reveal() {
    ProxyState.clues[0].answered = true
    ProxyState.clues = ProxyState.clues
  }

  evaluate(isCorrect) {
    ProxyState.score += ProxyState.clues[0].value *= isCorrect ? 1 : -1
    ProxyState.clues = ProxyState.clues.splice(1)
    if (!ProxyState.clues.length) {
      this.getClues()
    }
    console.log(ProxyState.score)
  }


}

export const cluesService = new CluesService();

