import throttle from 'lodash.throttle';
import localStorageService from './localStorage';

const KEY_LOCAL_STORAGE = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const { save, load, remove } = localStorageService;
const formData = {};

onSendInputVelueLS = e => {
  formData[e.target.name] = e.target.value;
  save(KEY_LOCAL_STORAGE, formData);
};

onFormSubmit = e => {
  e.preventDefault();

  console.log(formData);
  e.currentTarget.reset();
  remove(KEY_LOCAL_STORAGE);

  for (const key in formData) {
    delete formData[key];
  }
};

const populateTextForm = () => {
  const saveMessage = load(KEY_LOCAL_STORAGE);

  if (saveMessage) {
    for (const key in saveMessage) {
      const inputEl = formRef.elements[key];
      inputEl.value = saveMessage[key];
    }
  }
};

populateTextForm();
formRef.addEventListener('input', throttle(onSendInputVelueLS, 500));
formRef.addEventListener('submit', onFormSubmit);
