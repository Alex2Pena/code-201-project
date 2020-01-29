var formSelector = document.getElementById('existingProfileCheck');//JAN28 ANTHONY: ADDING EVENT LISTENER TO LOGIN FORM
formSelector.addEventListener('submit', check);
function check() {
    var userName = document.getElementById('nameOne').value;
    var userPw = document.getElementById('pwordOne').value;
    if(localStorage.getItem(userName)){//JAN29 ANTHONY: CHECK TO SEE IF USERNAME EXISTS ALREDY... IF IT DOES, THEN CHECK PASSWORD TO COMPLETE LOGIN
        do{
            if (localStorage.getItem(userName).password == userPw){
                populateLocal();//JAN29 ANTHONY: AT THIS POINT LOGIN IS VALIDATED... AND USER GOES TO PROFILE PAGE? OR??
            } else { //JAN29 ANTHONY: ELSE USERNAME EXISTS, BUT PASSWORD IS INCORRECT. LEAVE USERNAME INPUT POPULATED, CLEAR PASSWORD INPUT FIELD

            }
        } while (localStorage.getItem(userName).password !== userPw)//JAN29 ANTHONY: WE SHOULD BE ABLE TO REMAIN IN THIS LOOP SINCE USERNAME EXISTS?
        
    } else alert('ERROR.');

//JAN28 ANTHONY: COMMENTED OUT BELOW BLOCK THAT CARRINGTON BUILT; HOPING TO RESTRUCTURE 'CHECK' LOGIC UPON FORM SUBMISSION (AND NOT WHILE FORM IS BEING BUILT)
// check if stored data from register-form is equal to entered data in the   login-form
// function check() {

//     // entered data from the login-form
    // var userName = document.getElementById('nameOne');
    // var userPw = document.getElementById('pwordOne');

//     // stored data from the register-form
    // var storedProfile =JSON.parse(localStorage.getItem(userName));
//     var storedPw = storedProfile.password;
//     var storedName = storedProfile.name;

function populateLocal(){
    var currentUser = JSON.stringify(storedProfile)
    localStorage.setItem('currentUser', currentUser)
};

//     // check if stored data from register-form is equal to data from login form
//    if(userName.value == storedName && userPw.value == storedPw) {
//         alert('You are loged in.');
//     }else {
//         alert('ERROR.');
//     }
// }

// check();//JAN28 ANTHONY

function populateLocal(){
    var currentUser = JSON.stringify(storedProfile)
    localStorage.setItem('currentUser', currentUser)
};
