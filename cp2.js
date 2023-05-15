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



prinome.addEventListener('focus', () => {
    erro.textContent = '';
    prinome.removeAttribute('style');
  });
  
  prinome.addEventListener('blur', () => {
    if (prinome.value.trim() === '' || prinome.value.length < 5) {
      erro.textContent = 'O campo deve ter pelo menos 5 caracteres e não pode ficar vazio.';
    }
  });



  secnome.addEventListener('focus', () => {
    erro2.textContent = '';
  });
  
  secnome.addEventListener('blur', () => {
    if (secnome.value.trim() === '' || secnome.value.length < 5) {
      erro2.textContent = 'O campo deve ter pelo menos 5 caracteres e não pode ficar vazio.';
    }
  });



  email.addEventListener('focus', () => {
    erro3.textContent = '';
  })
  email.addEventListener('blur', () => {
    if (email.value.trim() === '' || email.value.lenght < 5 || !email.value.includes('@')){
        erro3.textContent = 'O campo deve ter pelo menos 5 caracteres, não pode ficar vazio e tem que contar o caractere"@" para ser validado como um email'
    }
  })

  
  senha.addEventListener('focus', () => {
    erro4.textContent = '';
  });
  senha.addEventListener('blur', () => {
    if (senha.value.trim() === '') {
      erro4.textContent = 'A senha não pode ficar vazia.';
    } else if (senha.value.length < 6 || senha.value.length > 8) {
      erro4.textContent = 'A senha deve ter entre 6 e 8 caracteres.';
    }
  });

  
  
  checksenha.addEventListener('focus', () => {
    erro5.textContent = '';
  });
  checksenha.addEventListener('blur', () => {
    if (senha.value !== checksenha.value) {
        erro5.textContent = 'As senhas precisam ser iguais para ser cadastradas'
    }
  });






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
