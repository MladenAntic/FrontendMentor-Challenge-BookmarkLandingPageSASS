const features = document.querySelectorAll(".features__list li");
const featureImgContainer = document.querySelector(".features__illustration");
const featureImg = document.querySelector(".features__illustration img");
const featureAnimateContent = document.querySelector(
  ".features__animateContent"
);
const featureTitle = document.querySelector(".features__content h3");
const featureDescription = document.querySelector(".features__content p");

const faqList = document.querySelector(".faq__list");
const questions = document.querySelectorAll(".faq__question");
const arrows = document.querySelectorAll(".faq__arrow");
const answers = document.querySelectorAll(".faq__answer");

const email = document.getElementById("email");
const submit = document.getElementById("submit");
const error = document.querySelector('.newsletter__error')

const logo = document.querySelector('.header__logo')
const toggleMenu = document.getElementById('header__toggle')
const mobileNavigation = document.querySelector('.header__navigation')

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < features.length; i++) {
      features[i].addEventListener("click", () => {
        features[i].classList.add("features__highlight");
        featureImg.src = data[i].src;
        featureTitle.innerText = data[i].title;
        featureDescription.innerText = data[i].description;

        animate();
      });
    }
  });

features[0].addEventListener("click", () => {
  features[1].classList.remove("features__highlight");
  features[2].classList.remove("features__highlight");
});

features[1].addEventListener("click", () => {
  features[0].classList.remove("features__highlight");
  features[2].classList.remove("features__highlight");
});

features[2].addEventListener("click", () => {
  features[0].classList.remove("features__highlight");
  features[1].classList.remove("features__highlight");
});

featureImgContainer.classList.add("animation-left");
featureAnimateContent.classList.add("animation-right");

function animate() {
  featureImgContainer.className = "features__illustration";
  featureAnimateContent.className = "features__animateContent";

  requestAnimationFrame(() => {
    featureImgContainer.classList.add("animation-left");
    featureAnimateContent.classList.add("animation-right");
  });
}

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    arrows[i].classList.toggle("rotate");
    answers[i].classList.toggle("show");

    if (faqList.clientHeight > 333) {
      faqList.style.height = "333px";
      faqList.style.overflowX = "scroll";
    } else {
      faqList.style.overflowX = "hidden";
    }
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!email.checkValidity()) {
    email.style.outline = "2px solid hsl(0, 94%, 66%)";
    error.style.display = 'block'
  } else {
    email.style.outline = "none";
    error.style.display = 'none'
  }
});

toggleMenu.addEventListener('click', () => {
  mobileNavigation.classList.toggle('show')
  toggleMenu.classList.toggle('open')
  logo.classList.toggle('mobile')
})

