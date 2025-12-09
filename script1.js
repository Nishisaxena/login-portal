const form = document.getElementById('profileForm');
const display = document.getElementById('profileDisplay');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const profession = document.getElementById('profession').value;
  const bio = document.getElementById('bio').value;
  const profilePic = document.getElementById('profilePic').files[0];

  // Display values
  document.getElementById('displayName').textContent = name;
  document.getElementById('displayEmail').textContent = email;
  document.getElementById('displayProfession').textContent = profession;
  document.getElementById('displayBio').textContent = bio;

  if(profilePic){
    const reader = new FileReader();
    reader.onload = function(){
      document.getElementById('displayPic').src = reader.result;
    }
    reader.readAsDataURL(profilePic);
  } else {
    document.getElementById('displayPic').src = '';
  }

  display.style.display = 'block';
  form.reset();
});
