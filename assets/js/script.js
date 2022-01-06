// store questions in an array

let allQuestions = [
    {
        question: "When was Albert Einstein born?",
        alt1: "12 January 1819",
        alt2: "13 February 1849",
        alt3: "14 March 1879",
        alt4: "15 April 1909",
        rightAnswer: "alt3",
    },
    {
        question: "Where was he born?",
        alt1: "England",
        alt2: "France",
        alt3: "Germany",
        alt4: "Switzerland",
        rightAnswer: "alt3",
    },
    {
        question: "Which hobbies did he have?",
        alt1: "Piano and Sailing",
        alt2: "Cooking and Running",
        alt3: "Gardening and Architecture",
        alt4: "Singing and Swimming",
        rightAnswer: "alt1",
    },
    {
        question: "How much IQ did he have?",
        alt1: "160 - 180",
        alt2: "181 - 200",
        alt3: "201 - 220",
        alt4: "221 - 240",
        rightAnswer: "alt1",
    },
    {
        question: "Did he have any sisters and brothers?",
        alt1: "No",
        alt2: "One brother named Claus",
        alt3: "One sister named Maja",
        alt4: "Two sisters named Sarah and Claire",
        rightAnswer: "alt3",
    },
    {
        question: "When was he awarded the Nobel Prize in Physics?",
        alt1: "1892",
        alt2: "1902",
        alt3: "1912",
        alt4: "1922",
        rightAnswer: "alt4",
    },
    {
        question: "For what did he win Nobel Prize in Physics?",
        alt1: "Research on cathode rays",
        alt2: "Discovery of proton",
        alt3: "Explanation of photoelectric effect",
        alt4: "Discovery of electron",
        rightAnswer: "alt3",
    },
    {
        question: "How tall was he?",
        alt1: "165 cm",
        alt2: "170 cm",
        alt3: "175 cm",
        alt4: "180 cm",
        rightAnswer: "alt2",
    },
    {
        question: "How much was his weight?",
        alt1: "55 kg",
        alt2: "60 kg",
        alt3: "65 kg",
        alt4: "70 kg",
        rightAnswer: "alt4",
    },
    {
        question: "When did he die?",
        alt1: "15 January 1865",
        alt2: "16 February 1895",
        alt3: "17 March 1925",
        alt4: "18 April 1955",
        rightAnswer: "alt4",
    },
];

// call elements by id/class

let question = document.getElementById("question");
let option = document.getElementsByClassName("option");

let alt1Text = document.getElementById("alt1text");
let alt2Text = document.getElementById("alt2text");
let alt3Text = document.getElementById("alt3text");
let alt4Text = document.getElementById("alt4text");

let button = document.getElementById("button");
let quizArea = document.getElementById("quiz-area");

// set question number to 0
let questionNumber = 0;

/**
 * Starting quiz and show questions/option-answers when user open page in a browser
 */
function startQuiz() {

    let questionList = allQuestions[questionNumber];

    question.innerHTML = questionList.question;
    alt1Text.innerHTML = questionList.alt1;
    alt2Text.innerHTML = questionList.alt2;
    alt3Text.innerHTML = questionList.alt3;
    alt4Text.innerHTML = questionList.alt4;
}

startQuiz();

/**
 * This function unchecks radiobuttons, when next question appears
 */
function uncheckRadio() {
    // learned code here: https://tinyurl.com/yc5a78th
    for (i = 0; i < option.length; i++)
    {
        option[i].checked = false;
    }
}

/**
 * This function loads when user click "submit" button, next question appears
 */
function nextQuestion() {
    if (questionNumber < allQuestions.length-1) {
        questionNumber++;
        uncheckRadio();
        startQuiz();
    } else {
        // learned reload button here: https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click
        quizArea.innerHTML = `
        <h2>You scored: </h2>
        <button onClick="window.location.reload()">Reload Quiz!</button>
        `
    }
}

button.addEventListener("click", nextQuestion);