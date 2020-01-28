//global declarations//


//Random Number Generator//
function randomItem(){
    var randomNumber = Math.floor(Math.random() * dogTalk.length)
    return randomNumber;
}
function InteractionCreator(petCardMe, PetCardNew, helloArray,byeArray){
    this.petCardMe = petCardMe
    this.PetCardNew = PetCardNew
    this.helloArray = helloArray
    this.byeArray = byeArray
}

var interact1 = new InteractionCreator(petCardMe,PetCardNew, [])