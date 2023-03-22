let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent the default form submission behavior

  const name = form.querySelector('input[type="text"]').value;
  const number = form.querySelector('input[type="number"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const date = form.querySelector('input[type="date"]').value;

  // Send an email using the browser's built-in email API (if available)
  if ('mailto:' in navigator) {
    const mailtoUrl = `mailto:${email}?subject=Appointment%20Booked&body=Hi%20${name},%0D%0A%0D%0AWe%20have%20booked%20your%20appointment%20for%20${date}.%20We%20will%20email%20you%20with%20more%20details%20shortly.%0D%0A%0D%0AThank%20you!`;
    window.location.href = mailtoUrl;
  }

  // Display a confirmation message to the user
  const confirmationMessage = `Hi ${name}, your appointment has been booked for ${date}. We will email you with more details shortly. Thank you!`;
  alert(confirmationMessage);
});
