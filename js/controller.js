$(document).ready(function () {
    showQuestion(number_of_current_question);
    btn_next.click(function () {
        let selectedOption = $("input[name='option']:checked").val();
        if (selectedOption) {
            let correctOption = questions[number_of_current_question - 1].correctAnswer;
            if (selectedOption === correctOption) {
                increase_score()
            }
            if (number_of_current_question < totalQuestions) {
                increase_number_of_current_question();
                showQuestion(number_of_current_question);
            } else {
                showResult(score, totalQuestions);
            }
        } else {
            alert("Будь ласка, оберіть відповідь.");
        }
    });
});