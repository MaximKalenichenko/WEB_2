let number_of_current_question = 1;
let totalQuestions = 2;
let score = 0;
let questions = [
    {
        question: "Яка столиця України?",
        options: ["Київ", "Львів", "Харків", "Одеса"],
        correctAnswer: "1"
    },
    {
        question: "Яка найбільша річка у світі?",
        options: ["Амазонка", "Ніл", "Міссісіпі", "Янцзи"],
        correctAnswer: "1"
    }
];
function increase_score() {
    score += 1;
}
function increase_number_of_current_question() {
    number_of_current_question += 1;
}