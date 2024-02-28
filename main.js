import { SZEMELYLISTA } from "./funk.js"
import { workwithlist } from "./fuggveny.js"
let ertek = 0;

updat();
function leptet(mertek){
    ertek += mertek;
    updat();
}

function updat(){
    let faq = ertek * 4;
    for (let i = 1+faq; i < 5+faq; i++){
        document.getElementById("story").innerHTML += "<div class=\"storydiv\"id=\"k"+ Number(i) +"\"><img class=\"storyimg\" src=\"kepek/k"+i+".png\" alt=\""+i+"\"></div>"
    }
}

console.log(workwithlist(SZEMELYLISTA))