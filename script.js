let send = document.getElementById('chatbot-send')
let reply = function(e){
    let prp = prompt("May I know your name?");
    alert(`Thank you ${prp} for the good wish!`)
}

send.addEventListener('click', reply)
