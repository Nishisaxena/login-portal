function openForm(role) {
  const popup = document.getElementById('popup');
  const roleTitle = document.getElementById('roleTitle');
  const roleForm = document.getElementById('roleForm');

  roleTitle.textContent = `Welcome ${role.charAt(0).toUpperCase() + role.slice(1)}!`;
  popup.style.display = 'flex';

  roleForm.onsubmit = function(e) {
    e.preventDefault();
    alert(`You have signed up/logged in as ${role.charAt(0).toUpperCase() + role.slice(1)}!`);
    popup.style.display = 'none';
    roleForm.reset();
  }
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}
