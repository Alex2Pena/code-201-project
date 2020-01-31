'use strict';

var myProfile = {};
var allProfiles = [];
var allPetCards = [];

function initialize() {
  if (JSON.parse(localStorage.getItem('currentUser'))) {
    myProfile = JSON.parse(localStorage.getItem('currentUser'));
  }
  if (JSON.parse(localStorage.getItem('allProfiles'))) {
    allProfiles = JSON.parse(localStorage.getItem('allProfiles'));
  }
  if (JSON.parse(localStorage.getItem('allPetCards'))) {
    allPetCards = JSON.parse(localStorage.getItem('allPetCards'));
  }
}
//Constructor Function for creating profiles//
var Profile = function (username, password, email) {
  this.username = username;
  this.password = password;
  this.email = email;
  this.petCards = [];
  this.selectedPet = {};
  allProfiles.push(this);
  console.log(allProfiles);
};
//Loads profile file associated with individual user name & loads all profile data to currents browser session//
function getProfileDataFromStorage(username) {
  var allProfilesDataString = localStorage.getItem('allProfiles');
  if (allProfilesDataString) {
    var allProfileData = JSON.parse(allProfilesDataString);
    for (var i = 0; i < allProfileData.length; i++) {
      if (allProfileData[i].username === username) {
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

function updateAllProfilesFromMyProfile() {
  if (myProfile) {
    for (var i = 0; i < allProfiles.length; i++) {
      if (allProfiles[i].username === myProfile.username) {
        allProfiles[i] = myProfile;
      }
    }
  }
}

//Creates the interaction content and random petCard//
function Interaction(petCardMe, petCardNew, helloArray, byeArray) {
  this.petCardMe = petCardMe;
  this.petCardNew = petCardNew;
  this.helloArray = helloArray;
  this.byeArray = byeArray;
}

var createInteraction = document.getElementsByTagName('a')[0];//JAN28 ANTHONY: DOCUMENT TAG FOR EVENT LISTENER
createInteraction.addEventListener('click', generateInteraction);//JAN28 ANTHONY: EVENT LISTNER TO GENERATE INTERACTION DETAILS FOR INTERACTION PAGE
var generateInteraction = function (interactionType) {//JAN28 ANTHONY: petCardType can be set to random, or a specific card from your collection
  // console.log('/./././././');

  if(!myProfile.selectedPet[0]){
    // console.log(myProfile.selectedPet[0]);
    if (myProfile.petCards[0]){
      myProfile.selectedPet = myProfile.petCards[0];
      // console.log(myProfile.selectedPet);
    } else {
      alert('You have no pups! Go to add dog to create a furry friend.');
      window.location.href = 'creator.html';
      return {};
    }
  }

  var petCardNew = {}; // Determine guest pet
  if (interactionType === 'random') {
    petCardNew = randomPetCard();//JAN28 ANTHONY: selecting random pet card
  }
  var chosenHelloArray = randomHelloArray(myProfile.selectedPet.name, petCardNew.name);//select random helloArray
  // console.log(chosenHelloArray);
  var chosenByeArray = randomByeArray(myProfile.selectedPet.name, petCardNew.name);//select random byeArray
  // console.log(chosenByeArray);
  var newInteraction = new Interaction(myProfile.selectedPet, petCardNew, chosenHelloArray, chosenByeArray);
  return newInteraction;
};

var randomPetCard = function() {
  var petCard = {};
  var petCardIndex = 0;
  do {
    console.log('loop');
    petCardIndex = Math.floor(Math.random() * allPetCards.length);
    petCard = allPetCards[petCardIndex];
  } while (petCard.owner === myProfile.username);
  return petCard;
};


var randomHelloArray = function (Dog1, Dog2) {
  var helloArrayTotals = [['Say what you feel and be who you are.', 'Why is that ' + Dog1 + '?', 'Because those who mind don\'t matter and those who matter don\'t mind.'],
    ['Good morning, friend, what\'d you have for breakfast today?', 'Eggs and bacon. What about you ?', 'That\'s sounds like a healthy meal for a dog. I had just dog food, which is good enough for me.'],
    ['What are you up to today, ' + Dog2, 'Just snooping around the park. What\'s up with you?', 'West coast living, walking without a leash mostly.'],
    ['Hello there, aren\'t you looking more fluffy than usual.New haircut ?', 'That\'s right, I like to keep it looking fresh.You got to, ya know ' + Dog1 + '?', 'Cool. Well that\'s just all right.'],
    ['The weather forcast shows chance of showers. How\'s that fare, ' + Dog2 + '?', 'Well that works great for me. I heard that wet dog smell\'s coming back.', 'That\'s what\'s up. Wet dog style\'s coming back!'],
    ['I\'m glad I\'m a dog.', 'Me, too, ' + Dog1 + '. ' + Dog2 + ' wags their tail.', Dog1 + ' wags their tail, too.'],
    ['I wonder if we are brave.', 'We sure look dog\'gone brave, ' + Dog1, 'Yes, I know, ' + Dog2 + '... but are we?'],
    ['This whole park is covered in bushes and trees.', 'That\'s right, ' + Dog1 + '. And not one of them is mine.', 'Well I do think that one is mine now.'],
    ['You are in pretty good shape.', 'I guess, for the shape I\'m in.', 'Never sell yourself short, ' + Dog2],
    ['It feels opener here in the park.', 'I\'d say so, ' + Dog1 + ' I\'d bark to that.', 'Isn\'t it great, to be in the wide open air ?'],
    ['Today was good and well.', 'Today was dandy and fun.', 'Tomorrow\'s going to be another one.'],
    ['Is there a place for us in this world?', 'You mean like this dog park?', 'That\'s good enough for me, if that\'s good enough for you.'],
    [Dog1 + ' sits, lays down, rolls over.', Dog2 + ' barks, "Bark", and lays down too.', Dog1 + ' barks back: "Bark".'],
    ['With the sun high in they sky, ' + Dog1 + ' looks up and relives their favorite summertime memories.', Dog2 + ' patiently waits for the right time to speak up... everything okay, ' + Dog1 + '?', 'Couldn\'t be better.Wag more, bark less, ya know ?'],
    [Dog1 + ' smells around the tall grass for something brand new.', Dog2 + ' thinks they can smell it, too.', Dog1 + ' finds what ' + Dog2 + ' thought they smelt.'],
    ['All the dogs in the park are running after a squirel that\'s far too fast.', Dog2 + ' waits for ' + Dog1 + ' to join in.', Dog1 + ' waits for ' + Dog2 + ' to make their move.'],
    [Dog1 + ' thinks ' + Dog2 + ' has a great amount of fluff going on today.', Dog2 + ' sees a mud puddle and jumps in.', Dog1 + ' jumps in and joins in on the fun.'],
    [Dog1 + ' is asked to sit and stay.', Dog2 + ' overhears the command and knows what\'s coming. ' + Dog2 + ' sits and stays first.', Dog1 + ' sits and stays, too, and everyone gets treats.'],
    [Dog1 + ' wonders if ' + Dog2 + ' wants to snuggle buggle.', Dog2 + ' appreciates that ' + Dog1 + ' has asked politely, and gives a big hug.', 'A big hug from ' + Dog2 + ' has made ' + Dog1 + '\'s day.Snuggle buddies!'],
    [Dog1 + ' sees a bald eagle in the sky, and hears its piercing squak.', Dog2 + ' wonders what its like to fly like that bird in the sky.', Dog1 + ' says, "Look, the bird of our nation. Its come to give us good luck!"'],
    ['All the money in the world couldn\'t keep ' + Dog1 + ' away from chasing the squirrel around the park.', Dog2 + ' hasn\'t an ounce of will power and chases the critter.', 'Even though the squirrel is far too fast for any dog to catch, ' + Dog1 + ' joins ' + Dog2 + ' in the chase.'],
    [Dog1 + ' is glad they\'re a dog.', Dog2 + ' is glad, too, and wags their tail.', Dog1 + ' wags their tail, too.'],
    [Dog1 + ' takes notice of ' + Dog2 + '\'s resounding bark.', '"Bark, bark, bark"... "Whimper, bark, yelp, yelp"', 'Maybe is not so resounding after all. "Woof, woof"'],
    [Dog1 + ' wags its tail.', Dog2 + ' sniffs for something in the field.', Dog1 + ' follows ' + Dog2 + '; they want to join in on the fun.'],
    [Dog1 + ' is hungry for some food.', Dog2 + ' wanders around looking for its tail.', Dog1 + ' rolls around in the grass.'],
    [Dog1 + ' sees a cloud in the sky that looks like a cat.', 'Meanwhile, ' + Dog2 + ' leaps forward and says, "do you see what I see?"', '"You don\'t like giant cats either?" And then jumps up, after ' + Dog2 + '... "Squirrel!"'],
    ['With great balance, ' + Dog1 + ', sits and focuses on the ball about to be thrown.', 'Meanwhile, ' + Dog2 + ', can hardly hold still.', 'In one giant leap, ' + Dog1 + ' catches the ball mid air, mid flight.'],
    [Dog1 + ' thinks and wonders.', Dog2 + ' wonders and thinks', Dog1 + ' thinks that as soon as things start happening, they\'ll start happening, too.'],
    [Dog1 + ' frollucks over the grassy field. And has never been more happy.', Dog2 + ' stews in the great moment. Today is ' + Dog1 + '\'s day.', Dog1 + ' looks back at ' + Dog2 + ' and thinks outloud, ' + Dog2 + ' is A-okay!']
  ];
  var hello = helloArrayTotals.length;
  var x = Math.floor(Math.random() * hello);
  return helloArrayTotals[x];
};

var randomByeArray = function (Dog1, Dog2) {
  var byeArrayTotals = [['What a pleasure it was to meet with you.', 'We should do this again soon. Bye!'],
    ['Well its nice to meet with you, I had so much fun.', 'Maybe I\'ll see you around the park.Chao!'],
    ['I\'m glad you\'re doing well. Take good care of yourself.', 'See you next time, ' + Dog1 + '.'],
    ['What a pleasure is was to meet with you.', 'Let\'s do this again soon. Bye!'],
    ['When we come back to the park, it\'d be great to see you again.', 'Awesome, possum. ' + Dog1 + 'That sounds swell.'],
    ['Playing with you is as good as it gets.', 'Thanks, ' + Dog2 + ', I enjoyed our time, too. Tata!'],
    ['There\'s no other way to put it. ' + Dog1 + ', you are a great friend.', 'Thanks, ' + Dog2 + '! I sure do like you, too.'],
    ['Even when you\'re down, know that I\'ll be around.', 'That\'s great.Know, you\'ve got a friend in me, too.'],
    ['I like you better than dog food, but not chicken casserole.', 'That\'s so nice.Thanks, ' + Dog2 + '. Chicken casserole\'s the best.'],
    ['I think we are quite the pair, me and you, ' + Dog1 + '.', 'Its funny you say that. I was thinking the same thing. Bye!'],
    ['We\'ve got to get going. I\'ve had so much fun.', 'Same here, ' + Dog1 + '. And more to come. See you around!'],
    ['Well, let\'s do this again some time.', 'That\'d be great, ' + Dog1 + '. I\'d love to be your friend.'],
    ['Take it from me pal, you\'ve been swell.', 'See you around next time. Tata for now.'],
    ['Do you think we can do this again sometime?', 'I\'ll tell you what, next time I\'m at the park I\'ll bark your way.'],
    ['Any chance at seeing you around again?', 'If you need me, I\'ll come running.Chao!'],
    ['This has been a memorable day.','Great to spend it with you. See ya next time.'],
    ['Okie dokie artichokie. I\'ve got to get going, ' + Dog1 + '.' , 'You are awesome. I\'m looking forward to seeing you next time.']
  ];
  var goodbye = byeArrayTotals.length;
  var y = Math.floor(Math.random() * goodbye);
  return byeArrayTotals[y];
};



initialize();
