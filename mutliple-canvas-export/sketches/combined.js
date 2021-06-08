// c = combined
const cContainer = document.getElementsByClassName('combined')[0];  // container div element
let cState;

const combinedSketch = ( p ) => {
  p.setup = () => {
    p.pixelDensity(1) // adjust for quality

    p.createCanvas(cContainer.offsetWidth, cContainer.offsetHeight);
    cState = p.createGraphics(cContainer.offsetWidth, cContainer.offsetHeight);

    const exportButton = document.getElementsByClassName('pdf-button')[0];
    exportButton.addEventListener(('click'), () => {
      // copy buffer to image
      const img = p.createImage(cState.width, cState.height);
      img.copy(cState, 0, 0, cState.width, cState.height, 0, 0, cState.width, cState.height);
    
      // p = portrait, mm = milimeter, [a3 size]
      const doc = new jsPDF('p', 'mm', [420, 297]);
      // add canvas as image base64
      doc.addImage(img.canvas.toDataURL(), 'JPEG', 0, 0, 297, 420);
      // save image
      doc.save('unbroken-poster.pdf');
    })
  };

  p.draw = () => {
    cState.image(fState, 0, 0);
    cState.image(sState, 0, 0);

    p.image(cState, 0, 0);
  };
};

// initialize with container
const combined = new p5(combinedSketch, cContainer);
