
//change menu to X onclick
function changeIcon(a) {
    a.classList.toggle("bx-x");
}
/*it toggles between sandwich-menu icon and the X icon
when it's clicked. (a): to this which i(parameter of the icon)

returns a DOMTokenList of the class attributes of the element

changeIcon(this) in html : refers to the current element which is "i"
*/
/**************************************************** */

//make active class add and remove it every time we click on the side menu

const sideMenu = document.querySelector(".side-menu");//hold the element
//hold container element
const container = document.querySelector(".container");


sideMenu.addEventListener("click", () => {
    container.classList.toggle("active");
})//in browser elements :in console:active

/* when click on sideMenu(icon/div) 
container will be toggled with activeClass,
so the animation will be applied.
*/
/**************************************************** */
//Remove mainPage's content on click
//grab elements: overlay,btn,side-menu-icon
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.btn');

const MenuIcon = document.querySelector('.side-menu');


btn.addEventListener('click', () => {
    overlay.style.display = 'none';
})

MenuIcon.addEventListener('click', () => {
    overlay.style.display = "flex";
}) /*makes the children on the container are flex items*/
/**************************************************** */
//popup on click menu elements

let popup = document.querySelector('#popup');
const popup1 = document.querySelector('#popup1');
const contact = document.querySelector('#contactForm');
//open
function openPop() {
    popup.classList.add('openBox');
}
/*when click on .popup it makes the box visible 
(defined .openbox with visibility:visible) */
//remove
function closePop() {
    popup.classList.remove('openBox');
    popup1.classList.remove('openBox');
    contact.classList.remove('openBox');
}/*when click on cancel it removes the popup */

//about us 
function aboutFunc() {
    popup1.classList.add('openBox');
}

//open form (contact)
function contactFunc() {
    contact.classList.add('openBox');
}
/*didn't put all in one func coz it opens all of them at the same time */
/**************************************************** */
//open links :
let fb = document.querySelector('#fb');
const insta = document.querySelector('#insta');
const twit = document.querySelector('#twit');
const yt = document.querySelector('#yt');
/*opens in a new tab */
fb.addEventListener('click', () => {
    window.open('https://www.facebook.com/BlairWitchGame');
});
insta.addEventListener('click', () => {
    window.open('https://www.instagram.com/blair_witch_game/');
});
twit.addEventListener('click', () => {
    window.open('https://twitter.com/');
});
yt.addEventListener('click', () => {
    window.open('https://www.youtube.com/user/blooberteam');
});

/**************************************************** */
//Play and pause vid (Button(play) - Menu(pause))

btn.onclick = function () {
    var vid = document.getElementById("background-vid");

    vid.play();
    sideMenu.onclick = function () {
        vid.pause();
    }
}/*when click on btn the video plays, when click on menuIcon the vid pauses */

/*
var: function/global scope, 
     hoisted (can be defined before declaration)
     can be re-declared
let,const : in the block scope 
            not hoisted
            cannot be re-declared
 
const: CaNNot be reassigned, or re-declared
 */

