import getElement from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const URL = 'https://randomuser.me/api/';

const btn = getElement('.btn');

const showUser = async () => {
  const person = await getUser(URL);
  displayUser(person);
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
