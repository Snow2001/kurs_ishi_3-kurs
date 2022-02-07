let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

let loginForm2 = document.querySelector('.sotib-olish-form');

document.querySelector('#sotib-olish').onclick = () =>{
  loginForm2.classList.toggle('active');
}

document.querySelector('#sotib-olish-close').onclick = () =>{
  loginForm2.classList.remove('active');
}
