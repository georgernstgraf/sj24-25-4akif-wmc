class State {
    api_url =
        "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";
    #response;
    #questions;
    elements;
    constructor() {
        this.elements = {};
        this.#questions = [];
    }
    async get_new_questions() {
        const response = await fetch(this.api_url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        this.#response = (await response.json()).results;
        this.#questions = this.#response.map((obj) => new Question(obj));
    }
    get questions() {
        return this.#questions; // array mit question obj.
    }
    get response() {
        return this.#response;
    }
}
class Question {
    #question;
    #correct_answer;
    #incorrect_answers;
    constructor(obj) {
        this.#question = obj.question;
        this.#correct_answer = obj.correct_answer;
        this.#incorrect_answers = obj.incorrect_answers;
    }
    get question() {
        return this.#question;
    }
    get all_answers() {
        return [this.#correct_answer, ...this.#incorrect_answers].toSorted(
            () => Math.random() - 0.5,
        );
    }
    is_correct_answer(answer) {
        return answer === this.#correct_answer;
    }
    get correct_answer() {
        return this.#correct_answer;
    }
}
async function get_questions_clicked() {
    await state.get_new_questions(); // Fragen sind unter state.questions
    window.questions_list.innerHTML = "";
    state.questions.forEach((element) => {
        const li = document.createElement("li");
        li.innerText = element.question;
        window.questions_list.appendChild(li);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    // Your code to run after the DOM is ready
    console.log("DOM fully loaded and parsed");
    // Dom Node Refs

    // Example: Select an element and change its text
    window.state = new State();
    window.get_questions_button = document.getElementById("get-questions");
    window.questions_list = document.getElementById("question-headings");
    window.get_questions_button.addEventListener(
        "click",
        get_questions_clicked,
    );
});
