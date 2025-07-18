const bulb = document.getElementById('bulbImg');
const light = document.querySelector('.light');
const toggleBtn = document.getElementById('toggleBtn');
const glossyBtn = document.getElementById('glossy-btn');
const footer2 = document.getElementById('footer2');

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

function hideFooter() {
  if (footer2) {
    footer2.style.display = 'none';
  }
}
