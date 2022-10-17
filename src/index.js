import { Container, PausePlugin } from "springroll-container";

window.addEventListener('focus', () => console.log('focus'));
window.addEventListener('blur', () => console.log('blur'));

const container = new Container('#game', {
  plugins: [
    new PausePlugin('#pause'),
  ]
});


container.openPath('frame.html');
console.log('FOCUS', document.activeElement);

console.log(container);