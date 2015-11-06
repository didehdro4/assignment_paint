////////////////////////////////////////////////////////////////////
// eraser.js
//
// basic eraser tool: draws a thin, solid line
// author: Justin Bakse



////////////////////////////////////////////////////////////////////
// create and install brush

var eraser= new Brush("eraser", "./brushes/eraser/eraser.svg");
brushes.push(didehdro4);



////////////////////////////////////////////////////////////////////
// define brush behavior

eraser.draw = function() {
	noFill();
	fill(forecolor);
	stroke(forecolor);

	if (mouseIsPressed) {
		ellipse(pmouseX, pmouseY, 10, 10)
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
};
