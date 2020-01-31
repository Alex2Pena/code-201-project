// generateInteraction();

// var petCardContainer = document.getElementById('userDog');
// var petCard = document.createElement('div');

// var petCardData = myProfile.petCards[0]; // Get petCard data from list of petCards in myProfile

// // var petCard = document.createElement('div'); // Create petCard element to hold all petCard content

// var petCardName = document.createElement('h3'); // Get petCard name and attach to petCard
// petCardName.textContent = petCardData.name;
// petCard.appendChild(petCardName);

// var petCardImageBox = document.createElement('img'); // Get petCard image and attach to petCard
// petCardImageBox.src = petCardData.image;
// petCard.appendChild(petCardImageBox);


// var petCardTextBox = document.createElement('section'); // Create text box to hold all petCard text
// petCard.appendChild(petCardTextBox);

// var petCardStatList = document.createElement('ul'); // Create list to have all petCard stats
// petCardStatList.textContent = '';
// petCardTextBox.appendChild(petCardStatList);


// // All 6 petCard stats defined and added to list
// var petCardTextGoodDog = document.createElement('li');
// petCardTextGoodDog.textContent = `Good Dog: ${petCardData.goodDog}`;
// var petCardTextFloofiness = document.createElement('li');
// petCardTextFloofiness.textContent = `Floofiness: ${petCardData.floofiness}`;
// var petCardTextEnergy = document.createElement('li');
// petCardTextEnergy.textContent = `Energy: ${petCardData.energy}`;
// var petCardTextSnuggles = document.createElement('li');
// petCardTextSnuggles.textContent = `Snuggles: ${petCardData.snuggles}`;
// var petCardTextAppetite = document.createElement('li');
// petCardTextAppetite.textContent = `Appetite: ${petCardData.appetite}`;
// var petCardTextBravery = document.createElement('li');
// petCardTextBravery.textContent = `Bravery: ${petCardData.bravery}`;
// petCardStatList.appendChild(petCardTextGoodDog);
// petCardStatList.appendChild(petCardTextFloofiness);
// petCardStatList.appendChild(petCardTextEnergy);
// petCardStatList.appendChild(petCardTextSnuggles);
// petCardStatList.appendChild(petCardTextAppetite);
// petCardStatList.appendChild(petCardTextBravery);
// petCardContainer.appendChild(petCard);



//--------------------------------------------------------------------------//


function loginWall(){
  if (!myProfile.username)
  window.location.href = '/code-201-project/login.html'
};
loginWall();

var interactionObject = generateInteraction('random');

checkInteraction();

function checkInteraction (){// ABC JAN30: Handles if there is an invalid interaction for any reason.
  if (!interactionObject.petCardNew){
    alert('You have met every dog at the park! Come back later to meet more friends :)');
    window.location.href = '/code-201-project/profile.html';
  }
}

function cardMaker(petCard){
  if(petCard === undefined){
    return; // ABC JAN30: if petCard is undefined, do nothing
  }

  var elementID;
  if (petCard.owner === myProfile.username){
    elementID = 'userDog';
  }else{
    elementID = 'guestDog';
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

function renderInteraction(){
  if(!interactionObject.petCardNew){
    return; // ABC JAN30: If the interactionObject is empty, do nothing
  }
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
  myProfile = {};
  window.location.href = '/code-201-project/login.html';
}

function collectPetCard(){
  if(!interactionObject.petCardNew){
    return; //ABC JAN30: If interaction object does not have a new pet card, do nothing
  }
  var match = false;
  for (var i=0; i<myProfile.petCards.length; i++){
    if(myProfile.petCards[i].name===interactionObject.petCardNew.name){
      match = true;
    }
  }
  if(!match){
    myProfile.petCards.push(interactionObject.petCardNew);
    updateProfileDataInStorage();
  }
}

cardMaker(interactionObject.petCardMe);
cardMaker(interactionObject.petCardNew);

renderInteraction();
collectPetCard();

