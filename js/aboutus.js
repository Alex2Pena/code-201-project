document.getElementById('logout').addEventListener('click', logout);

function logout(){
  localStorage.removeItem('currentUser');
  myProfile = {};
  window.location.href = 'login.html';
};