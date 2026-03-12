const rateButtons = document.querySelectorAll(".rateBtn");
let selectedRate = null;

const submitBtn = document.getElementById("submitBtn");

const screenOne = document.getElementById("screenOne");
const screenTwo = document.getElementById("screenTwo");

const rateSpan = document.getElementById("rate");

console.log(rateButtons);

rateButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    rateButtons.forEach(function (button) {
      button.classList.remove("selected");
    });

    btn.classList.add("selected");

    selectedRate = btn.textContent;
    console.log("selected Rate:", selectedRate);
  });
});

submitBtn.addEventListener("click", function () {
  if (selectedRate === null) {
    alert("please selecte a rating");
    return;
  }
  rateSpan.textContent = selectedRate;
  screenOne.classList.add("hidden");
  screenTwo.classList.remove("hidden");
});
