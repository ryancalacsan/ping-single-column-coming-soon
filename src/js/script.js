const emailInput = document.querySelector('#email');
const hero = document.querySelector('.hero');
const errormsg = document.querySelector('.hero__form-email-error');
const form = document.querySelector('.hero__form');

const isRequired = value => (value === '' ? false : true);

const isEmailValid = email => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const checkEmail = () => {
  let valid = false;
  const email = emailInput.value.trim();
  if (!isRequired(email)) {
    showError('Email cannot be empty');
  } else if (!isEmailValid(email)) {
    showError('Please provide a valid email address');
  } else {
    showSuccess(emailInput);
    valid = true;
  }
};

const showError = message => {
  emailInput.classList.remove('success');
  emailInput.classList.add('error');
  hero.classList.remove('success');
  hero.classList.add('error');
  errormsg.textContent = message;
  errormsg.classList.add('show');
};

const showSuccess = () => {
  emailInput.classList.remove('error');
  emailInput.classList.add('success');
  hero.classList.remove('error');
  hero.classList.add('success');
  errormsg.textConent = '';
  errormsg.classList.remove('show');
};

form.addEventListener('submit', e => {
  let isValidEmail = checkEmail();

  if (!isValidEmail) {
    e.preventDefault();
  }
});
