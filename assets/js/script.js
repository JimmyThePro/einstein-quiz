/* jshint esversion: 6 */

// store questions in an array

let allQuestions = [
    {
        question: "When was Albert Einstein born?",
        alt1: "12 January 1819",
        alt2: "13 February 1849",
        alt3: "14 March 1879",
        alt4: "15 April 1909",
        rightAnswer: "14 March 1879",
    },
    {
        question: "Where was he born?",
        alt1: "England",
        alt2: "France",
        alt3: "Germany",
        alt4: "Switzerland",
        rightAnswer: "Germany",
    },
    {
        question: "Which hobbies did he have?",
        alt1: "Piano and Sailing",
        alt2: "Cooking and Running",
        alt3: "Gardening and Architecture",
        alt4: "Singing and Swimming",
        rightAnswer: "Piano and Sailing",
    },
    {
        question: "How much IQ did he have?",
        alt1: "160 - 180",
        alt2: "181 - 200",
        alt3: "201 - 220",
        alt4: "221 - 240",
        rightAnswer: "160 - 180",
    },
    {
        question: "Did he have any sisters and brothers?",
        alt1: "No",
        alt2: "One brother named Claus",
        alt3: "One sister named Maja",
        alt4: "Two sisters named Sarah and Claire",
        rightAnswer: "One sister named Maja",
    },
    {
        question: "When was he awarded the Nobel Prize in Physics?",
        alt1: "1892",
        alt2: "1902",
        alt3: "1912",
        alt4: "1922",
        rightAnswer: "1922",
    },
    {
        question: "For what did he win Nobel Prize in Physics?",
        alt1: "Research on cathode rays",
        alt2: "Discovery of proton",
        alt3: "Explanation of photoelectric effect",
        alt4: "Discovery of electron",
        rightAnswer: "Explanation of photoelectric effect",
    },
    {
        question: "How tall was he?",
        alt1: "165 cm",
        alt2: "170 cm",
        alt3: "175 cm",
        alt4: "180 cm",
        rightAnswer: "170 cm",
    },
    {
        question: "How much was his weight?",
        alt1: "55 kg",
        alt2: "60 kg",
        alt3: "65 kg",
        alt4: "70 kg",
        rightAnswer: "70 kg",
    },
    {
        question: "When did he die?",
        alt1: "15 January 1865",
        alt2: "16 February 1895",
        alt3: "17 March 1925",
        alt4: "18 April 1955",
        rightAnswer: "18 April 1955",
    },
];

// call elements by id/class

let question = document.getElementById("question");
let option = document.getElementsByClassName("option");

// radio button setup
let alt1 = document.getElementById("alt1");
let alt2 = document.getElementById("alt2");
let alt3 = document.getElementById("alt3");
let alt4 = document.getElementById("alt4");

let alt1Text = document.getElementById("alt1text");
let alt2Text = document.getElementById("alt2text");
let alt3Text = document.getElementById("alt3text");
let alt4Text = document.getElementById("alt4text");

let button = document.getElementById("button");
let quizArea = document.getElementById("quiz-area");

// set question number to 0
let questionNumber = 0;

// set score to 0
let quizScore = 0;

/**
 * This function show questions/option-answers when user open page in a browser
 */
function populateQuestion() {
    let questionList = allQuestions[questionNumber];
    question.innerHTML = questionList.question;
    
    alt1.value = questionList.alt1;
    alt1Text.innerHTML = questionList.alt1;

    alt2.value = questionList.alt2;
    alt2Text.innerHTML = questionList.alt2;

    alt3.value = questionList.alt3;
    alt3Text.innerHTML = questionList.alt3;

    alt4.value = questionList.alt4;
    alt4Text.innerHTML = questionList.alt4;
}

populateQuestion();

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
    // learned "checked radiobutton" code here: https://tinyurl.com/59ddenvd
    if (document.querySelectorAll('input[type="radio"]:checked').length === 0) {
        alert("You need to select an option...");

    } else if (questionNumber < allQuestions.length-1) {
        score();
        questionNumber++;
        uncheckRadio();
        populateQuestion();

    } else {
        // learned reload button here: https://tinyurl.com/39e3f3pn
        quizArea.innerHTML = `
        <h2>You scored: ${quizScore}/${allQuestions.length}</h2>
        <button id="reloadButton" aria-label="Click button to RELOAD quiz" onClick="window.location.reload()">Reload Quiz!</button>
        `;
    }
}

// click event to next question
button.addEventListener("click", nextQuestion);

/**
 * This function calculates score, one right 'question answer' give user +1 score
 */
function score() {
    let youSelect = document.querySelector('input[type="radio"]:checked');
    let answer = youSelect.value;
    if (allQuestions[questionNumber].rightAnswer === answer) {
        quizScore++;
    }
}