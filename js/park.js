// //global declarations//
// var speech = [];
// var action = [];

// //Random Number Generator//
// function randomItem(){
//   var randomNumber = Math.floor(Math.random() * speech.length);
//   return randomNumber;
// }
// var leftBubble = document.getElementById('lBubble');


// click on the left bubble
// leftBubble.addEventListener('onclick', function(event) {

// },
// This handler will be executed only once when the cursor
function InteractionCreator(petCardMe, PetCardNew, helloArray,byeArray){
  this.petCardMe = petCardMe;
  this.PetCardNew = PetCardNew;
  this.helloArray = helloArray;
  this.byeArray = byeArray;
}
