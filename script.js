const vinyl = document.getElementsByClassName("vinyl")[0];
const arm = document.getElementById("arm");
const plps = document.getElementById("plps");

let isPlaying = false;
let rotation = 0; // posisi terakhir vinyl
let lastTime = 0;

plps.addEventListener("click", () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    vinyl.style.animation = "vinyl 1.5s linear 1s infinite normal";
    vinyl.style.animationPlayState = "running";
    arm.style.transform = "rotate(35deg)";
    arm.style.transition = "all 0.5s linear";
  } else {
    vinyl.style.animationPlayState = "paused";
    arm.style.transform = "rotate(0deg)";
    arm.style.transition = "all 0.3s 0.5s linear";
  }
});
