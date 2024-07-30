const quizData = [
    {
        question: "海獺/水獺的食物？",
        choices: ["A:都是素食主義者", "B:都是肉食性", "C:跟人類吃一樣"],
        correct: 1
    },
    {
        question: "水獺&海獺的棲息地？",
        choices: ["A:都住在寒冷區域", "B:水獺在寒冷區域 海獺在淡水區域", "C:海獺在寒冷區域 水獺在淡水區域", ],
        correct: 2
    },
    {
        question: "海獺/水獺外型特徵？",
        choices: ["A:水獺毛髮蓬鬆 海獺毛髮油光水滑", "B:水獺毛髮油光水滑 海獺毛髮蓬鬆", "C:以上皆是"],
        correct: 1
    },
    {
        question: "海獺/水獺的進食方式?",
        choices: ["A:水獺可以用石頭敲貝殼攝取貝肉", "B:海獺是捕魚高手 以捕魚為食", "C:海獺用石頭敲貝殼吃肉 水獺以捕魚為食"],
        correct: 2
    },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(index);
        choicesElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        score++;
    }
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        document.getElementById("next-button").style.display = "none";
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").textContent = `${score} / ${quizData.length}`;
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    loadQuestion();
    document.getElementById("next-button").style.display = "none";
}

window.onload = loadQuestion;