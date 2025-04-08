class State {
    api_url =
        "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";
    #response;
    async get_new_questions() {
        const response = await fetch(this.api_url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        this.#response = await response.json();
    }
    get response() {
        return this.#response;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Your code to run after the DOM is ready
    console.log("DOM fully loaded and parsed");

    // Example: Select an element and change its text
    window.state = new State();
});
