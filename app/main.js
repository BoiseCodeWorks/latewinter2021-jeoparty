import CluesController from "./Controllers/CluesController.js";

class App {
  cluesController = new CluesController();
}

window["app"] = new App();
