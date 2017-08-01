// Constructor function for creating cloze card objects

function ClozeCard (text, cloze) {
    if (!(this instanceof ClozeCard)) {
        return new ClozeCard(text, cloze);
    }
    this.text = text;
    this.cloze = cloze;
    this.partialText = text.replace(cloze, "...");
};

module.exports = ClozeCard;
