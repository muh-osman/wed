var audio = document.getElementById("myAudio");
var playPauseButton = document.getElementById("playPauseButton");
var playPauseIcon = document.getElementById("playPauseIcon");

playPauseButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");

    // audio.volume = 0.0;
    // const interval = setInterval(() => {
    //   if (audio.volume < 0.9) {
    //     audio.volume += 0.1;
    //   } else {
    //     clearInterval(interval);
    //   }
    // }, 250);
    
  } else {
    audio.pause();
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
  }
});
