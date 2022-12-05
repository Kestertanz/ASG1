// the following after this for JS fade whilst scrolling animation
// the function reveal is used to cause things to appear from bottom-up
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top; //basically, if i the distance from the top is less than what is stated then the div or whatever that has reveal with move depending on the css style given to them
        var elementVisible = 40;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active"); // thus when i scroll up the reverse happens, instead of appearing, they disappear
        }
        elementVisible += 30;
    }
}
// function reveal_1 is used to cause things to appear from left to right
function reveal_1() {
    var reveal1 = document.querySelectorAll(`.reveal_1`);
    for (var i = 0; i < reveal1.length; i++) {
        var windowWidth = window.innerHeight;
        var elementTop = reveal1[i].getBoundingClientRect().top;
        var elementVisible = 200;
        if (elementTop < windowWidth - elementVisible) {
            reveal1[i].classList.add("active");
        } else {
            reveal1[i].classList.remove("active");
        }
    }
}
// function reveal_2 is used to cause things to appear from right to left
function reveal_2() {
    var reveal2 = document.querySelectorAll(`.reveal_2`);
    for (var i = 0; i < reveal2.length; i++) {
        var windowWidth = window.innerHeight;
        var elementTop = reveal2[i].getBoundingClientRect().top;
        var elementVisible = 200;
        if (elementTop < windowWidth - elementVisible) {
            reveal2[i].classList.add("active");
        } else {
            reveal2[i].classList.remove("active");
        }
    }
}


// function reavel_neg1 is used to cause the things to move things  

/*reveal is bottom-up
reveal1 is left-right
reveal2 is right-left */
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal_1);
window.addEventListener("scroll", reveal_2);
// To check the scroll position on page load
reveal();
reveal_1();
reveal_2();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const btnBars = document.getElementById(`toggle-off`)
const btnTimes = document.getElementById('toggle-on');
const SideNav = document.querySelector('.aside');


btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

const myFunc = (navCondition) => {
    if (navCondition === 'open') {
        SideNav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";

    }
    else if (navCondition === 'close') {
        SideNav.classList.remove('show-nav');
        btnTimes.style.display = "none";
        btnBars.style.display = "block";
    }
}
//external lib, basically, scrambles my text and allows it to give a nice random effect
const text = baffle('.baffle');
text.set({
    characters: '@I!i4!($(!9393n3n1n03nsvdvsbobb013-13r1-1r3r1{}',
    speed: 100
});
text.start();
text.reveal(2000);

