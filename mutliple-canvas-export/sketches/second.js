// s = second
const sContainer = document.getElementsByClassName('second')[0]; // container div element
let sState;

const secondSketch = ( p ) => {
  p.setup = () => {
    p.createCanvas(sContainer.offsetWidth, sContainer.offsetHeight);
    sState = p.createGraphics(sContainer.offsetWidth, sContainer.offsetHeight);
  };

  p.draw = () => {
    sState.noStroke();
    sState.fill(0);
    sState.rect(50, 50, 300, 300);

    p.image(sState, 0, 0);
  };
};

// initialize with container
const second = new p5(secondSketch, sContainer);
