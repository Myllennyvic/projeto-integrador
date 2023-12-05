const userButton = document.querySelector('.user-button');
const professionalButton = document.querySelector('.professional-button');

userButton.addEventListener('click', () => {
    window.location.href = 'cadastro-usuario.html';
});

professionalButton.addEventListener('click', () => {
    window.location.href = 'cadastro-profissional.html';
});

var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

