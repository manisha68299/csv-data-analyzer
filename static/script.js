console.log("CSV Analyzer Loaded");

const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");

fileInput.addEventListener("change", () => {
  fileName.textContent = fileInput.files.length
    ? fileInput.files[0].name
    : "No file chosen";
});


/* PARTICLE BACKGROUND */
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const particles = [];
const COUNT = 120;
const FOCUS = Math.max(w, h) * 0.9;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function init() {
  particles.length = 0;
  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: rand(-w, w),
      y: rand(-h, h),
      z: rand(FOCUS * 0.5, FOCUS * 2),
      speed: rand(0.8, 4),
      size: rand(0.5, 3)
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, w, h);

  for (let p of particles) {
    p.z -= p.speed;
    if (p.z <= 1) p.z = FOCUS * 2;

    const scale = FOCUS / p.z;
    const x = p.x * scale + w / 2;
    const y = p.y * scale + h / 2;
    const r = p.size * scale;

    ctx.beginPath();
    ctx.fillStyle = "rgba(200,140,255,0.7)";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#c084fc";
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  init();
});

init();
draw();
