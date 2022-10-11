import { Container, PausePlugin } from "springroll-container";


const container = new Container('#game', {
  plugins: [
    new PausePlugin('#pause'),
  ]
});


container.openPath('frame.html');

console.log(container);