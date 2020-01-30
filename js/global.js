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
}
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
var helloArrayTotals = [['Say what you feel and be who you are.', 'Why is that ' + Dog1 + '?', 'Because those who mind don\'t matter and those who matter don\'t mind.'],
  ['Good morning, friend, what\'d you have for breakfast today?', 'Eggs and bacon. What about you ?', 'That\'s sounds like a healthy meal for a dog. I had just dog food, which is good enough for me.'],
  ['What are you up to today, ' + Dog2, 'Just snooping around the park. What\'s up with you?', 'West coast living, walking without a leash mostly.'],
  ['Hello there, aren\'t you looking more fluffy than usual.New haircut ?', 'That\'s right, I like to keep it looking fresh.You got to, ya know ' + Dog1 + '?', 'Cool. Well that\'s just all right.'],
  ['The weather forcast shows chance of showers. How\'s that fare, ' + Dog2 + '?', 'Well that works great for me. I heard that wet dog smell\'s coming back.', 'That\'s what\'s up. Wet dog style\'s coming back!'],
  ['I\'m glad I\'m a dog.', 'Me, too, ' + Dog1 + '. ' + Dog2 + ' wags their tail.', Dog1 + ' wags their tail, too.'],
  ['I wonder if we are brave.', 'We sure look dog\'gone brave, ' + Dog1, 'Yes, I know, ' + Dog2 + '... but are we?'],
  ['This whole park is covered in bushes and trees.', 'That\'s right, ' + Dog1 + '. And not one of them is mine.', 'Well I do think that one is mine now.'],
  ['You are in pretty good shape.', 'I guess, for the shape I\'m in.', 'Never sell yourself short, ' + Dog2],
  []




],













];
var byeArrayTotals = [['What a pleasure it was to meet with you.', 'We should do this again soon. Bye!']];
var createInteraction = document.getElementsByTagName('a')[0];//JAN28 ANTHONY: DOCUMENT TAG FOR EVENT LISTENER
createInteraction.addEventListener('click', generateInteraction);//JAN28 ANTHONY: EVENT LISTNER TO GENERATE INTERACTION DETAILS FOR INTERACTION PAGE
var generateInteraction = function (interactionType) {//JAN28 ANTHONY: petCardType can be set to random, or a specific card from your collection
  // console.log('/./././././');
  var chosenHelloArray = randomHelloArray();//select random helloArray
  // console.log(chosenHelloArray);
  var chosenByeArray = randomByeArray();//select random byeArray
  var petCardMe = myProfile.petCards[0];
  // console.log(chosenByeArray);
  var petCardNew = {};
  if (interactionType === 'random') {
    petCardNew = randomPetCard();//JAN28 ANTHONY: selecting random pet card
  }
  var newInteraction = new Interaction(petCardMe, petCardNew, chosenHelloArray, chosenByeArray);
  return newInteraction;
};

var randomPetCard = function() {
  var petCard = {};
  var petCardIndex = 0;
  do{

    petCardIndex = Math.floor(Math.random() * allPetCards.length);
    petCard = allPetCards[petCardIndex];
    Dog2 = petCard;
  }while(petCard.owner === myProfile.username);
  return petCard;
};


var randomHelloArray = function () {
  var hello = helloArrayTotals.length;
  var x = Math.floor(Math.random() * hello);
  return helloArrayTotals[x];
};

var randomByeArray = function () {
  var goodbye = byeArrayTotals.length;
  var y = Math.floor(Math.random() * goodbye);
  return byeArrayTotals[y];
};

initialize();
