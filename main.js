import { SZEMELYLISTA } from "./funk.js"
import { workwithlist } from "./fuggveny.js"

import {$,jQuery} from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$.getJSON('./kepek', data => {
    console.log(data); //["doc1.jpg", "doc2.jpg", "doc3.jpg"] 
});

faq = 1
for (let i = 1; i < 16; i++){
    document.getElementById("story").innerHTML += "<div class=\"storydiv\"id=\"k"+ Number(i*faq) +"\"><img class=\"storyimg\" src=\"kepek/k"+i+".png\" alt=\""+i+"\"></div>"
}

console.log(workwithlist(SZEMELYLISTA))