const bulb = document.getElementById('bulbImg');
const light = document.querySelector('.light');
const toggleBtn = document.getElementById('toggleBtn');
const glossyBtn = document.getElementById('glossy-btn');

let isOn = false;

toggleBtn.addEventListener('click', () => {
  isOn = !isOn;
  bulb.classList.toggle('on', isOn);
  bulb.classList.toggle('off', !isOn);
  light.classList.toggle('on', isOn);
  light.classList.toggle('off', !isOn);

  glossyBtn.style.color = isOn ? '#ffff66' : '#ffffff'; 
});

setInterval(() => {
  const rect = document.querySelector('.bulb-container').getBoundingClientRect();
  const bulbX = rect.left + rect.width / 2;

  const toggleBtnX = toggleBtn.getBoundingClientRect().left + toggleBtn.offsetWidth / 2;
  const glossyBtnX = glossyBtn.getBoundingClientRect().left + glossyBtn.offsetWidth / 2;

  const distanceToggle = Math.abs(bulbX - toggleBtnX);
  const distanceGlossy = Math.abs(bulbX - glossyBtnX);

  if (distanceToggle < 100 && isOn) {
    toggleBtn.classList.add('glow');
  } else {
    toggleBtn.classList.remove('glow');
  }

  if (distanceGlossy < 100 && isOn) {
    glossyBtn.classList.add('visible');
    glossyBtn.classList.add('glow');
  } else {
    glossyBtn.classList.remove('visible');
    glossyBtn.classList.remove('glow');
  }
});

const footer = document.querySelector('footer2');
const homeSection = document.getElementById('home');
if (footer && homeSection) {
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      footer.style.backgroundColor = entry.isIntersecting ? 'transparent' : '#FFFFFF';
    });
  }, { threshold: 0.1 }).observe(homeSection);
}
