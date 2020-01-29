
// check if stored data from register-form is equal to entered data in the   login-form

    // entered data from the login-form
    var userName = document.getElementById('nameOne').value;
    var userPw = document.getElementById('pwordOne').value;
    // stored data from the register-form
    var storedProfile =JSON.parse(localStorage.getItem(userName));
    // var storedPw = storedProfile.password;
    // var storedName = storedProfile.name;
console.log(userName, 'hii');
    // check if stored data from register-form is equal to data from login form

function populateLocal(){
    var currentUser = JSON.stringify(storedProfile)
    localStorage.setItem('currentUser', currentUser)
};


document.getElementById('loginButton').addEventListener('click', renderLocal)

function renderLocal(){
populateLocal();
   if(userName == storedName && userPw == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
console.log('hello')
}


renderLocal();