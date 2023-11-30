const userButton = document.querySelector('.user-button');
const professionalButton = document.querySelector('.professional-button');

userButton.addEventListener('click', () => {
    window.location.href = 'cadastro-usuario.html';
});

professionalButton.addEventListener('click', () => {
    window.location.href = 'cadastro-profissional.html';
});
