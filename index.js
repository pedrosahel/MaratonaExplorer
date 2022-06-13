const answers = [
    "Eu diria que não.",
    "Meu ajudante Mob, vai lhe ajudar nessa questão.",
    "Não há dúvidas.",
    "Tenho que avaliar melhor.",
    "Não sei se devo lhe dizer.",
    "Você não está preparado para a resposta.",
    "Com certeza!",
    "Um espírito malígno não está me permitindo ver a resposta.",
    "Talvez uma massagem espiritual resolva seu problema.",
    "Você não está concentrado o suficiente na pergunta.",
    "Os espíritos falaram que sim.",
    "O sinal foi cortado, talvez uma gorjeta me ajude a canalizar.",
    "Sim!",
    "Isso está certo.",
    "Se você estava esperando uma resposta positiva, sinto muito!"
]

const answerElement = document.querySelector("#answer")
const questionElement = document.querySelector("#question")

function questionMade() {

    answerElement.style.opacity = 1;

    if(questionElement.value == "")
    {
        alert("Digite sua pergunta!")
        return
    }

    const answersLenght = answers.length
    const randomNumber = Math.floor(Math.random() * answersLenght)
    answerElement.innerHTML = "<div>" + answers[randomNumber] + "</div"

    setTimeout(function() {
        answerElement.style.opacity = 0;
    }, 3000)
}