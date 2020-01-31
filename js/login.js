var formSelector = document.getElementById('existingProfileCheck');//JAN28 ANTHONY: ADDING EVENT LISTENER TO LOGIN FORM
formSelector.addEventListener('submit', check);
// var signUpRedirect = document.getElementById('signUp');
// signUpRedirect.addEventListener('signUp', redirect)

allProfiles = JSON.parse(localStorage.getItem('allProfiles'));
var j;

function check() {
  var userName = document.getElementById('nameOne').value;
  var userPw = document.getElementById('pwordOne').value;
  event.preventDefault();
  if (allProfiles){
    for (var i = 0; i < allProfiles.length; i++){
      if(allProfiles[i].username === userName){//JAN29 ANTHONY: CHECK TO SEE IF USERNAME EXISTS ALREDY... IF IT DOES, THEN CHECK PASSWORD TO COMPLETE LOGIN
        if (allProfiles[i].password == userPw){
          j = i;
          populateLocal();//JAN29 ANTHONY: AT THIS POINT LOGIN IS VALIDATED... AND USER GOES TO PROFILE PAGE? OR??
          window.location.href = '/code-201-project/profile.html';
          return;
        } //JAN29 ANTHONY: ELSE USERNAME EXISTS, BUT PASSWORD IS INCORRECT. LEAVE USERNAME INPUT POPULATED, CLEAR PASSWORD INPUT FIELD
        else //(localStorage.getItem(userName).password !== userpw){
        {
          document.getElementById('pwordOne').value='';
          alert('Incorrect username or password');
          return;
        }
        //while (localStorage.getItem(userName).password !== userPw)//JAN29 ANTHONY: WE SHOULD BE ABLE TO REMAIN IN THIS LOOP SINCE USERNAME EXISTS?
      } else {
        document.getElementById('pwordOne').value='';
      }
    }
  } else{
    alert('Please create a profile.');
    window.location.href = '/code-201-project/signup.html';
  }

  if (i >= allProfiles.length){
    alert('Incorrect username or password.');
  }
}
function redirect(){
  window.location.href = '/code-201-project/signup.html';
};

function populateLocal(){
//    var userName = document.getElementById('nameOne').value;
  var currentUser = JSON.stringify(allProfiles[j]);
  localStorage.setItem('currentUser', currentUser);
}


