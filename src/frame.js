import { Application } from "springroll";

const pauseApp = new Application({
  features: {
    pause: true
  }
});

pauseApp.state.pause.subscribe(result => {
  console.log('pause: ', result);
  const pauseScreen = document.querySelector('#pauseScreen');
  console.log(pauseScreen);
  document.querySelector('#pauseScreen').style.visibility = result ? 'visible' : 'hidden';
});