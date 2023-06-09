const refs = {
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]'),
  };
  
  refs.startButton.addEventListener('click', onStartButtonClick);
  refs.stopButton.addEventListener('click', onStopButtonClick);
  
  let timerId = null;
  
  function onStartButtonClick() {
    refs.startButton.disabled = true;
    timerId = setInterval(setBackgroundColor, 1000);
  }
  
  function onStopButtonClick() {
    refs.startButton.disabled = false;
    clearInterval(timerId);
   }
  
  function setBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

