'use strict';

var myProfile = {};
var allProfiles = [];
var allPetCards = [];

function initialize () {
  if (JSON.parse(localStorage.getItem('currentUser'))){
    myProfile = JSON.parse(localStorage.getItem('currentUser'));
  }
  if (JSON.parse(localStorage.getItem('allProfiles'))){
    allProfiles = JSON.parse(localStorage.getItem('allProfiles'));
  }
  if (JSON.parse(localStorage.getItem('allPetCards'))){
    allPetCards = JSON.parse(localStorage.getItem('allPetCards'));
  }
};
//Constructor Function for creating profiles//
var Profile = function (username, password, email) {
  this.username = username;
  this.password = password;
  this.email = email;
  this.petCards = [];
  allProfiles.push(this);
  console.log(allProfiles);
};
//Loads profile file associated with individual user name & loads all profile data to currents browser session//
function getProfileDataFromStorage(username) {
  var allProfilesDataString = localStorage.getItem('allProfiles');
  if (allProfilesDataString) {
    var allProfileData = JSON.parse(allProfilesDataString);
    for(var i=0; i<allProfileData.length; i++){
      if (allProfileData[i].username === username){
        allProfiles = allProfileData;
        myProfile = allProfileData[i];
        return allProfileData[i];
      }
    }
  }
}
//Updates and stringifies profile data into LOCAL STORAGE//
function updateProfileDataInStorage() {
  
  if (myProfile.username) {
    var myProfileDataString = JSON.stringify(myProfile);
    updateAllProfilesFromMyProfile();
    var allProfilesDataString = JSON.stringify(allProfiles);
    var allPetCardsDataString = JSON.stringify(allPetCards);
    localStorage.setItem('currentUser', myProfileDataString); 
    localStorage.setItem('allProfiles', allProfilesDataString);
    localStorage.setItem('allPetCards', allPetCardsDataString);
  }
}

function updateAllProfilesFromMyProfile (){
  if(myProfile){
    for (var i = 0; i< allProfiles.length; i++){
      if(allProfiles[i].username === myProfile.username){
        allProfiles[i] = myProfile;
      }
    }
  }
}

//Creates the interaction content and random petCard//
function Interaction(petCardMe, petCardNew, helloArray, byeArray){
  this.petCardMe = petCardMe;
  this.petCardNew = petCardNew;
  this.helloArray = helloArray;
  this.byeArray = byeArray;
}

var Dog1;//Jan28 ANTHONY: helloArray & byeArray are global, and contain Dog1, Dog2 variables. These variables will get actual pet name string values inside interaction page.
var Dog2;//Jan28 ANTHONY: helloArray & byeArray are global, and contain Dog1, Dog2 variables. These variables will get actual pet name string values inside interaction page.
var helloArrayTotals = [['Say what you feel and be who you are.', 'Why is that ' + Dog1 + '?', 'Because those who mind don\'t matter and those who matter don\'t mind.'], []];
var byeArrayTotals = [['What a pleasure is was to meet with you.', 'We should do this again soon. Bye!'], []];
var createInteraction = document.getElementsByTagName('a')[0];//JAN28 ANTHONY: DOCUMENT TAG FOR EVENT LISTENER
createInteraction.addEventListener('click', generateInteraction);//JAN28 ANTHONY: EVENT LISTNER TO GENERATE INTERACTION DETAILS FOR INTERACTION PAGE
var generateInteraction = function (interactionType) {//JAN28 ANTHONY: petCardType can be set to random, or a specific card from your collection
  console.log('/./././././');
  var chosenHelloArray = randomHelloArray();//select random helloArray
  var chosenByeArray = randomByeArray();//select random byeArray
  var petCardMe = myProfile.petCards[0];
  var petCardNew = {};
  if (interactionType === 'random') {
    petCardNew = randomPetCard();//JAN28 ANTHONY: selecting random pet card
  }
  var newInteraction = new Interaction(petCardMe, petCardNew, chosenHelloArray, chosenByeArray);
  return newInteraction;
};

var randomPetCard = function () {
  var petCard = {};
  var petCardIndex = 0;

  petCardIndex = Math.floor(Math.random() * allPetCards.length);
  petCard = allPetCards[petCardIndex];
  Dog2 = petCard;
  return petCard;
};


var randomHelloArray = function () {
  var hello = helloArrayTotals.length;
  return Math.floor(Math.random() * hello);
};

var randomByeArray = function () {
  var goodbye = byeArrayTotals.length;
  return Math.floor(Math.random() * goodbye);
};

initialize();
