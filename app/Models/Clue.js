export default class Clue {
    constructor(data) {
        this.category = data.category.title
        this.question = data.question
        this.value = data.value
        this.answer = data.answer
        this.airdate = data.airdate
        this.answered = data.answered || false
    }

    get Template() {

        return /*html*/`
        <div class="card p-2">
            <h1>${this.category}: ${this.value}</h1>
            <h3>${this.question}</h3>
            <p onclick="app.cluesController.reveal()">${this.answered ? this.answer : "Click to Reveal"}</p>
            <button class="btn btn-success" onclick="app.cluesController.evaluate(true)" ${this.answered ? '' : 'disabled'} >Correct</button>
            <button class="btn btn-danger" onclick="app.cluesController.evaluate(false)" ${this.answered ? '' : 'disabled'}>Incorrect</button>
        </div>
        `
    }
}
