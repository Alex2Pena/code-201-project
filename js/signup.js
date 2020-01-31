'use strict';

var profileForm = document.getElementById('signUp1');

profileForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var username = event.target.nameOne.value;
  var password = event.target.pwordOne.value;
  var email = event.target.email.value;

  myProfile = new Profile(username, password, email);
  updateProfileDataInStorage();
}

