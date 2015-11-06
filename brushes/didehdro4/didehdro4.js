////////////////////////////////////////////////////////////////////
// didehdro4.js
//
// basic didehdro4 tool: draws a thin, solid line
// author: Justin Bakse



////////////////////////////////////////////////////////////////////
// create and install brush

var didehdro4 = new Brush("didehdro4", "./brushes/didehdro4/didehdro4.svg");
brushes.push(didehdro4);

var lastX;
var lastY;

var speed;

////////////////////////////////////////////////////////////////////
// define brush behavior

didehdro4.draw = function() {
	noFill();
	fill(forecolor);
	stroke(forecolor);

	// if (mouseIsPressed) {
	// 	ellipse(pmouseX, pmouseY, 10, 10)
	// 	line(pmouseX, pmouseY, mouseX, mouseY);
	// }
	if (mouseIsPressed) {
		fill(forecolor, 100);
		var scatterDistance = 10;
		var dotSize = 2;

		// Pythegorean theorem
		speed = (abs(mouseX - lastX) * abs(mouseX - lastX)) + (abs(mouseY - lastY) * abs(mouseY - lastY))
		speed = sqrt(speed)

		scatterDistance = map(speed, 5, 50, 0, 20);

		var i =0
		var j = 0
		while (i < 4) {
			while (j < 4) {
				ellipse(pmouseX - scatterDistance * i, pmouseY - scatterDistance * j, dotSize, dotSize)
				ellipse(pmouseX + scatterDistance * i, pmouseY + scatterDistance * j, dotSize, dotSize)
				ellipse(pmouseX - scatterDistance * i, pmouseY + scatterDistance * j, dotSize, dotSize)
				ellipse(pmouseX + scatterDistance * i, pmouseY - scatterDistance * j, dotSize, dotSize)
				j ++
			}
			j = 0
			i ++
		}
		i = 0

		lastX = mouseX;
		lastY = mouseY;
	}
};
