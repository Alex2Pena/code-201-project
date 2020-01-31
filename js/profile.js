'use strict'

function loginWall(){
  if (!myProfile.username)
  window.location.href = 'login.html'
};
loginWall();

function renderPetCards() {
  var petCardsOwnedList = document.getElementById('petCardsOwnedList');
  var collectionList = document.getElementById('collectionList');
  
  // ABC JAN28: For each petCard owned by the current user:
  for (var i = 0; i< myProfile.petCards.length;i++){
    var petCardData = myProfile.petCards[i]; // Get petCard data from list of petCards in myProfile
    
    var petCard = document.createElement('div'); // Create petCard element to hold all petCard content

    var petCardName = document.createElement('h3'); // Get petCard name and attach to petCard
    petCardName.textContent = petCardData.name;
    petCard.appendChild(petCardName);

    var petCardImageBox = document.createElement('img'); // Get petCard image and attach to petCard
    petCardImageBox.src = petCardData.image;
    petCard.appendChild(petCardImageBox);

    if (petCardData.owner === myProfile.username){ // Only do for petCards owned by current user
      var petCardTextBox = document.createElement('section'); // Create text box to hold all petCard text
      petCard.appendChild(petCardTextBox);
      
      var petCardStatList = document.createElement('ul'); // Create list to have all petCard stats
      petCardStatList.textContent = '';
      petCardTextBox.appendChild(petCardStatList);

      // All 6 petCard stats defined and added to list
      var petCardTextGoodDog = document.createElement('li');
      petCardTextGoodDog.textContent = `Good Dog: ${petCardData.goodDog}`;
      var petCardTextFloofiness = document.createElement('li');
      petCardTextFloofiness.textContent = `Floofiness: ${petCardData.floofiness}`;
      var petCardTextEnergy = document.createElement('li');
      petCardTextEnergy.textContent = `Energy: ${petCardData.energy}`;
      var petCardTextSnuggles = document.createElement('li');
      petCardTextSnuggles.textContent = `Snuggles: ${petCardData.snuggles}`;
      var petCardTextAppetite = document.createElement('li');
      petCardTextAppetite.textContent = `Appetite: ${petCardData.appetite}`;
      var petCardTextBravery = document.createElement('li');
      petCardTextBravery.textContent = `Bravery: ${petCardData.bravery}`;
      petCardStatList.appendChild(petCardTextGoodDog);
      petCardStatList.appendChild(petCardTextFloofiness);
      petCardStatList.appendChild(petCardTextEnergy);
      petCardStatList.appendChild(petCardTextSnuggles);
      petCardStatList.appendChild(petCardTextAppetite);
      petCardStatList.appendChild(petCardTextBravery);

      petCardsOwnedList.appendChild(petCard);
    }
    // For now: add all cards to collection, regardless of owner
    var collectionCard = document.createElement('div');
    var petCardName = document.createElement('h3'); // Get petCard name and attach to collectionCard
    petCardName.textContent = petCardData.name;
    collectionCard.appendChild(petCardName);

    var petCardImageBox = document.createElement('img'); // Get petCard image and attach to collectionCard
    petCardImageBox.src = petCardData.image;
    collectionCard.appendChild(petCardImageBox);
    
    collectionList.appendChild(collectionCard); 
  }
  // ABC JAN28 FINISH
}

function renderProfile(){
  renderPetCards();
}
// Carrington adding a function to allow selection of current active pet to send to the park
function addDropDownOptions(){

  var dropDown = document.getElementById('petCardDrop')
  for ( var i = 0; i<myProfile.petCards.length; i++){   
    if(myProfile.petCards[i].owner === myProfile.username){
      var dropItems = document.createElement('option')
      dropItems.textContent = myProfile.petCards[i].name;
      dropDown.appendChild(dropItems);
    }
  }
  if(myProfile.petCards[0]){
    myProfile.selectedPet = myProfile.petCards[0];
    updateProfileDataInStorage();
  }
};

}
};
addDropDownOptions();
renderProfile();

document.getElementById('logout').addEventListener('click', logout);

function logout(){
  localStorage.removeItem('currentUser')
  myProfile = {};
  window.location.href = 'login.html';
}
