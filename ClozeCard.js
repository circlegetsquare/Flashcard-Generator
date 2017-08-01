// Constructor function for creating cloze card object

var ClozeCard = function(text, cloze) {

  if (text.includes("...")){
    this.status = true;
    this.text = text;
    this.cloze = cloze;
    this.fullText = text.replace("...", cloze);
  }

  else {
    this.status = false;
  }
};

// Exporting our CastMember constructor. We will require it in movie.js
module.exports = ClozeCard;