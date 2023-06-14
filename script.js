let currentQuestion = 0;
let maxQuestion = 10;

let point = 0;

let startBtn = document.getElementById('start');
let allQuestions = Array.from(document.getElementsByClassName('qestion'));
let buttons = Array.from(document.getElementsByClassName('btn'));
let wrong = Array.from(document.getElementsByClassName('wrong'));
let correct = Array.from(document.getElementsByClassName('correct'));

startBtn.addEventListener('click', event => {

    let startMenu = document.getElementById('starting');
    let firstQuestion = document.getElementById('q1');

    startMenu.style.display = "none";
    firstQuestion.style.display = "flex";

    currentQuestion++;

});

buttons.forEach(element => {

    element.addEventListener('click', event => {

        if(currentQuestion < maxQuestion){
            let currentQ = document.getElementById('q' + currentQuestion);

            currentQuestion++;
            let nextQ = document.getElementById('q' + currentQuestion);
            
            currentQ.style.display = "none";
            nextQ.style.display = "flex";

            if(event['target'].classList == 'correct btn'){
                point++;
            }
        }else{

            if(event['target'].classList == 'correct btn'){
                point++;
            }

            let currentQ = document.getElementById('q' + currentQuestion);
            currentQ.style.display = "none";

            let ending = document.getElementById('ending');
            ending.style.display = "flex";

            let correctAnw = document.getElementById('correctAnw');
            correctAnw.innerText += ` ${point} / 10`;

        }
    })
});