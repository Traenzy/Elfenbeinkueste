function checkQuiz() {
    var correctAnswers = {
        q1: "3",
        q2: "1",
        q3: "2",
        q4: "1",
        q5: "1"
    };

    var userAnswers = {};
    var questions = document.querySelectorAll('input[type=radio]:checked');

    questions.forEach(function (question) {
        console.log(question.name);
        console.log(question.value);
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