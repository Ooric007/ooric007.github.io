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

function validateForm(form) {
  const nameInput = form.querySelector('#name');
  const emailInput = form.querySelector('#email');
  const subjectInput = form.querySelector('#subject');
  const messageInput = form.querySelector('#message');

  const nameError = form.querySelector('#name-error');
  const emailError = form.querySelector('#email-error');
  const phoneError = form.querySelector('#phone-error');
  const subjectError = form.querySelector('#subject-error');
  const messageError = form.querySelector('#message-error');

  let isValid = true;

  // Reset error messages
  const errorMessages = form.querySelectorAll('.error-message');
  errorMessages.forEach(message => {
    message.textContent = '';
  });

  // Reset field borders
  const inputFields = form.querySelectorAll('.form-input');
  inputFields.forEach(field => {
    field.style.border = '2px solid #ccc';
  });

  // Validate Name
  if (nameInput.value.trim() === '') {
    nameInput.style.border = '2px solid red';
    nameError.style.display = 'block';
    nameError.innerText = 'Please enter your name.';
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
    emailError.innerText = 'Please enter a valid email address.';
    isValid = false;
  } else {
    emailInput.style.border = '2px solid #ccc';
    emailError.style.display = 'none';
  }

  // Validate Phone Number
  const phoneRegex = /^\([2-9][0-9]{2}\) [2-9][0-9]{2}-[0-9]{4}$/;
  if (phoneInput.value.trim() !== '' && !phoneRegex.test(phoneInput.value.trim())) {
    phoneInput.style.border = '2px solid red';
    phoneError.style.display = 'block';
    phoneError.innerText = 'Please enter a valid phone number (e.g., (###) ###-####)';
    isValid = false;
  } else {
    phoneInput.style.border = '2px solid #ccc';
    phoneError.style.display = 'none';
  }
  
  // Validate Subject
  if (!isFormSubmitted && subjectInput.value.trim() === '') {
    subjectInput.style.border = '2px solid red';
    subjectError.style.display = 'block';
    subjectError.innerText = 'Please enter your subject.';
    isValid = false;
  } else {
    subjectInput.style.border = '2px solid #ccc';
    subjectError.style.display = 'none';
  }

  // Validate Message
  if (!isFormSubmitted && messageInput.value.trim() === '') {
    messageInput.style.border = '2px solid red';
    messageError.style.display = 'block';
    messageError.innerText = 'Please enter your message.';
    isValid = false;
  } else {
    messageInput.style.border = '2px solid #ccc';
    messageError.style.display = 'none';
  }

  clearInlineErrors();

  return isValid;
}

function addValidationListeners() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  nameInput.addEventListener('focusout', validateNameField);
  emailInput.addEventListener('focusout', validateEmailField);
  phoneInput.addEventListener('focusout', validatePhoneField);
  subjectInput.addEventListener('focusout', validateSubjectField);
  messageInput.addEventListener('focusout', validateMessageField);
}

function validateNameField() {
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('name-error');

  if (nameInput.value.trim() === '') {
    nameInput.style.border = '2px solid red';
    nameError.style.display = 'block';
    nameError.innerText = 'Please enter your name.';
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
    emailError.innerText = 'Please enter a valid email address.';
  } else {
    emailInput.style.border = '2px solid #ccc';
    emailError.style.display = 'none';
  }
}

function validatePhoneField() {
  const phoneInput = document.getElementById('phone');
  const phoneError = document.getElementById('phone-error');
  const phoneRegex = /^\([2-9][0-9]{2}\) [2-9][0-9]{2}-[0-9]{4}$/;

  if (phoneInput.value.trim() !== '' && !phoneRegex.test(phoneInput.value.trim())) {
    phoneInput.style.border = '2px solid red';
    phoneError.style.display = 'block';
    phoneError.innerText = 'Please enter a valid phone number (e.g., (###) ###-####).';
  } else {
    phoneInput.style.border = '2px solid #ccc';
    phoneError.style.display = 'none';
  }
}

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

function validateNameField() {
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('name-error');

  if (nameInput.value.trim() === '') {
    nameInput.style.border = '2px solid red';
    nameError.style.display = 'block';
    nameError.innerText = 'Please enter your name.';
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
    emailError.innerText = 'Please enter a valid email address.';
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
    phoneError.innerText = 'Please enter a valid phone number (e.g., (###) ###-####).';
  } else {
   phoneInput.style.border = '2px solid #ccc';
    phoneError.style.display = 'none';
  }
}

