let btn_next = $(".btn-next");
function showQuestion(questionNumber) {
    $(".question-number").text("Питання " + questionNumber);
    $(".question-text").text(questions[questionNumber - 1].question);
    let options = questions[questionNumber - 1].options;
    let optionsHtml = "";
    for (let i = 0; i < options.length; i++) {
        optionsHtml += '<div class="form-check">' +
            '<input class="form-check-input" type="radio" name="option" id="option' + (i + 1) + '" value="' + (i + 1) + '">' +
            '<label class="form-check-label" for="option' + (i + 1) + '">' + options[i] + '</label>' +
            '</div>';
    }
    $(".options").html(optionsHtml);
}
function showResult(score, totalQuestions) {
    let resultText = "Ви дали " + score + " правильних відповідей з " + totalQuestions + ".";
    $(".quiz-container").hide();
    $(".result-container").show();
    $(".result").text(resultText);
}