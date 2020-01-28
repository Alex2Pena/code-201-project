'use strict'

var petCardForm = document.getElementById('petCardForm');
petCardForm.addEventListener('submit', handlePetCardFormSubmit);

//TODO: Change to global profile, instead of profile defined here
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

function handlePetCardFormSubmit(event){
    event.preventDefault();
    var inputs = event.target.getElementsByTagName('input');
    var name = inputs[0].textContent;
    
    
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
        var currentDate = new Date();
        var myPetCard = new PetCard(name,'', 'male', 2, 'November 4, 2018', myProfile.username, currentDate, currentDate, 0,0,0,0,0,0);
        myProfile.petCards.push(myPetCard);
        // TODO: Move update of local storage to separate function in global js
        updateProfileDataInStorage();
    } else {
        alert('Oh no! Your profile already includes a pet with that name. You can edit the existing pet or delete it and make a new one. Or, you could make a new version of your pet with a different name. Either way is fine :)');
    }
    

}
