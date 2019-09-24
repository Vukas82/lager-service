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

function toggle2(id, id2, x) {

    let n = document.getElementById(id);
    let ico = document.getElementById(x);
    // let ico = document.getElementById(x)
    if (n.style.display != 'none') {
        n.style.display = 'none';
        document.getElementById(id2).setAttribute('aria-expanded', 'true');
        ico.classList.remove('uspravno');
        ico.classList.add('vodoravno');
    } else {
        n.style.display = '';
        document.getElementById(id2).setAttribute('aria-expanded', 'false');
        ico.classList.remove('vodoravno');
        ico.classList.add('uspravno');
    }

}