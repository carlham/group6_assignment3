const pageFront = document.querySelector(".page-front");
const pageTwo = document.querySelector(".page-two");
const pageThree = document.querySelector(".page-three");

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px",
};

const pageFrontObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            pageFront.classList.add("page-front_jsanimations");
        }
    });
}, options);

const pageTwoObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            pageTwo.classList.add("page-two_jsanimations");
        }
    });
}, options);

const pageThreeObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            pageThree.classList.add("page-three_jsanimations");
        }
    });
}, options);

pageFrontObserver.observe(pageFront);
pageTwoObserver.observe(pageTwo);
pageThreeObserver.observe(pageThree);


const pageFour = document.querySelector(".page-four");
const pageFive = document.querySelector(".page-five");
const pageSix = document.querySelector(".page-six");



const pageFourObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            pageFour.classList.add("page-four__animator");
        }
    });
}, options);

const pageFiveObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            pageFive.classList.add("page-five__animator");
        }
    });
}, options);

const pageSixObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            pageSix.classList.add("page-six__animator");
        }
    });
}, options);

pageFourObserver.observe(pageFour);
pageFiveObserver.observe(pageFive);
pageSixObserver.observe(pageSix);


const pageSeven = document.querySelector(".page-seven");
const pageEight = document.querySelector(".page-eight");
const pageNine = document.querySelector(".page-nine");



const pageSevenObserver = new IntersectionObserver(function(entriesOne, observerOne) {
    entriesOne.forEach((entry) => {
        if (entry.isIntersecting) {
            pageSeven.classList.add("page-seven__animation");
        }
    });
}, options);


const pageEightObserver = new IntersectionObserver(function(entriesOne, observerOne) {
    entriesOne.forEach((entry) => {
        if (entry.isIntersecting) {
            pageEight.classList.add("page-eight__animation");
        }
    });
}, options);


const pageNineObserver = new IntersectionObserver(function(entriesOne, observerOne) {
    entriesOne.forEach((entry) => {
        if (entry.isIntersecting) {
            pageNine.classList.add("page-nine__animation");
        }
    });
}, options);

pageSevenObserver.observe(pageSeven);
pageEightObserver.observe(pageEight);
pageNineObserver.observe(pageNine);