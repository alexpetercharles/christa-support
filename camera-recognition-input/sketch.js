const container = document.getElementsByClassName('sketch')[0];  // container div element

// draw time
let seconds = 5;

// point Size
const minSize = 1;
const maxSize = 80;
let pointSize = 1;

// fist recognition pixel deltas
const deltaHand = 200; // open hand = high delta
const deltaFist = -200;
// map fist recognition to point Size
const scale = (input) => 
  (input - deltaHand) * (maxSize - minSize) / (deltaFist - deltaHand) + minSize;

let state;
let hand;
let timeLeft;

const firstSketch = ( p ) => {
  p.setup = () => {
    p.createCanvas(container.offsetWidth, container.offsetHeight);
    state = p.createGraphics(container.offsetWidth, container.offsetHeight);

    camera = p.createCapture(p.VIDEO);
    camera.size(container.offsetWidth, container.offsetHeight);
    camera.hide();

    const handpose = ml5.handpose(camera, { flipHorizontal: true }, () => { console.log('model loaded') });
    handpose.on('predict', results => { hand = results[0]; });

    const restartButton = document.getElementsByClassName('restart')[0];
    restartButton.addEventListener(('click'), () => {
      p.clear();
      state.clear();
      setCountdown();
    })
    setCountdown();
  };

  const setCountdown = () => {
    timeLeft = seconds;
    const countdown = setInterval(() => {
      if(timeLeft <= 0) { clearInterval(countdown); return; } 
      timeLeft -= 1;
    }, 1000);
  }

  const setPointSize = () => {
    if(hand) {
      // fist detection with only ringFinger
      const ringLast = hand.annotations.ringFinger[0];
      const ringFirst = hand.annotations.ringFinger[3];
      const delta = ringLast[1] - ringFirst[1];
      pointSize = scale(delta);
      // console.log(delta)
    }
  }

  const drawHand = () => {
    setPointSize()
    if(hand) {
      hand.landmarks.forEach(point => {
        state.fill(0);
        state.noStroke();
        state.ellipse(point[0], point[1], pointSize, pointSize)
      });
    }
  }

  const drawTime = () => {
    const counter = document.getElementsByClassName('counter')[0];
    counter.children[0].textContent = timeLeft;
  }
  

  p.draw = () => {
    state.noStroke();
    state.fill(255);
    p.image(state, 0, 0);

    drawTime();

    if(timeLeft > 0) drawHand();
  };
};

// initialize with container
const first = new p5(firstSketch, container);
