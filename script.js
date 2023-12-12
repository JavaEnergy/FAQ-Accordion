// const firstQuestion = document.getElementById("firstQuestion");
// const secondQuestion = document.getElementById("secondQuestion");
// const thirdQuestion = document.getElementById("thirdQuestion");
// const forthQuestion = document.getElementById("forthQuestion");

// const firstPlusIcon = document.getElementById("firstPlusIcon");
// const secondPlusIcon = document.getElementById("secondPlusIcon");
// const thirdPlusIcon = document.getElementById("thirdPlusIcon");
// const forthPlusIcon = document.getElementById("forthPlusIcon");

// const firstMinusIcon = document.getElementById("firstMinusIcon");
// const SecondMinusIcon = document.getElementById("SecondMinusIcon");
// const thirdMinusIcon = document.getElementById("thirdMinusIcon");
// const forthMinusIcon = document.getElementById("forthMinusIcon");

// const firstAnswer = document.getElementById("firstAnswer");
// const secondAnswer = document.getElementById("secondAnswer");
// const thirdAnswer = document.getElementById("thirdAnswer");
// const forthAnswer = document.getElementById("forthAnswer");

const questions = document.querySelectorAll(".accordion-item-header");
const plusIqons = document.querySelectorAll(".plus-icon");
const minusIqons = document.querySelectorAll(".minus-icon");
const answers = document.querySelectorAll(".accordion-item-body-content");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    if (plusIqons[i].style.display == "block") {
      plusIqons[i].style.display = "none";
      minusIqons[i].style.display = "block";
      answers[i].style.display = "block";
    } else {
      plusIqons[i].style.display = "block";
      minusIqons[i].style.display = "none";
      answers[i].style.display = "none";
    }
  });
}

// firstQuestion.addEventListener("click", () => {
//   if (firstPlusIcon.style.display == "block") {
//     firstPlusIcon.style.display = "none";
//     firstMinusIcon.style.display = "block";
//     firstAnswer.style.display = "block";
//   } else {
//     firstPlusIcon.style.display = "block";
//     firstMinusIcon.style.display = "none";
//     firstAnswer.style.display = "none";
//   }
// });
// secondQuestion.addEventListener("click", () => {
//   if (secondPlusIcon.style.display == "block") {
//     secondPlusIcon.style.display = "none";
//     SecondMinusIcon.style.display = "block";
//     secondAnswer.style.display = "block";
//   } else {
//     secondPlusIcon.style.display = "block";
//     SecondMinusIcon.style.display = "none";
//     secondAnswer.style.display = "none";
//   }
// });
// thirdQuestion.addEventListener("click", () => {
//   if (thirdPlusIcon.style.display == "block") {
//     thirdPlusIcon.style.display = "none";
//     thirdMinusIcon.style.display = "block";
//     thirdAnswer.style.display = "block";
//   } else {
//     thirdPlusIcon.style.display = "block";
//     thirdMinusIcon.style.display = "none";
//     thirdAnswer.style.display = "none";
//   }
// });
// forthQuestion.addEventListener("click", () => {
//   if (forthPlusIcon.style.display == "block") {
//     forthPlusIcon.style.display = "none";
//     forthMinusIcon.style.display = "block";
//     forthAnswer.style.display = "block";
//   } else {
//     forthPlusIcon.style.display = "block";
//     forthMinusIcon.style.display = "none";
//     forthAnswer.style.display = "none";
//   }
// });
