'use strict';

var profileForm = document.getElementById('signUp1');

profileForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var username = event.target.nameOne.value;
  var password = event.target.pwordOne.value;
  var email = event.target.email.value;

  myProfile = new Profile(username, password, email);
  var stringify = JSON.stringify(myProfile);
  localStorage.setItem(username, stringify);
}

var checker = localStorage.getItem(username);
var dataCheck = JSON.parse(checker);

if(username === dataCheck){
  alert('Username is taken. Try again');
}
