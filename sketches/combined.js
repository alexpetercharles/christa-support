let combinedContainer = document.getElementsByClassName('combined')[0];

const combinedSketch = ( p ) => {

  let x = 100;
  let y = 100;

  p.setup = () => {
    p.createCanvas(combinedContainer.offsetWidth, combinedContainer.offsetHeight);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};

const combined = new p5(combinedSketch, combinedContainer);