/*import { SZEMELYLISTA } from "./funk.js"
import { workwithlist } from "./fuggveny.js"*/

let eventis = [];
let kepekszama = 15;
let ertek = 0;
let imgforward = document.getElementById("forwardimage")
let imgbackward = document.getElementById("backwardimage")
imgforward.addEventListener("click", function() { leptet(1) })
imgbackward.addEventListener("click", function() { leptet(-1) })


updat();
function leptet(mertek){
    if((mertek < 0 && ertek > 0) || (mertek > 0 && ertek < (kepekszama / 4)-1)){
        ertek += mertek;
        updat();
    }
}

function updat(){
    let story =document.getElementById("story");
    let faq = ertek * 4;
    story.innerHTML = "";
    for (let i = 1+faq; i < 5+faq; i++){
        if(LinkCheck(`kepek/k${i}.png`)){
            story.innerHTML += `<div class=\"storydiv\"id=\"k${i}\"><a onclick=\"megjkep('kepek/k${i}.png')\"><img id=\"ki${i}\" class=\"storyimg\" src=\"kepek/k${i}.png\" alt=\"${i}\"></a></div>`
        }
        else{
            story.innerHTML += `<div class=\"storydiv\"id=\"k${i}\"><img id=\"ki${i}\" class=\"storyimg\" src=\"kepek/k0.png\" alt=\"${i}\"></div>`
        }
    }
}

//console.log(workwithlist(SZEMELYLISTA))

function LinkCheck(url){
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}

function megjkep(url){
    myPopup.classList.add("show");
    document.getElementsByClassName("pop-image")[0].innerHTML = `<img id=\"\" class=\"\" src=\"${url}\" alt=\"\">`;
}
// Popup ablakkezelő

closePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup) {
        myPopup.classList.remove("show");
    }
});