function validateSubjectField() {
  const subjectInput = document.getElementById('subject');
  const subjectError = document.getElementById('subject-error');

  if (subjectInput.value.trim() === '') {
    subjectInput.style.border = '2px solid red';
    subjectError.style.display = 'block';
    subjectError.innerText = 'Please enter your subject.';
  } else {
    subjectInput.style.border = '2px solid #ccc';
    subjectError.style.display = 'none';
  }
}

function validateMessageField() {
  const messageInput = document.getElementById('message');
  const messageError = document.getElementById('message-error');

  if (messageInput.value.trim() === '' && !isFormSubmitted) {
    messageInput.style.border = '2px solid red';
    messageError.style.display = 'block';
    messageError.innerText = 'Please enter your message.';
  } else {
    messageInput.style.border = '2px solid #ccc';
    messageError.style.display = 'none';
  }
}


const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const subjectError = document.getElementById('subject-error');
const messageError = document.getElementById('message-error');
let isFormSubmitted = false;

function handleFormSubmit(event, form) {
  event.preventDefault(); // Prevent form submission by default

  // Clear error messages and field borders
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');
  subjectError.style.display = 'none';
  messageError.style.display = 'none';

  if (form && validateForm(form)) {
    const nameInput = document.getElementById('name');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const encodedEmail = 'Eeric83&#64;hotmail&#46;com';
    const decodedEmail = encodedEmail.replace('&#64;', '@').replace('&#46;', '.');
    const encodedBody = encodeURIComponent(messageInput.value.trim());
    const encodedName = encodeURIComponent(nameInput.value.trim());
    const encodedPhoneNumber = encodeURIComponent(phoneInput.value.trim());
    const encodedSubject = encodeURIComponent(subjectInput.value.trim());
    const decodedName = decodeURIComponent(encodedName);
    const decodedPhoneNumber = decodeURIComponent(encodedPhoneNumber);
    const encodedMessage = encodeURIComponent(`${encodedBody}\n\nSincerely,\n${decodedName}\n${decodedPhoneNumber}`);
    const decodedMessage = decodeURIComponent(encodedMessage.replace(/\+/g, ' '));
    
    const mailtoLink = `mailto:${decodedEmail}?subject=${encodedSubject}&body=${encodeURIComponent(decodedMessage)}`;    
    window.location.href = mailtoLink;

    // Hide subject error message
    const subjectError = document.getElementById('subject-error');
    subjectError.style.display = 'none';

    // Clear form inputs
    subjectInput.value = '';
    messageInput.value = '';

    // Clear inline error messages
    clearInlineErrors();

    // Reset character count
    const characterCount = document.getElementById('message-character-count');
    characterCount.textContent = '0 / 500';
    characterCount.style.color = '';

    // Show success message
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = 'Please send your email after form submission. Thank you!';
    successMessage.style.color = '#fff';
    successMessage.style.display = 'block';
    
    subjectInput.focus();
  }
}

function clearInlineErrors() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  nameInput.style.border = '2px solid #ccc';
  document.getElementById('name-error').style.display = 'none';

  emailInput.style.border = '2px solid #ccc';
  document.getElementById('email-error').style.display = 'none';

  phoneInput.style.border = '2px solid #ccc';
  document.getElementById('phone-error').style.display = 'none';

  subjectInput.style.border = '2px solid #ccc';
  document.getElementById('subject-error').style.display = 'none';

  messageInput.style.border = '2px solid #ccc';
  document.getElementById('message-error').style.display = 'none';
}

form.addEventListener('submit', handleFormSubmit);

// Attach event listeners to form fields
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const characterCount = document.getElementById('message-character-count');

nameInput.addEventListener('input', handleFormInput);
emailInput.addEventListener('input', handleFormInput);
phoneInput.addEventListener('input', handleFormInput);
subjectInput.addEventListener('input', handleFormInput);
messageInput.addEventListener('input', function () {
  const characterLength = messageInput.value.length;
  characterCount.textContent = `${characterLength} / 500`;
  if (characterLength > 500) {
    characterCount.style.color = 'red';
  } else {
    characterCount.style.color = '';
  }
});

// Function to handle form input events
function handleFormInput() {
  console.log('Input detected in form fields.');
  clearSuccessMessage();
}

// Function to clear the success message
function clearSuccessMessage() {
  successMessage.textContent = '';
}

// Add event listeners to trigger validation on field change
addValidationListeners();
