// let menu= document.querySelector('#manu-icon');
// let navbar= document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open')
// }; 

// const sr = ScrollReveal ({
//     distance: '40px',
//     duration : 2500,
//     reset: true

// });

// sr.reveal('.navbar', {delay:400, origin: 'top'})
// sr.reveal('.navbar', {delay:400, origin: 'top'})  

let header = document.querySelector('header');
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 200)
});