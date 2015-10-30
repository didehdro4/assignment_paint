////////////////////////////////////////////////////////////////////
// didehdro4.js
//
// basic didehdro4 tool: draws a thin, solid line
// author: Justin Bakse



////////////////////////////////////////////////////////////////////
// create and install brush

var didehdro4 = new Brush("didehdro4", "./brushes/didehdro4/didehdro4.svg");
brushes.push(didehdro4);



////////////////////////////////////////////////////////////////////
// define brush behavior

didehdro4.draw = function() {
	noFill();
	fill(forecolor);
	stroke(forecolor);

	if (mouseIsPressed) {
		ellipse(pmouseX, pmouseY, 10, 10)
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
};
