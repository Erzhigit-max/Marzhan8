const button = document.getElementById('pressButton');
const congratsDiv = document.getElementById('congratulations');
let clickCount = 0;
const maxClicks = 15;

// Батырманы экранның ортасына орналастыру
function centerButton() {
  const x = (window.innerWidth - button.clientWidth) / 2;
  const y = (window.innerHeight - button.clientHeight) / 2;
  button.style.left = x + 'px';
  button.style.top = y + 'px';
}

// Бет толық жүктелген соң батырманы орталау
window.addEventListener('load', centerButton);

// Батырма басылғанда
button.addEventListener('click', () => {
  clickCount++;
  if (clickCount >= maxClicks) {
    // 15 рет басылған соң батырманы жасырып, құттықтау хабарламасын көрсету
    button.style.display = 'none';
    congratsDiv.style.display = 'block';
  } else {
    // Батырманы кездейсоқ жаңа орынға жылжыту
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
  }
});