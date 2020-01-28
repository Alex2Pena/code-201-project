//global declarations//
var dogTalk = ['Hi', 'How are you', 'Whats your name', 'how old are you?', 'Smell my butt!', 'Do you like to play with toys?', 'You need a haircut', 'Ilike to cuddle']

var rightThink = document.getElementById('rightThink')
var leftThink = document.getElementById('leftThink')

//Random Number Generator//
function randomItem(){
    var randomNumber = Math.floor(Math.random() * dogTalk.length)
    return randomNumber;
}

//For loop to select random array item from var dogTalk//
for (var i=0; i<dogTalk.length; i++){
    
}

