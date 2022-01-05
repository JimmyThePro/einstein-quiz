let allQuestions = [
    {
        quizQuestion: "When was Albert Einstein born?",
        alt1: "12 January 1819",
        alt2: "13 February 1849",
        alt3: "14 March 1879",
        alt4: "15 April 1909",
        rightAnswer: "alt3",
    },
    {
        quizQuestion: "Where was he born",
        alt1: "England",
        alt2: "France",
        alt3: "Germany",
        alt4: "Switzerland",
        rightAnswer: "alt3",
    },
    {
        quizQuestion: "Which hobbies did he have?",
        alt1: "Piano and Sailing",
        alt2: "Cooking and Running",
        alt3: "Gardening and Architecture",
        alt4: "Singing and Swimming",
        rightAnswer: "alt1",
    },
    {
        quizQuestion: "How much IQ did he have?",
        alt1: "160 - 180",
        alt2: "181 - 200",
        alt3: "201 - 220",
        alt4: "221 - 240",
        rightAnswer: "alt1",
    },
    {
        quizQuestion: "Did he have any sisters and brothers?",
        alt1: "No",
        alt2: "One brother named Claus",
        alt3: "One sister named Maja",
        alt4: "Two sisters named Sarah and Claire",
        rightAnswer: "alt3",
    },
    {
        quizQuestion: "When was he awarded the Nobel Prize in Physics?",
        alt1: "1892",
        alt2: "1902",
        alt3: "1912",
        alt4: "1922",
        rightAnswer: "alt4",
    },
    {
        quizQuestion: "For what did he win Nobel Prize in Physics?",
        alt1: "Research on cathode rays",
        alt2: "Discovery of proton",
        alt3: "Explanation of photoelectric effect",
        alt4: "Discovery of electron",
        rightAnswer: "alt3",
    },
    {
        quizQuestion: "How tall was he?",
        alt1: "165 cm",
        alt2: "170 cm",
        alt3: "175 cm",
        alt4: "180 cm",
        rightAnswer: "alt2",
    },
    {
        quizQuestion: "How much was his weight?",
        alt1: "55 kg",
        alt2: "60 kg",
        alt3: "65 kg",
        alt4: "70 kg",
        rightAnswer: "alt4",
    },
    {
        quizQuestion: "When did he die?",
        alt1: "15 January 1865",
        alt2: "16 February 1895",
        alt3: "17 March 1925",
        alt4: "18 April 1955",
        rightAnswer: "alt4",
    },
];

let question = document.getElementsByClassName("question");
let option = document.getElementsByClassName("option");
let alt1Text = document.getElementById("alt1-text");
let alt2Text = document.getElementById("alt2-text");
let alt3Text = document.getElementById("alt3-text");
let alt4Text = document.getElementById("alt4-text");
let button = document.getElementById("button");

