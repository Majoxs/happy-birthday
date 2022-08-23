const buttonMen = document.querySelector('.header__button-gender--men');
const buttonWomen = document.querySelector('.header__button-gender--women');
const body = document.body;

const state = {
  gender: body.classList.contains('women') ? 'women' : 'men',
};

console.log(state)

const changeToMen = () => {
  if (state.gender !== 'men') {
    body.classList.add('men');
    body.classList.remove('women');
    state.gender = 'men';
  }
};

const changeToWomen = () => {
  if (state.gender !== 'women') {
    body.classList.add('women');
    body.classList.remove('men');
    state.gender = 'woomen';
  }
};

buttonMen.addEventListener('click', changeToMen);
buttonWomen.addEventListener('click', changeToWomen);
