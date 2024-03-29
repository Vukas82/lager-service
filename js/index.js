//carousel
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


// arrange the slides next to one another

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hiden');
        nextButton.classList.remove('is-hiden');
    } else if (targetIndex === slides.length - 1) {
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

    const prethodniInnerLinkLeft = prevSlide.querySelector('.inner__link__left')
    const trenutniInnerLinkLeft = currentSlide.querySelector('.inner__link__left');

    const prethodniInnerLinkRight = prevSlide.querySelector('.inner__link__right')
    const trenutniInnerLinkRight = currentSlide.querySelector('.inner__link__right');

    // funkcija za dodavanje klase
    function removeClassHidden(x) {

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

    }

    removeClassHidden(trenutni)
    removeClassHidden(trenutniInnerLinkLeft)
    removeClassHidden(trenutniInnerLinkRight)
    removeClassHidden(prethodni)
    removeClassHidden(prethodniInnerLinkLeft)
    removeClassHidden(prethodniInnerLinkRight)
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

    const sledeciInnerLink = nextSlide.querySelector('.inner__link__left');
    const trenutniInnerLink = currentSlide.querySelector('.inner__link__left');

    const sledeciInnerRight = nextSlide.querySelector('.inner__link__right');
    const trenutniInnerRight = currentSlide.querySelector('.inner__link__right');

    // funkcija za dodavanje klase
    function removeClassHidden(x) {

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

    }

    removeClassHidden(trenutni)
    removeClassHidden(trenutniInnerRight)
    removeClassHidden(trenutniInnerLink)
    removeClassHidden(sledeci)
    removeClassHidden(sledeciInnerLink)
    removeClassHidden(sledeciInnerRight)

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
    // setup za unutrasnje divove




    // const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const nextSlide = currentSlide.nextElementSibling;

    // console.log(prevSlide)
    // console.log(nextSlide)

    // const prethodni = prevSlide.querySelector('.carousel-div') bug
    const trenutni = currentSlide.querySelector('.carousel-div');
    const sledeci = nextSlide.querySelector('.carousel-div');
    console.log(targetIndex)

    const prethodniInnerLinkLeft = prevSlide.querySelector('.inner__link__left')
    const trenutniInnerLinkLeft = currentSlide.querySelector('.inner__link__left');

    const prethodniInnerLinkRight = prevSlide.querySelector('.inner__link__right')
    const trenutniInnerLinkRight = currentSlide.querySelector('.inner__link__right');

    // const sledeci = nextSlide.querySelector('.carousel-div'); bug
    // const trenutni = currentSlide.querySelector('.carousel-div');

    const sledeciInnerLink = nextSlide.querySelector('.inner__link__left');
    const trenutniInnerLink = currentSlide.querySelector('.inner__link__left');

    const sledeciInnerRight = nextSlide.querySelector('.inner__link__right');
    const trenutniInnerRight = currentSlide.querySelector('.inner__link__right');

    const hideShowDivsNext = (x) => {
        if (x.style.display === "none") {
            x.style.display = "block";
            // y.style.display = "none";
            // z.style.display = "none";
            console.log('iz if')
        } else {
            x.style.display = "block";
            // y.style.display = "block";
            // y.style.display = "block";
            console.log('iz else')

        }
    }
    // const hideShowDivsPrev = (x, y) => {
    //     if (x.style.display === "none") {
    //         x.style.display = "block";
    //         y.style.display = "none";
    //     } else {
    //         x.style.display = "none";
    //         y.style.display = "block";
    //     }
    // }


    // hideShowDivs(slides, sledeci, targetIndex)
    // hideShowDivs(trenutniInnerLinkLeft)
    hideShowDivsNext(trenutniInnerLinkLeft)
    hideShowDivsNext(trenutniInnerLinkRight)
    hideShowDivsNext(trenutni)

    hideShowDivsNext(sledeciInnerLink)
    hideShowDivsNext(sledeciInnerRight)
    hideShowDivsNext(sledeci)
    // hideShowDivsPrev(sledeciInnerRight, prethodniInnerLinkLeft)
    // hideShowDivs(trenutniInnerLink, prethodniInnerLinkLeft)




})



// end of carousel

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

// ----------------------------------------------------------
// toggle map location

// function toggle2(id, id2, x) {

//     let n = document.getElementById(id);
//     let ico = document.getElementById(x);
//     // let ico = document.getElementById(x)
//     if (n.style.display != 'none') {
//         n.style.display = 'none';
//         document.getElementById(id2).setAttribute('aria-expanded', 'true');
//         ico.classList.remove('uspravno');
//         ico.classList.add('vodoravno');
//     } else {
//         n.style.display = '';
//         document.getElementById(id2).setAttribute('aria-expanded', 'false');
//         ico.classList.remove('vodoravno');
//         ico.classList.add('uspravno');
//     }

// }

// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    stickyHeader()
};


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
    // Get the header
    var header = document.getElementById("myHeader");
    var slider = document.querySelector(".slider");

    // Get the offset position of the navbar
    var sticky = header.offsetTop + 500;

    // console.log('scroll')
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        slider.style.marginTop = '60px';
    } else {
        header.classList.remove("sticky");
        slider.style.marginTop = '0px';

    }
}

//-----------------------------------------
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



// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeaderRefense() {
    // Get the header
    var header = document.getElementById("myHeader");
    var slider = document.querySelector(".viewport");

    // Get the offset position of the navbar
    var sticky = header.offsetTop + 330;

    // console.log('scroll')
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        slider.style.marginTop = '60px';
    } else {
        header.classList.remove("sticky");
        slider.style.marginTop = '0px';

    }
}