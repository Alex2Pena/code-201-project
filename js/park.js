'use strict';

function loginWall(){
  if (!myProfile.username)
  window.location.href = 'login.html'
};
 loginWall();

var interactionObject = generateInteraction('random');
// cardMaker(Interaction.userName, Interaction.random);
// console.log(interactionObject);
// console.log(interactionObject.petCardNew);


function cardMaker(petCard){
  var elementID;

  if (petCard.owner === myProfile.username){
    elementID = 'userDog';
    console.log(elementID);
  }else{
    elementID = 'guestDog';
    console.log(elementID);
  }

  var petCardContainer = document.getElementById(elementID);// Dependent of if ststement from function cardMaker if statement.
  var petCardLocation = document.createElement('div'); // Create petCard element to hold all petCard content

  var petCardName = document.createElement('h3'); // Get petCard name and attach to petCard
  petCardName.textContent = petCard.name;
  petCardLocation.appendChild(petCardName);

  var petCardImageBox = document.createElement('img'); // Get petCard image and attach to petCard
  petCardImageBox.src = petCard.image;
  petCardLocation.appendChild(petCardImageBox);

  var petCardTextBox = document.createElement('section'); // Create text box to hold all petCard text
  petCardLocation.appendChild(petCardTextBox);

  var petCardStatList = document.createElement('ul'); // Create list to have all petCard stats
  petCardStatList.textContent = '';
  petCardTextBox.appendChild(petCardStatList);

  // All 6 petCard stats defined and added to list
  var petCardTextGoodDog = document.createElement('li');
  petCardTextGoodDog.textContent = `Good Dog: ${petCard.goodDog}`;
  var petCardTextFloofiness = document.createElement('li');
  petCardTextFloofiness.textContent = `Floofiness: ${petCard.floofiness}`;
  var petCardTextEnergy = document.createElement('li');
  petCardTextEnergy.textContent = `Energy: ${petCard.energy}`;
  var petCardTextSnuggles = document.createElement('li');
  petCardTextSnuggles.textContent = `Snuggles: ${petCard.snuggles}`;
  var petCardTextAppetite = document.createElement('li');
  petCardTextAppetite.textContent = `Appetite: ${petCard.appetite}`;
  var petCardTextBravery = document.createElement('li');
  petCardTextBravery.textContent = `Bravery: ${petCard.bravery}`;
  petCardStatList.appendChild(petCardTextGoodDog);
  petCardStatList.appendChild(petCardTextFloofiness);
  petCardStatList.appendChild(petCardTextEnergy);
  petCardStatList.appendChild(petCardTextSnuggles);
  petCardStatList.appendChild(petCardTextAppetite);
  petCardStatList.appendChild(petCardTextBravery);
  petCardContainer.appendChild(petCardLocation);
}
// interactionID = 'userChat';
function renderInteraction(){
  var petInteractContainer = document.getElementById('textField');


  var petInteractionLocation = document.createElement('ul');


  var petInteraction1 = document.createElement('li');
  petInteraction1.textContent = interactionObject.helloArray[0];
  petInteractionLocation.appendChild(petInteraction1);

  var petInteraction2 = document.createElement('li'); //guest
  petInteraction2.setAttribute('class', 'guestInteraction');
  petInteraction2.textContent = interactionObject.helloArray[1];
  petInteractionLocation.appendChild(petInteraction2);

  var petInteraction3 = document.createElement('li');
  petInteraction3.textContent = interactionObject.helloArray[2];
  petInteractionLocation.appendChild(petInteraction3);

  var petInteraction4 = document.createElement('li'); //guest
  petInteraction4.setAttribute('class', 'guestInteraction');
  petInteraction4.textContent = interactionObject.byeArray[0];
  petInteractionLocation.appendChild(petInteraction4);

  var petInteraction5 = document.createElement('li');
  petInteraction5.textContent = interactionObject.byeArray[1];
  petInteractionLocation.appendChild(petInteraction5);

  petInteractContainer.appendChild(petInteractionLocation);
  petInteractContainer.appendChild(petInteractionLocation);
}

document.getElementById('logout').addEventListener('click', logout);

function logout(){
  localStorage.removeItem('currentUser')
  window.location.href = 'login.html';
}

function collectPetCard(){
  var match = false;
  // for (var i=0; myProfile.petCards.length; i++){
  //   console.log(match);
  //   console.log(interactionObject);
  //   console.log(interactionObject.petCardNew);
  //   console.log(interactionObject.petCardNew.name);
  //   console.log(myProfile.petCards[i].name);
  //   console.log(i);
  //   if(myProfile.petCards[i].name===interactionObject.petCardNew.name){
  //     match = true;
  //   }
  // }
  console.log(match);
  if(!match){
    console.log(myProfile);
    myProfile.petCards.push(interactionObject.petCardNew);
    console.log('test');
    updateAllProfilesFromMyProfile();
    updateProfileDataInStorage();

  }
}

cardMaker(interactionObject.petCardMe);
cardMaker(interactionObject.petCardNew);
renderInteraction();
collectPetCard();