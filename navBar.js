
const toggleNav=document.querySelector('.nav-toggler'),
nav=document.querySelector('.nav');
function navToggle(){
    nav.classList.toggle('show')
}
toggleNav.addEventListener('click', navToggle);
