const prinome = document.querySelector('#prinome');
const erro = document.querySelector('#erro');

const secnome = document.querySelector('#secnome');
const erro2 = document.querySelector('#erro2');

const email = document.querySelector('#email');
const erro3 = document.querySelector('#erro3');

const senha = document.querySelector('#senha');
const erro4 = document.querySelector('#erro4');

const checksenha = document.querySelector('#checksenha');
const erro5 = document.querySelector('#erro5');

const lblprinome = document.getElementById('lblprinome');
const lblsecnome = document.getElementById('lblsecnome');
const lblemail = document.getElementById('lblemail');
const lblsenha = document.getElementById('lblsenha');
const lblcheck = document.getElementById('lblcheck');

// |----------------------------------------------------------------------------------------------------------------|

prinome.addEventListener('input', () => {
  if (prinome.value.trim() === '' || prinome.value.length < 5) {
    lblprinome.style.color = 'red';
  } else {
    lblprinome.style.color = 'green';
  }
});

prinome.addEventListener('blur', () => {
  if (prinome.value.trim() === '' || prinome.value.length < 5) {
    erro.textContent = 'O campo deve ter pelo menos 5 caracteres e não pode ficar vazio.';
  } else {
    erro.textContent = '';
  }
});

// |----------------------------------------------------------------------------------------------------------------|
 
  secnome.addEventListener('input', () => {
    if (secnome.value.trim() === '' || secnome.value.length < 5) {
      lblsecnome.style.color = 'red';
    } else {
      lblsecnome.style.color = 'green';
    }
  });
  
  secnome.addEventListener('blur', () => {
    if (secnome.value.trim() === '' || secnome.value.length < 5) {
      erro2.textContent = 'O campo deve ter pelo menos 5 caracteres e não pode ficar vazio.';
    } else {
      erro2.textContent = '';
    }
  });


// |----------------------------------------------------------------------------------------------------------------|


  email.addEventListener('input', () => {
    if (email.value.trim() === '' || email.value.length < 5 || !email.value.includes('@')) {
      lblemail.style.color = 'red';
    } else {
      lblemail.style.color = 'green';
    }
  });
  
  email.addEventListener('blur', () => {
    if (email.value.trim() === '' || email.value.length < 5 || !email.value.includes('@')) {
      erro3.textContent = 'O campo deve ter pelo menos 5 caracteres e não pode ficar vazio.';
    } else {
      erro3.textContent = '';
    }
  });



  // |----------------------------------------------------------------------------------------------------------------|
  



  senha.addEventListener('input', () => {
    if (senha.value.trim() === '' || senha.value.length < 6 || senha.value.length > 8) {
      lblsenha.style.color = 'red';
    } else {
      lblsenha.style.color = 'green';
    }
  });
  
  senha.addEventListener('blur', () => {
    if (senha.value.trim() === '' || senha.value.length < 6 || senha.value.length > 8 ) {
      erro4.textContent = 'O campo deve ter pelo menos 5 caracteres e não pode ficar vazio.';
    } else {
      erro4.textContent = '';
    }
  });




  
  // |----------------------------------------------------------------------------------------------------------------|


  checksenha.addEventListener('input', () => {
    if (senha.value !== checksenha.value) {
      lblcheck.style.color = 'red';
    } else {
      lblcheck.style.color = 'green';
    }
  });
  
  checksenha.addEventListener('blur', () => {
    if (senha.value !== checksenha.value) {
      erro5.textContent = 'As senhas não coincidem.';
    } else {
      erro5.textContent = '';
    }
  });


// |----------------------------------------------------------------------------------------------------------------|


let darkMode = false;


const toggleBtn = document.querySelector('#toggleBtn');


toggleBtn.addEventListener('click', () => {
  
  darkMode = !darkMode;

 
  if (darkMode) {
    document.body.style.backgroundColor = '#1a1a1a';
    document.body.style.color = '#fff';
  } else {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#333';
  }
});
