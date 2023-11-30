const loginForm = document.querySelector("#login_form")
const loginInput = document.querySelector("#login_form input")
const greeting = document.querySelector("#greeting")
const TodoList = document.querySelector("#todo")
const Btn = document.querySelector("#btn")
const Quote = document.querySelector("#quote")

const HiddenClassName = "hidden"
const USERNAME_Key = "username"
const ON = "on"

function onLoginSubmit (event) {
  event.preventDefault();
  loginForm.classList.add(HiddenClassName)

  const username = loginInput.value;
  localStorage.setItem(USERNAME_Key, username)
  paintGreeting(username)
}

function paintGreeting (username) {
  greeting.innerText = `반갑습니다:) ${username}`;
  greeting.classList.remove(HiddenClassName)
  TodoList.classList.remove(HiddenClassName)
  Quote.classList.add(ON)
}

const savedUsername = localStorage.getItem(USERNAME_Key)
if(savedUsername === null) {
  loginForm.classList.remove(HiddenClassName);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting (savedUsername)
}

let idcheck = false;

loginInput.addEventListener('keyup', activeEvent)

function activeEvent () {
  switch(!(loginInput.value)) {
    case true : Btn.disabled = true; break;
    case false : Btn.disabled = false; break;
  }
}