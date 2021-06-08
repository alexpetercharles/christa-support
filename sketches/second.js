let secondContainer = document.getElementsByClassName('second')[0];

const secondSketch = ( p ) => {

  let x = 100;
  let y = 100;

  p.setup = () => {
    p.createCanvas(secondContainer.offsetWidth, secondContainer.offsetHeight);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};

const second = new p5(secondSketch, secondContainer);