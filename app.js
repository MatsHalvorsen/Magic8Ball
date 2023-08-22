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
        <br/>
    Ask my anything: <br/>
    <input type="text">
    <button onclick="fortune()">Get fortune</button>
    <div id="app">Answer: </div>

    `;
}
// CONTROLLER
function fortune() {
    let randomEl = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('app').innerHTML = ` 
    Ask my anything: <br/>
    <input type="text">
    <button onclick="fortune()">Get fortune</button>
    <div id="app">Answer: ${randomEl} </div>
    `;
    
}

