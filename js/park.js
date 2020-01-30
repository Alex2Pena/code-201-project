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

var interactionObject = generateInteraction('random');
// cardMaker(Interaction.userName, Interaction.random);
console.log(interactionObject.petCardMe);
console.log(interactionObject.petCardNew);
cardMaker(interactionObject.petCardMe);
cardMaker(interactionObject.petCardNew);
renderInteraction();


function cardMaker(petCard){
  var elementID;
  //   var interactionID;

  if (petCard.owner === myProfile.username){
    elementID = 'userDog';
    console.log(elementID);
  }else{
    elementID = 'guestDog';
    interactionID = 'guestChat';
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
  var petInteractContainer = document.getElementById('userChat');
  var petInteractionLocation = document.createElement('ul');
  var petInteractionItem = document.createElement('li');

  petInteractionItem.textContent = interactionObject.helloArray[0];
  petInteractionLocation.appendChild(petInteractionItem);
  petInteractionItem.textContent = interactionObject.helloArray[2];
  petInteractionLocation.appendChild(petInteractionItem);
  petInteractionItem.textContent = interactionObject.helloArray[1];
  petInteractionLocation.appendChild(petInteractionItem);
  petInteractionItem.textContent = interactionObject.byeArray[0];
  petInteractionLocation.appendChild(petInteractionItem);
  petInteractionItem.textContent = interactionObject.byeArray[1];
  petInteractionLocation.appendChild(petInteractionItem);
  petInteractContainer.appendChild(petInteractionLocation);
}

document.getElementById('logout').addEventListener('click', logout);

function logout(){
  localStorage.removeItem('currentUser')
  window.location.href = 'login.html';
}
