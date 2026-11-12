const player = new Tone.Player(
  "https://tonejs.github.io/audio/berklee/gong_1.mp3"
).toDestination();

document.addEventListener("click", async () => {
  await Tone.start();
  if (player.loaded) {
    player.start();
  }
});



// const player2 = new Tone.Player(
//   "https://tonejs.github.io/audio/berklee/alien_1.mp3"
// ).toDestination();


// const hoverSound = document.querySelector(".maintitle");

// if (hoverSound) {
//   hoverSound.addEventListener("mouseover", () => {
//     if (Tone.context.state === "running" && player2.loaded) {
//       player2.start();
//     }
//   });
// }

//glitch_1, glass break, guitar_hit_!

