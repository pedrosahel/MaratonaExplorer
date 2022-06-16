const answers = [
    "Eu diria que não.",
    "Meu ajudante Mob, vai lhe ajudar nessa questão.",
    "Não há dúvidas.",
    "Tenho que avaliar melhor.",
    "Não sei se devo lhe dizer.",
    "Você não está preparado para a resposta.",
    "Com certeza!",
    "Um espírito malígno não está me permitindo ver a resposta.",
    "Definitivamente!",
    "Você sabe que sim!",
    "Talvez uma massagem espiritual resolva seu problema.",
    "Você não está concentrado o suficiente na pergunta.",
    "Os espíritos falaram que sim.",
    "O sinal foi cortado, talvez uma gorjeta me ajude a canalizar.",
    "Sim!",
    "Isso está certo.",
    "Se você estava esperando uma resposta positiva, sinto muito!"
]
const noQuestions = [
    "Faça uma pergunta!",
    "Você sabe que eu cobro por pergunta feita, não sabe?",
    "Não posso responder sem saber a pergunta.",
    "Sou um paranormal, não um telepata.",
]

const answerElement = document.querySelector("#answer")
const questionElement = document.querySelector("#question")
const timer = 2000; 

let previousQuestion

let timeout;

function questionMade() {

    answerElement.style.opacity = 1;

    clearTimeout(timeout);

    if(questionElement.value == previousQuestion)
    {
        resetAnswer();
        return;
    }

    previousQuestion = questionElement.value;

    if(questionElement.value != "")
    {
        answerDisplay(answers);
    }
    else
    {
        answerDisplay(noQuestions);
    }

}

function answerDisplay(myStringArray) {
    const randomNumber = Math.floor(Math.random() * myStringArray.length);
    answerElement.innerHTML = "<div>" + myStringArray[randomNumber] + "</div";

    resetAnswer();
}

function resetAnswer() {
    timeout = setTimeout(function(){
        answerElement.style.opacity = 0;
    }, timer);
}