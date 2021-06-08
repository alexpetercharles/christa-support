// f = first
const container = document.getElementsByClassName('first')[0];  // container div element
let state;

const camera = document.getElementsByClassName('camera')[0];
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      camera.srcObject = stream;
    });
}

let predictions = [];
const loaded = () => { console.log('loaded'); }

const firstSketch = ( p ) => {
  p.setup = () => {
    p.createCanvas(container.offsetWidth, container.offsetHeight);
    state = p.createGraphics(container.offsetWidth, container.offsetHeight);

    const handpose = ml5.handpose(camera, loaded);
    handpose.on('predict', results => {
      predictions = results;
    });
  };
  

  p.draw = () => {
    state.noStroke();
    state.fill(0);
    state.rect(50, 400, 100, 100);

    p.image(state, 0, 0);

    // if(p.frameCount % 10 === 0) { console.log(predictions) }
  };
};

// initialize with container
const first = new p5(firstSketch, container);
