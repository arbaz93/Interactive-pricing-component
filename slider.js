const root = document.querySelector(':root');

function updateStatus() {
  const sliderValue = document.querySelector('[type=range]').value;
  const price = document.querySelector('.price');

  root.style.setProperty('--track-status', sliderValue / 0.32 + '%');
  price.innerHTML = `$${sliderValue}.00`
  
}
updateStatus()  