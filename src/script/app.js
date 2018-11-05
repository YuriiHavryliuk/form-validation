'use strict';

flatpickr("input[type='date']", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    maxDate: "today"
});


var form = document.querySelector('.form'),
    validateBtn = form.querySelector('.form__btn'),
    firstName = form.querySelector('.first-name'),
    lastName = form.querySelector('.last-name'),
    date = form.querySelector('.date'),
    country = form.querySelector('.country'),
    adress = form.querySelector('.adress'),
    email = form.querySelector('.email'),
    password = form.querySelector('.password');


var requiredField = form.querySelectorAll('.required-field');
var validateText = form.querySelectorAll('.validate-text');
var errorCounter = 0;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  removeValidation();
  checkFieldPresence();
  checkQuotes();
  checkEmail();
  if (errorCounter===0) {
    console.log('test');
  }
  errorCounter = 0;
});

var generateError = function (text) {
  var error = document.createElement('span');
  error.className = 'form__error';
  error.innerHTML = text;
  return error;
}

var removeValidation = function() {
  var errors = form.querySelectorAll('.form__error');
  var invalidInputs = form.querySelectorAll('.invalid-input');

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }

  for (var i = 0; i < invalidInputs.length; i++) {
    invalidInputs[i].classList.remove('invalid-input');
  }
}

var checkFieldPresence = function() {
  for (var i = 0; i < requiredField.length; i++) {
    if (!requiredField[i].value.trim()) {
      var error = generateError('• Field cannot be empty');
      requiredField[i].parentElement.insertBefore(error, requiredField[i]);
      requiredField[i].classList.add('invalid-input');
      errorCounter++;
    }
  }
}

var checkQuotes = function() {
  for (var i = 0; i < validateText.length; i++) {
    if (validateText[i].value.search("'") >= 0 | validateText[i].value.search("\"") >= 0){
      var error = generateError("• String contains illegal characters (\",'\)");
      validateText[i].parentElement.insertBefore(error, validateText[i]);
      validateText[i].classList.add('invalid-input');
      errorCounter++;
    }
  }
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var checkEmail = function() {
  var emailValue = email.value;

  if (!validateEmail(emailValue)) {
    var error = generateError("• Please enter valid Email address");
    email.parentElement.insertBefore(error, email);
    email.classList.add('invalid-input');
    errorCounter++;
  }
}
