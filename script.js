const vinyl = document.getElementsByClassName("vinyl")[0];
const base = document.getElementById("pivot");
const plps = document.getElementById("plps");

let isPlaying = false;

plps.addEventListener("click", () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    vinyl.style.animation = "vinyl 1.5s linear 1s infinite normal";
    vinyl.style.animationPlayState = "running";

    base.style.transform = "rotate(35deg)";
    base.style.transition = "all 0.5s 0s linear";
  } else {
    vinyl.style.animation = "vinyl 1.5s linear 1s infinite normal";
    vinyl.style.animationPlayState = "paused";

    base.style.transform = "rotate(0deg)";
    base.style.transition = "all 0.3s 0.5s linear";
  }
});
