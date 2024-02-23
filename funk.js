let sh = require('shelljs');

faq = 1
for (let i = 1; i < 16; i++){
    document.getElementById("story").innerHTML += "<div class=\"storydiv\"id=\"k"+ Number(i*faq) +"\"><img class=\"storyimg\" src=\"kepek/k"+i+".png\" alt=\""+i+"\"></div>"
}