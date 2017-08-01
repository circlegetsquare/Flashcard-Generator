//Run file passing in "basic" or "cloze" as argument 1
//If basic: add front text as a string as argument 2 and back text as a string as argument 3
//If cloze: add partial text with "..." as argument 2 and cloze deleted text as argument 3

var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var cardType = process.argv[2]

if (cardType === 'basic') {
    var newBasic = new BasicCard(process.argv[3], process.argv[4]);

    console.log("Front: " + newBasic.front);
    console.log("Back: " + newBasic.back);        
}
else if (cardType === 'cloze') {
    var newCloze = new ClozeCard(process.argv[3], process.argv[4]);

    if (newCloze.status == false){
        console.log('Card input error - make sure your partial text contains "...". Try again.')
    }
    else {
    console.log("Partial: " + newCloze.text);
    console.log("Cloze Deletion: " + newCloze.cloze);
    console.log("Full: " + newCloze.fullText);    
    }
}
else {
    console.log("Card type does not exist. Try again.")
}
