// Name and Password from the register-form
// var name = document.getElementById('nameOne');
// var pw = document.getElementById('pwordOne');

// storing input from register-form
// function store() {
//     localStorage.setItem('nameOne', nameOne.value);
//     localStorage.setItem('pwordOne', pwordOne.value);
// }

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('nameOne');
    var storedPw = localStorage.getItem('pwordOne');

    // entered data from the login-form
    var userName = document.getElementById('nameOne');
    var userPw = document.getElementById('pwordOne');

    // check if stored data from register-form is equal to data from login form
   if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}