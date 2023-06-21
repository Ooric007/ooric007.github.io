// JavaScript code for phone number validation and formatting
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function (event) {
  const input = event.target;
  const phoneNumber = input.value.replace(/\D/g, '');

  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
  input.value = formattedPhoneNumber;

  validatePhoneNumber(phoneNumber, input);
});

function formatPhoneNumber(phoneNumber) {
  const digits = phoneNumber.replace(/\D/g, '').slice(0, 10);

  let formattedPhoneNumber = '';
  let digitCount = 0;

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];

    if (digitCount === 0) {
      if (digit === '0' || digit === '1') {
        continue;
      } else {
        formattedPhoneNumber += '(';
      }
    } else if (digitCount === 3) {
      if (digit === '0' || digit === '1') {
        continue;
      } else {
        formattedPhoneNumber += ') ';
      }
    } else if (digitCount === 6) {
      formattedPhoneNumber += '-';
    }

    formattedPhoneNumber += digit;
    digitCount++;

    if (digitCount === 10) {
      break;
    }
  }

  return formattedPhoneNumber;
}


function validatePhoneNumber(phoneNumber, input) {
  const phoneError = document.getElementById('phone-error');
  if (!phoneError) return; // Skip validation if element not found

  const isValid = /^([2-9][0-9]{2}-[2-9][0-9]{2}-[0-9]{4}|[0]{1}|[0-9]{10})$/.test(phoneNumber);
  if (isValid) {
    phoneError.textContent = '';
    input.style.border = '2px solid #ced4da';
  } else {
    phoneError.textContent = 'Please enter a valid phone number';
    input.style.border = '2px solid red';
  }
}

function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const phoneError = document.getElementById('phone-error');
  const messageError = document.getElementById('message-error');

  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === '') {
    nameInput.style.border = '2px solid red';
    nameError.style.display = 'block';
    nameError.innerText = 'Please enter your name';
    isValid = false;
  } else {
    nameInput.style.border = '2px solid #ccc';
    nameError.style.display = 'none';
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.style.border = '2px solid red';
    emailError.style.display = 'block';
    emailError.innerText = 'Please enter a valid email address';
    isValid = false;
  } else {
    emailInput.style.border = '2px solid #ccc';
    emailError.style.display = 'none';
  }

  // Validate Phone Number
  const phoneRegex = /^\([2-9][0-9]{2}\) [2-9][0-9]{2}-[0-9]{4}$/;
  if (phoneInput.value !== '' && !phoneRegex.test(phoneInput.value)) {
    phoneInput.style.border = '2px solid red';
    phoneError.style.display = 'block';
    phoneError.innerText = 'Please enter a valid phone number (e.g., (###) ###-####)';
    isValid = false;
  } else {
    phoneInput.style.border = '2px solid #ccc';
    phoneError.style.display = 'none';
  }

  // Validate Message
  if (messageInput.value.trim() === '') {
    messageInput.style.border = '2px solid red';
    messageError.style.display = 'block';
    messageError.innerText = 'Please enter your message';
    isValid = false;
  } else {
    messageInput.style.border = '2px solid #ccc';
    messageError.style.display = 'none';
  }

  return isValid;
}

function addValidationListeners() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');

  nameInput.addEventListener('focusout', validateNameField);
  emailInput.addEventListener('focusout', validateEmailField);
  phoneInput.addEventListener('focusout', validatePhoneField);
  messageInput.addEventListener('focusout', validateMessageField);
}

function validateNameField() {
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('name-error');

  if (nameInput.value.trim() === '') {
    nameInput.style.border = '2px solid red';
    nameError.style.display = 'block';
    nameError.innerText = 'You must enter your name';
  } else {
    nameInput.style.border = '2px solid #ccc';
    nameError.style.display = 'none';
  }
}

function validateEmailField() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value)) {
    emailInput.style.border = '2px solid red';
    emailError.style.display = 'block';
    emailError.innerText = 'You must enter a valid email address to submit';
  } else {
    emailInput.style.border = '2px solid #ccc';
    emailError.style.display = 'none';
  }
}

function validatePhoneField() {
  const phoneInput = document.getElementById('phone');
  const phoneError = document.getElementById('phone-error');
  const phoneRegex = /^\([2-9][0-9]{2}\) [2-9][0-9]{2}-[0-9]{4}$/;

  if (phoneInput.value !== '' && !phoneRegex.test(phoneInput.value)) {
    phoneInput.style.border = '2px solid red';
    phoneError.style.display = 'block';
    phoneError.innerText = 'Please enter a valid US phone number in the format (###) ###-####';
  } else {
    phoneInput.style.border = '2px solid #ccc';
    phoneError.style.display = 'none';
  }
}

function validateMessageField() {
  const messageInput = document.getElementById('message');
  const messageError = document.getElementById('message-error');

  if (messageInput.value.trim() === '') {
    messageInput.style.border = '2px solid red';
    messageError.style.display = 'block';
    messageError.innerText = 'You must enter a message to submit';
  } else {
    messageInput.style.border = '2px solid #ccc';
    messageError.style.display = 'none';
  }
}

const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});

// Add event listeners to trigger validation on field change
addValidationListeners();