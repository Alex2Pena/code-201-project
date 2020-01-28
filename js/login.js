
// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // entered data from the login-form
    var userName = document.getElementById('nameOne');
    var userPw = document.getElementById('pwordOne');

    // stored data from the register-form
    var storedProfile =JSON.parse(localStorage.getItem(userName));
    var storedPw = storedProfile.password;
    var storedName = storedProfile.name;


    // check if stored data from register-form is equal to data from login form
   if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}

check();

function populateLocal(){
    var currentUser = JSON.stringify(storedProfile)
    localStorage.setItem('currentUser', currentUser)
};

