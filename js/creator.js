'use strict'
var petCardForm = document.getElementById('petCardForm');
petCardForm.addEventListener('submit', handlePetCardFormSubmit);

var myProfile = {
    username: 'Andrew',
    password: 'password',
    email: 'email',
    petCards: []
}

var PetCard = function (name, image, sex, age, birthday, owner, dateCollected, dateCreated, 
    goodDog, floofiness, energy, snuggles, appetite, bravery){
        this.name = name;
        this.image = image;
        this.sex = sex;
        this.age = age;
        this.birthday = birthday;
        this.owner = owner;
        this.dateCollected = dateCollected;
        this.dateCreated = dateCreated;
        this.goodDog = goodDog;
        this.floofiness = floofiness;
        this.energy = energy;
        this.snuggles = snuggles;
        this.appetite = appetite;
        this.bravery = bravery;
}

function handlePetCardFormSubmit(){
    var name = 'Tucker';
    
    // Check if the inputted name already exists on a petCard on this profile 
    var nameMatch = false;
    for(var i=0; i< myProfile.petCards.length; i++){
        if(name.toLowerCase()===myProfile.petCards[i].name.toLowerCase()) {
            nameMatch = true;
            break;
        }
    }

    // If a name match is not found, ok to create a new petCard
    if (nameMatch===false) {
        var myPetCard = new PetCard();
        myProfile.petCards.push(myPetCard);
    } else {
        alert('Oh no! Your profile already includes a pet with that name. You can edit the existing pet or delete it and make a new one. Or you could make a new version of your pet with a different name. Either way is fine :)');
    }
    

}
