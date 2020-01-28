'use strict'

var myProfile = {};

var Profile = function (username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.petCards = [];
}

function getProfileDataFromStorage(username) {
    var profileDataString = localStorage.getItem(username);
    if (profileDataString) {
        var profileData = JSON.parse(profileDataString);
        myProfile = profileData;
    }
}

function updateProfileDataInStorage() {
    if (myProfile.username) {
        var stringData = JSON.stringify(myProfile);
        localStorage.setItem(myProfile.username, stringData);
    }
}

var Dog1;//Jan28 ANTHONY: helloArray & byeArray are global, and contain Dog1, Dog2 variables. These variables will get actual pet name string values inside interaction page.
var Dog2;//Jan28 ANTHONY: helloArray & byeArray are global, and contain Dog1, Dog2 variables. These variables will get actual pet name string values inside interaction page.
var helloArrayTotals = [['Say what you feel and be who you are.', 'Why is that ' + Dog1 + '?', 'Because those who mind don\'t matter and those who matter don\'t mind.'], []];
var byeArrayTotals = [['What a pleasure is was to meet with you.', 'We should do this again soon. Bye!'], []];
var createInteraction = document.getElementsByTagName[1];
createInteraction.addEventListener('click', generateInteraction);//JAN28 ANTHONY: EVENT LISTNER TO GENERATE INTERACTION DETAILS FOR INTERACTION PAGE
var generateInteraction = function (petCardType) {//JAN28 ANTHONY: petCardType can be set to random, or a specific card from your collection
    var chosenHelloArray = randomHelloArray();//select random helloArray
    var chosenByeArray = randomByeArray();//select random byeArray
    var petCardMe = localStorage.getItem(this.username);
    var PetCardNew;
    if (petCardType === 'random') {
        PetCardNew = randomPetCard();//JAN28 ANTHONY: selecting random pet card name
    } else {//JAN28 ANTHONY: selecting pet card from collection
        for (var i = 0; i < localStorage.length; i++) {
            for (var ii = 0; ii < localStorage.getItem[i].petCards.length; ii++) {//JAN28 ANTHONY: possible users have multiple pets, so loop thru all possible pets in local storage
                if (petCardType === localStorage.getItem[i].petCards[ii].name) {
                    PetCardNew = localStorage.getItem[i].petCards[ii].name;//JAN28 ANTHONY: selecting specified pet card from collection
                }
            }
        }
    }
}

var randomPetCard = function () {
    var petCounter = 0;
    var newPetCard;
    for (var i = 0; i < localStorage.length; i++) {
        petCounter += localStorage.getItem[i].petCards.length;
    }
    do (
        newPetCard = Math.random() * petCounter;
    ) while (localStorage.getItem[newPetCard].username != myProfile.username)
    return newPetCard;
}

var randomHelloArray = function () {
    var hello = helloArrayTotals.length;
    return Math.random() * hello;
}

var randomByeArray = function () {
    var goodbye = byeArrayTotals.length;
    return Math.random() * goodbye;
}