function checkQuiz() {
    var correctAnswers = {
        q1: "Westlich von Afrika",
        q2: "Sehr ausgeprägt",
        q3: "60",
        q4: "",
        q5: ""
    };

    var userAnswers = {};
    var questions = document.querySelectorAll('input[type=radio]:checked');

    questions.forEach(function (question) {
        var name = question.name;
        var value = question.value;
        userAnswers[name] = value;
    });

    var score = 0;

    for (var question in userAnswers) {
        if (userAnswers.hasOwnProperty(question) && userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }

    alert("Du hast " + score + " von " + Object.keys(correctAnswers).length + " Fragen richtig beantwortet.");
}