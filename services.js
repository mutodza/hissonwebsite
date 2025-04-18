 // Get all links in the navbar
 const navLinks = document.querySelectorAll('nav a');
    
 // Get the current URL
 const currentPage = window.location.href;

 // Loop through each link
 navLinks.forEach(link => {
     // Check if the link's href matches the current URL
     if (link.href === currentPage) {
         // Add the 'active' class to the matching link
         link.classList.add('active');
     }
 });

 function openDialog(service) {
  const dialog = document.getElementById('dialog');
  const serviceInput = document.getElementById('service-required');

  dialog.style.display = 'block';
  serviceInput.value = service; // Dynamically assign the service text
}

function closeDialog() {
  const dialog = document.getElementById('dialog');
  dialog.style.display = 'none';
}

function openDialog(service) {
  const dialog = document.getElementById('dialog');
  const serviceInput = document.getElementById('service-required');

  dialog.style.display = 'block';
  serviceInput.value = service; // Automatically assign the service text
}

function closeDialog() {
  const dialog = document.getElementById('dialog');
  dialog.style.display = 'none';
}

function openDialog(service) {
  const dialog = document.getElementById('dialog');
  const serviceInput = document.getElementById('service-required');

  dialog.style.display = 'block';
  serviceInput.value = service; // Automatically set the service required field
}

function closeDialog() {
  const dialog = document.getElementById('dialog');
  dialog.style.display = 'none';
}

function sendMessage(event) {
  event.preventDefault(); // Prevent form submission from reloading the page


  const name = document.getElementById('full-name').value;
  const telephone = document.getElementById('telephone').value;
  const address = document.getElementById('address').value;
  const serviceRequired = document.getElementById('service-required').value;
  const sanitizedInput = sanitizeInput(userInput);
  console.log(sanitizedInput);
  
  // Generate WhatsApp URL with prefilled message
  const phoneNumber = "263712696206"; // Replace with your WhatsApp number in international format
  const message = `Hello,%20i%20%20require%20your%20services.:%0A%0AFull%20Name:%20N${encodeURIComponent(name)}%0ATelephone:%20${encodeURIComponent(telephone)}%0AAddress:%20${encodeURIComponent(address)}%0AService%20Required:%20${encodeURIComponent(serviceRequired)}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  // Automatically redirect to WhatsApp
  window.open(whatsappURL, "_blank");

  // Display confirmation message
  const confirmation = document.getElementById('confirmation');
  confirmation.style.display = 'block';

  // Automatically hide confirmation after 3 seconds
  setTimeout(() => {
      confirmation.style.display = 'none';
      closeDialog();
  }, 3000);
}
function validateFullName(event) {
  const input = event.target;
  const value = input.value;

  // Convert input to uppercase automatically
  input.value = value.toUpperCase();

  // Validate input: only allow uppercase alphabetic characters and minimum length of 7
  const isValid = /^[A-Z]+$/.test(input.value) && input.value.length >= 7;

  // Show or hide the error message based on validity
  const errorMessage = document.getElementById('name-error');
  if (!isValid) {
      errorMessage.style.display = 'block'; // Show error
  } else {
      errorMessage.style.display = 'none'; // Hide error
  }
}
function convertToUpperCase(event) {
  const input = event.target;
  input.value = input.value.toUpperCase(); // Automatically convert text to uppercase
}
function validateTelephone(event) {
  const input = event.target;
  const value = input.value;

  // Ensure input only contains numeric characters
  input.value = value.replace(/[^0-9]/g, '');

  // Check for length validity (12-14 characters)
  const isValid = input.value.length >= 10 && input.value.length <= 14;

  // Display or hide error message
  const errorMessage = document.getElementById('telephone-error');
  if (!isValid) {
      errorMessage.style.display = 'block'; // Show error message
  } else {
      errorMessage.style.display = 'none'; // Hide error message
  }
}
function validateTelephone(event) {
  const input = event.target;
  const value = input.value;

  function validateAddress(event) {
    const input = event.target;
    const value = input.value;

    // Ensure input contains only alphanumeric characters (letters and numbers)
    const isValid = /^[a-zA-Z0-9]+$/.test(value) && value.length >= 6;

    // Display or hide error message based on validity
    const errorMessage = document.getElementById('address-error');
    if (!isValid) {
        errorMessage.style.display = 'block'; // Show error message
    } else {
        errorMessage.style.display = 'none'; // Hide error message
    }
}

}document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('current-date');

  // Automatically set today's date
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10); // Format as yyyy-mm-dd
  dateInput.value = formattedDate;
});
const navbar = document.querySelectorAll('navbar-links a');

navbar.forEach(link => {
  link.addEventListener('focus', (event) => {
    event.target.style.outline = 'none';
  });
});
const sanitizeInput = (input) => {
  return input.replace(/<script.*?>.*?<\/script>/gi, '');
};









