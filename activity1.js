var score = 0 ;

function updatescore() {
score = score + 1;
document.getElementById("scorehere").innerHTML="score:" + score;
}

function savescore() {
    localStorage.setItem("oceana",score);
    
}

function nextpage() {
    window.location="activity_2.html";
    
}