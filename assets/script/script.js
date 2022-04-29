const pageFour = document.querySelector(".page-four");
const pageFive = document.querySelector(".page-five");
const pageSix = document.querySelector(".page-six");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-150px",
};

const pageFourObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      pageFour.classList.add("page-four__animator");
      console.log("page-four");
    }
  });
}, options);

const pageFiveObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      pageFive.classList.add("page-five__animator");
      console.log("page-five");
    }
  });
}, options);

const pageSixObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      pageSix.classList.add("page-six__animator");
      console.log("page-six");
    }
  });
}, options);

pageFourObserver.observe(pageFour);
pageFiveObserver.observe(pageFive);
pageSixObserver.observe(pageSix);
