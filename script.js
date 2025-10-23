/* ------------------------------
   Efek Scroll Halus & Fade-In
------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll('.fade-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.3 });

  fadeSections.forEach(section => observer.observe(section));
});

/* ------------------------------
   Background Canvas Subtle Motion
------------------------------ */
const canvas = document.getElementById('bgCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const particles = [];

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(99,102,241,0.08)';
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > width) p.dx *= -1;
      if (p.y < 0 || p.y > height) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
}

/* ------------------------------
   Shortcut Menu (untuk Index)
------------------------------ */
const shortcutBtn = document.getElementById('shortcut-btn');
const shortcutMenu = document.getElementById('shortcut-menu');
let open = false;

if (shortcutBtn && shortcutMenu) {
  shortcutBtn.addEventListener('click', () => {
    open = !open;
    if (open) {
      shortcutMenu.classList.remove('hidden');
      setTimeout(() => shortcutMenu.classList.add('show'), 10);
      shortcutMenu.style.opacity = "1";
    } else {
      shortcutMenu.classList.remove('show');
      setTimeout(() => shortcutMenu.classList.add('hidden'), 200);
      shortcutMenu.style.opacity = "0";
    }
  });
}
