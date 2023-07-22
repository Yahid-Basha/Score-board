let home =0;
let guest =0;
score_home = document.getElementById("score-home")
score_guest = document.getElementById("score-guest")
console.log(score_home)
console.log(score_guest)
// for increase 1
function increase1(element){
    if(element=="score-home"){
        home++;
        score_home.innerText = home;
    }
    else{
        guest++;
        score_guest.innerText = guest;
    }
}
// for increase 4
function increase4(element){
    if(element=="score-home"){
        home+=4;
        score_home.innerText = home;
    }
    else{
        guest+=4;
        score_guest.innerText = guest;
    }
}
// for increase 6
function increase6(element){
    if(element=="score-home"){
        home+=6;
        score_home.innerText = home;
    }
    else{
        guest+=6;
        score_guest.innerText = guest;
    }
}