'use strict';

flatpickr("input[type='date']", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    maxDate: "today"
});

var form = document.querySelector('.form'),
  email = form.querySelector('.email'),
  requiredField = form.querySelectorAll('.required-field'),
  validateText = form.querySelectorAll('.validate-text'),
  allFields = form.querySelectorAll('.form__input'),
  errorCounter = 0;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  clearErrors();
  checkEmptyFields();
  checkQuotes();
  checkEmail();

  if (!errorCounter) {
    popup.open();
  }
  errorCounter = 0;
});

var generateError = function (text) {
  let error = document.createElement('span');
  error.className = 'form__error';
  error.innerHTML = text;
  return error;
}

var clearErrors = function() {
  let errors = form.querySelectorAll('.form__error'),
      invalidInputs = form.querySelectorAll('.invalid-input');

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
    invalidInputs[i].classList.remove('invalid-input');
  }
}

var checkEmptyFields = function() {
  for (let i = 0; i < requiredField.length; i++) {
    if (!requiredField[i].value.trim()) {
      let error = generateError('• Field cannot be empty');
      requiredField[i].parentElement.insertBefore(error, requiredField[i]);
      requiredField[i].classList.add('invalid-input');
      errorCounter++;
    }
  }
}

var checkQuotes = function() {
  for (let i = 0; i < validateText.length; i++) {
    if (validateText[i].value.search("'") >= 0 | validateText[i].value.search("\"") >= 0){
      let error = generateError("• String contains illegal characters (\",'\)");
      validateText[i].parentElement.insertBefore(error, validateText[i]);
      validateText[i].classList.add('invalid-input');
      errorCounter++;
    }
  }
}

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

var checkEmail = function() {
  let emailValue = email.value;

  if (!validateEmail(emailValue)) {
    let error = generateError("• Please enter valid Email address");
    email.parentElement.insertBefore(error, email);
    email.classList.add('invalid-input');
    errorCounter++;
  }
}

var popup = (function() {
    let modalWindow, overlay;

    document.addEventListener('DOMContentLoaded', function() {
      overlay = document.querySelector('.overlay');
      modalWindow = document.querySelector('.modal');
      overlay.addEventListener('click', close);
    });

    function open() {
      overlay.classList.add('open');
      modalWindow.classList.add('open');
    }

    function close() {
      overlay.classList.remove('open');
      modalWindow.classList.remove('open');

      for (let i = 0; i < allFields.length; i++) {
        allFields[i].value = "";
      }
    }

    return {
      open: open,
      close: close
    }
})();
