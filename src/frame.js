import { Application } from "springroll";

window.addEventListener('focus', () => console.log('focus2'));
window.addEventListener('blur', () => console.log('blur2'));

const pauseApp = new Application({
  features: {
    pause: true
  }
});

pauseApp.state.pause.subscribe(result => {
  console.log('pause: ', result);
  const pauseScreen = document.querySelector('#pauseScreen');
  document.querySelector('#pauseScreen').style.visibility = result ? 'visible' : 'hidden';
});

console.log('FOCUS', document.activeElement);