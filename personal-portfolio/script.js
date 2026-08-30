document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .hero').forEach((section) => observer.observe(section));

const photoInput = document.querySelector('#photo-input');
const profileImage = document.querySelector('#profile-image');

photoInput?.addEventListener('change', () => {
  const [file] = photoInput.files;
  if (file) profileImage.src = URL.createObjectURL(file);
});

const countdown = document.querySelector('#countdown');
const semesterEnd = new Date('2027-06-10T00:00:00+05:30').getTime();

function updateCountdown() {
  const remaining = Math.max(0, semesterEnd - Date.now());
  const values = [
    Math.floor(remaining / 86400000),
    Math.floor((remaining / 3600000) % 24),
    Math.floor((remaining / 60000) % 60),
    Math.floor((remaining / 1000) % 60),
  ];
  countdown?.querySelectorAll('b').forEach((item, index) => { item.textContent = String(values[index]).padStart(2, '0'); });
}

updateCountdown();
setInterval(updateCountdown, 1000);

const robotToggle = document.querySelector('.robot-toggle');
const robotPanel = document.querySelector('#robot-panel');

robotToggle?.addEventListener('click', () => {
  const isOpen = robotToggle.getAttribute('aria-expanded') === 'true';
  robotToggle.setAttribute('aria-expanded', String(!isOpen));
  robotPanel.hidden = isOpen;
});
