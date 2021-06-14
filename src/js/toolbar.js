
const refs = {
  switcher: document.querySelector(`#theme-switch-toggle`),
  body: document.body
}
const { switcher, body } = refs;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

localStorage.getItem(`bodyClassCurrent`) === DARK
  ? (switcher.checked = true)
  : (switcher.checked = false);

switcher.checked ? body.classList.add(DARK) : body.classList.add(LIGHT);

switcher.addEventListener(`change`, onChangeHandler);

function onChangeHandler(event) {
  body.classList.toggle(LIGHT)
  body.classList.toggle(DARK)
  setClassData();
}

function setClassData () {
  localStorage.setItem(`bodyClassCurrent`, body.classList)
}

setClassData();





















// that's for label click event - we obtain classData from another local key

// const label = document.querySelector(`.theme-switch__track`);
// label.addEventListener(`click`, onClickHandler);
// let bodyClassInfo = body.classList;

// if (
//   localStorage.getItem(`bodyClass`) !== localStorage.getItem(`bodyClassCurrent`) ||
//   localStorage.getItem(`bodyClass`) === localStorage.getItem(`bodyClassCurrent`)
// ) {
//     body.classList.add(localStorage.getItem(`bodyClassCurrent`));
    
// } else {
//   body.classList.add(`LIGHT`);
// }
// localStorage.setItem(`bodyClass`, bodyClassInfo);


// function onClickHandler(event) {
//     if (body.classList.contains(LIGHT)) {
//       body.classList.replace(LIGHT, DARK);
//       setClass ();
//     } else {
//       body.classList.replace(DARK, LIGHT);
//       setClass ();
//     } 
//     bodyClassInfo = body.classList
// }

// function setClass () {
//   localStorage.setItem(`bodyClassCurrent`, bodyClassInfo)
// }




















