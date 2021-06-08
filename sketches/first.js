let firstContainer = document.getElementsByClassName('first')[0];

const firstSketch = ( p ) => {

  let x = 100;
  let y = 100;

  p.setup = () => {
    p.createCanvas(firstContainer.offsetWidth, firstContainer.offsetHeight);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};

const first = new p5(firstSketch, firstContainer);