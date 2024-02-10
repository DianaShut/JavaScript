const happyButton = document.getElementById("btn-hapiness");
const sadButton = document.getElementById("btn-sadness");
const image = document.querySelector("img");

happyButton.addEventListener("click", function () {
    image.style.display = "inline";
    happyButton.disabled = true;
    sadButton.disabled = false;
});
sadButton.addEventListener("click", function () {
    image.style.display = "none";
    happyButton.disabled = false;
    sadButton.disabled = true;
});

