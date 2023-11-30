let valueDisplays = document.querySelectorAll(".num");
let interval = 2500;
let started = false;
let switherLi = document.querySelectorAll('.switcher li')
let boxes = Array.from(document.querySelectorAll('.prflex .prcard'))
// ! Counting numbers
window.onscroll = function () {
  if (window.scrollY >= 413.618408203125) {
    if (!started) {
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-goal"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
        started = true;
      });
    } else {
      null
    }
  }
}
// ! Filter Projects
switherLi.forEach((li) => {
  li.addEventListener('click', Removeactive)
  li.addEventListener('click', manageBoxs)
})
function Removeactive() {
  switherLi.forEach((li) => {
    li.classList.remove('active');
    this.classList.add('active')
  })
}
function manageBoxs() {
  boxes.forEach((box) => {
    box.style.display = 'none';
  })
  document.querySelectorAll(this.dataset.val).forEach((box) => {
    box.style.display = 'flex';
  })
}