import throttle from 'lodash.throttle';

const FORM_STORAGE_KEY = 'feedback-form-state';

const formState = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY)) || {};

const formInputs = {
  form: document.querySelector('.feedback-form'),
  messageInput: document.querySelector('textarea'),
  emailInput: document.querySelector('input'),
};

formInputs.form.addEventListener('submit', onFormSubmit);
formInputs.form.addEventListener('input', throttle(onFormInput, 500));

function updateFormData() {
  formState.email = formInputs.emailInput.value;
  formState.message = formInputs.messageInput.value;

  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formState));

  if (formState.email) {
    formInputs.emailInput.value = formState.email;
  }

  if (formState.message) {
    formInputs.messageInput.value = formState.message;
  }
}

function onFormInput() {
  updateFormData();
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (!formState.email || !formState.message) {
    alert(`Будь ласка, заповніть всі обов'язкові поля.`);
    return;
  }

  localStorage.removeItem(FORM_STORAGE_KEY);
  evt.currentTarget.reset();
  formState.email = '';
  formState.message = '';
}