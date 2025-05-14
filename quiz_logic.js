document.addEventListener("DOMContentLoaded", () => {
    const max = {}, scores = {}, responseArrays = {};
    let qn = 0;

    for (const key of variableMap) {
        max[key] = 0;
        scores[key] = 0;
        responseArrays[key] = new Array(questions.length);
    }

    for (let i = 0; i < questions.length; i++) {
        for (const [index, value] of questions[i].e) {
            const key = variableMap[index];
            max[key] += Math.abs(value);
        }
    }

    const questionText = document.getElementById("question-text");
    const questionNumber = document.getElementById("question-number");
    const backButton = document.getElementById("back_button");
    const backButtonOff = document.getElementById("back_button_off");

    function init_question() {
        questionText.innerHTML = questions[qn].q;
        questionNumber.innerHTML = `Question ${qn + 1} of ${questions.length}`;
        backButton.style.display = qn === 0 ? 'none' : 'block';
        backButtonOff.style.display = qn === 0 ? 'block' : 'none';
    }

    function next_question(mult) {
        for (const [index, value] of questions[qn].e) {
            const key = variableMap[index];
            responseArrays[key][qn] = mult * value;
        }
        qn++;
        qn < questions.length ? init_question() : results();
    }

    function prev_question() {
        if (qn > 0) {
            qn--;
            init_question();
        }
    }

    function calc_score(score, max) {
        return (100 * (max + score) / (2 * max)).toFixed(1);
    }

    function results() {
        const query = variableMap.map((key) => {
            const total = responseArrays[key].reduce((a, b) => a + b, 0);
            return `${key[0]}=${calc_score(total, max[key])}`;
        }).join("&");

        location.href = `results.html?${query}`;
    }

    // Make functions available globally
    window.next_question = next_question;
    window.prev_question = prev_question;

    init_question();
});