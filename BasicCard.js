// Constructor function for creating basic card object
var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
};

// Exporting our CastMember constructor. We will require it in movie.js
module.exports = BasicCard;