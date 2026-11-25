const gongPlayer = new Tone.Player(
  "https://tonejs.github.io/audio/berklee/eating_chips_1.mp3"
).toDestination();

const bubblePlayer = new Tone.Player(
  "https://tonejs.github.io/audio/berklee/water_bubbles3.mp3"
).toDestination();

// Unlock audio context & play gong on page click
document.addEventListener("click", async () => {
  await Tone.start();
  if (gongPlayer.loaded) {
    gongPlayer.start();
  }
});

const fishtankBox = document.querySelector(".fishtank-div");
const bubblesImage = document.getElementById("bubbles");
const blueGlow = document.querySelector(".blue-glow"); // Matches your CSS class

if (fishtankBox && bubblesImage && blueGlow) {
  fishtankBox.addEventListener("mouseenter", () => {
    bubblesImage.classList.add("visible");
    bubblesImage.classList.remove("hidden");

    blueGlow.classList.add("visible");
    blueGlow.classList.remove("hidden");

    if (
      Tone.context.state === "running" &&
      bubblePlayer.loaded &&
      bubblePlayer.state !== "started"
    ) {
      bubblePlayer.start();
    }
  });

  fishtankBox.addEventListener("mouseleave", () => {
    bubblesImage.classList.add("hidden");
    bubblesImage.classList.remove("visible");

    blueGlow.classList.add("hidden");
    blueGlow.classList.remove("visible");

    bubblePlayer.stop();
  });
}