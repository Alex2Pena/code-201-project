var formSelector = document.getElementById('existingProfileCheck');//JAN28 ANTHONY: ADDING EVENT LISTENER TO LOGIN FORM
formSelector.addEventListener('submit', check);

function check() {
var userName = document.getElementById('nameOne').value;
var userPw = document.getElementById('pwordOne').value;
    event.preventDefault();
    if(JSON.parse(localStorage.getItem(userName))){//JAN29 ANTHONY: CHECK TO SEE IF USERNAME EXISTS ALREDY... IF IT DOES, THEN CHECK PASSWORD TO COMPLETE LOGIN
         if (JSON.parse(localStorage.getItem(userName)).password == userPw){
                populateLocal();//JAN29 ANTHONY: AT THIS POINT LOGIN IS VALIDATED... AND USER GOES TO PROFILE PAGE? OR??
            window.location.href = "profile.html";
            } //JAN29 ANTHONY: ELSE USERNAME EXISTS, BUT PASSWORD IS INCORRECT. LEAVE USERNAME INPUT POPULATED, CLEAR PASSWORD INPUT FIELD
            else //(localStorage.getItem(userName).password !== userpw){
              {  
              document.getElementById('pwordOne').value='';
                alert('Your password was incorrect!');
            }
        //while (localStorage.getItem(userName).password !== userPw)//JAN29 ANTHONY: WE SHOULD BE ABLE TO REMAIN IN THIS LOOP SINCE USERNAME EXISTS?
        } else {
            alert('Username does not exist');
             document.getElementById('pwordOne').value='';
              document.getElementById('nameOne').value='';
        }
};

function populateLocal(){
    var userName = document.getElementById('nameOne').value;
    var storedProfile =JSON.parse(localStorage.getItem(userName));
    var storedPw = storedProfile.password;
    var storedName = storedProfile.name;
    var currentUser = JSON.stringify(storedProfile)
    localStorage.setItem('currentUser', currentUser)
};


