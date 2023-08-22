// MODEL
const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don not count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
];



// VIEW
updateView();
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="app">Answer: </div>
    <br/>
    <input>
    <button onclick="fortune()">Get fortune</button>
    `;
}
// CONTROLLER
/*function getFortune(answers) {
    return answers[ Math.floor(Math.random() * answers.length)];
    updateView();
}
*/

function fortune() {
    let randomEl = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('app').textContent = `Answer: ${randomEl}`;
}

updateView();
 
   
