var buttons = document.querySelectorAll('p button');
var ps = document.querySelectorAll('.container p');

buttons.forEach(button => {
    button.addEventListener('click', () => {button.parentNode.classList.toggle('active')
    })
})