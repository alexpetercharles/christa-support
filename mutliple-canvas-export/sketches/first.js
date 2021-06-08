// f = first
const fContainer = document.getElementsByClassName('first')[0];  // container div element
let fState;

const firstSketch = ( p ) => {
  p.setup = () => {
    p.createCanvas(fContainer.offsetWidth, fContainer.offsetHeight);
    fState = p.createGraphics(sContainer.offsetWidth, sContainer.offsetHeight);
  };

  p.draw = () => {
    fState.noStroke();
    fState.fill(0);
    fState.rect(50, 400, 100, 100);

    p.image(fState, 0, 0);
  };
};

// initialize with container
const first = new p5(firstSketch, fContainer);
