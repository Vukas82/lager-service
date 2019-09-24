// When the user scrolls the page, execute myFunction 
// window.onscroll = function () {
//     stickyHeader()
// };

// Get the header
// var searchBox = document.getElementById("search__box");

// Get the offset position of the navbar
// var sticky = header.offsetTop + 80;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function searchBarToogle() {
//     console.log(searchBox)

//     // if (searchBox.classList !== active__search) {
//     //     searchBox.classList.add("active__search");
//     // } else {
//     //     searchBox.classList.remove("active__search");
//     // }
// }

// changeing main image based on screen size

// var someimage = 'changableBackgroudImage';

// function init() {

//     // let backgroundImg = 'background';
//     let backgroundImg = 'background_resize';
//     let backgroundResponsive = 'originalni-auto-delovi-kribzon-responsive__2';
//     let screen = document

//     let viewport = document.getElementById('viewport');
//     viewport.style.background = 'url(./images/' + backgroundImg + '.jpg) no-repeat center center';

//     // console.log('viewport');

//     // viewport.style.background = 'url(./images/' + backgroundImg + '.jpg) no-repeat center center'
//     // viewport.style.background = 'url(./images/' + backgroundImg + '.jpg) no-repeat center center'

// function getResolution() {
//     alert("Your screen resolution is: " + window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio + 'pixel ratio' + window.devicePixelRatio);

// }
// getResolution();

// }

//-----------------------------------------


function searchBarToogle() {

    var x = document.getElementById("search__box");
    var y = document.getElementById("left__nav");
    var z = document.getElementById("active__search");
    var q = document.getElementById("logo");

    var intViewportWidth = window.innerWidth;



    if (x.style.display === "none") {
        x.style.display = "flex";
        y.style.display = "none";
        z.style.display = "none";
        // z.style.visibility = "hidden";
        q.style.display = "none";

    } else {
        x.style.display = "none";
        y.style.display = "flex";
        z.style.display = "flex";
        // z.style.visibility = "visible";
        q.style.display = "flex";

    }

    if (y.style.display === "none" && intViewportWidth > 500) {
        q.style.display = "flex";
    }

}

// function searchBarToogle() {

//     // var x = document.getElementById("search__box");
//     var y = document.getElementById("left__nav");
//     // var z = document.getElementById("active__search");
//     var q = document.getElementById("logo");
//     // alert(intViewportWidth)
//     var intViewportWidth = window.innerWidth;


//     if (y.style.display === "none" && intViewportWidth > 768) {

//         // z.style.visibility = "hidden";
//         q.style.display = "flex";

//     } else {

//         // z.style.visibility = "visible";
//         q.style.display = "none";

//         // console.log(intViewportWidth);


//     }
// }
// ============================================================

//carousel
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);


// const slideWidth = slides[0].getBoundingClientRect().width;
const slideWidth = slides[0].getBoundingClientRect().width;
// const slideWidth = 300;
console.log(slides.length)

// arrange the slides next to one another

const setSlidePosition = (slide, index) => {
    // slide.style.left = slideWidth * index + 'px'; //sa ovim popunjavas polja


    let widthCarousel = window.innerWidth;

    if (widthCarousel > 991) {
        slide.style.left = (slideWidth * index) / 3 + 'px'; //sa ovim popunjavas polja
    } else if (widthCarousel > 768) {
        slide.style.left = (slideWidth * index) / 2 + 'px'; //sa ovim popunjavas polja
    } else {
        slide.style.left = slideWidth * index + 'px';
    }

    // slide.style.left = slideWidth * index + 'px';
    // slide.style.left = (slideWidth * index) / 3 + 'px'; //sa ovim popunjavas polja
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    if (targetDot === null) {
        return
    } else {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    }

}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hiden');
        nextButton.classList.remove('is-hiden');
        // } else if (targetIndex === slides.length - 1) {
    } else if (targetIndex >= slides.length - 3) {
        // } else if (targetIndex === slides.length - (slides.length - 2)) {
        prevButton.classList.remove('is-hiden');
        nextButton.classList.add('is-hiden');
    } else {
        prevButton.classList.remove('is-hiden');
        nextButton.classList.remove('is-hiden');
    }
}

// when i click left. move to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);


    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);

    // setup za unutrasnje divove
    const prethodni = prevSlide.querySelector('.carousel-div')
    const trenutni = currentSlide.querySelector('.carousel-div');

    removeClassHidden(prethodni)
    // funkcija za dodavanje klase
    function removeClassHidden(x) {
        if (x.classList != 'is-hiden') {
            x.classList.remove('is-hiden')
        } else {
            x.classList.add('is-hiden')
        }
    }
    addClassHidden(trenutni)

    function addClassHidden(x) {
        x.classList.add('is-hiden')
    }
})


// when i click right. move to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);

    //  setup za unutrasnje divove
    const sledeci = nextSlide.querySelector('.carousel-div');
    const trenutni = currentSlide.querySelector('.carousel-div');

    removeClassHidden(sledeci)
    // funkcija za dodavanje klase
    function removeClassHidden(x) {
        if (x.classList != 'is-hiden') {
            x.classList.remove('is-hiden')
        } else {
            x.classList.add('is-hiden')
        }
    }
    addClassHidden(trenutni)

    function addClassHidden(x) {
        x.classList.add('is-hiden')
    }
})


// when i click nav indicators. move to thet side


dotsNav.addEventListener('click', e => {
    // what was clicked
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    //calling function
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);

    // setup for inner div

    // treba napraviti logiku da na osnovu index dodajer ili oduzima klasu hidden  
    //  recimo ako je veci od trenutnog njemu ukloniti klasu hidden a trenutnom je dodeliti
    //  i ako je index manji od ttenutnog isto tako njemu oduzeti a trenutnom dodati klasu hidden

    // console.log(targetIndex)
    // const thisIndex = dots.findIndex(dot => dot === currentDot);
    // console.log(thisIndex + "trenutni")

    // const nextSlide = currentSlide.nextElementSibling;
    // const prevSlide = currentSlide.previousElementSibling;

    // const sledeci = nextSlide.querySelector('.carousel-div');
    // const trenutni = currentSlide.querySelector('.carousel-div');
    // const prethodni = prevSlide.querySelector('.carousel-div')


    // removeClassHidden(sledeci)
    // funkcija za dodavanje klase
    // function removeClassHidden(x) {
    //     if (x.classList != 'is-hiden') {
    //         x.classList.remove('is-hiden')
    //     } else {
    //         x.classList.add('is-hiden')
    //     }
    // }
    // addClassHidden(thisIndex)

    //  levo
    // removeClassHidden(prethodni)
    // funkcija za dodavanje klase
    // function removeClassHidden(x) {
    //     if (x.classList != 'is-hiden') {
    //         x.classList.remove('is-hiden')
    //     } else {
    //         x.classList.add('is-hiden')
    //     }
    // }

    // function addClassHidden(x) {
    //     x.classList.add('is-hiden')
    // }
})

// acordion ---------------------------------------------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// ======
// var acc = document.getElementsByClassName("accordion");
// var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// =============================================

// navabar
function toggle(id, id2) {
    // console.log(btn.classList.value)

    if (btn.classList.value === "small-drop-btn") {
        btn.classList.add('is-active');
    } else {
        btn.classList.remove('is-active');
    }

    let n = document.getElementById(id);
    if (n.style.display != 'none') {
        n.style.display = 'none';
        document.getElementById(id2).setAttribute('aria-expanded', 'true');
    } else {
        n.style.display = '';
        document.getElementById(id2).setAttribute('aria-expanded', 'false');
    }
}

// ----------------------------------------------