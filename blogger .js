// Smooth scroll for sidebar links
document.querySelectorAll('.sidebar a').forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
target.scrollIntoView({ behavior: 'smooth' });
});
});

// Interactive particle background
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

// Particle class
class Particle {
constructor(x, y, size, speedX, speedY) {
this.x = x;
this.y = y;
this.size = size;
this.speedX = speedX;
this.speedY = speedY;
}

update() {
this.x += this.speedX;
this.y += this.speedY;

// Bounce off edges
if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;
}

draw() {
ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
ctx.beginPath();
ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
ctx.fill();
}
}

// Initialize particles
function init() {
particlesArray = [];
for(let i = 0; i < 100; i++) {
let size = Math.random() * 3 + 1;
let x = Math.random() * canvas.width;
let y = Math.random() * canvas.height;
let speedX = (Math.random() - 0.5) * 1;
let speedY = (Math.random() - 0.5) * 1;
particlesArray.push(new Particle(x, y, size, speedX, speedY));
}
}

// Animate particles
function animate() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
particlesArray.forEach(p => {
p.update();
p.draw();
});
requestAnimationFrame(animate);
}

// Handle window resize
window.addEventListener('resize', function(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
init();
});

init();
animate();

