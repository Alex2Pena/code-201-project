'use strict';

var myProfile = {};

var Profile = function (username, password, email){
  this.username = username;
  this.password = password;
  this.email = email;
  this.petCards = [];
};

function getProfileDataFromStorage(username){
  var profileDataString = localStorage.getItem(username);
  if (profileDataString) {
    var profileData = JSON.parse(profileDataString);
    myProfile = profileData;
  }
}

function updateProfileDataInStorage(){
  if(myProfile.username){
    var stringData = JSON.stringify(myProfile);
    localStorage.setItem(myProfile.username, stringData);
  }
}
