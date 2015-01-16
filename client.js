
const JQUERY = require("jquery/dist/jquery");
const TURN = require("turn/turn");


exports.main = function () {

	var flipbookNode = JQUERY('<div id="flipbook"></div>').appendTo("BODY");
	flipbookNode.html([
		'<div class="hard"> Turn.js </div>'
		'<div class="hard"></div>'
		'<div> Page 1 </div>'
		'<div> Page 2 </div>'
		'<div> Page 3 </div>'
		'<div> Page 4 </div>'
		'<div class="hard"></div>'
		'<div class="hard"></div>'
	].join("\n"));

	JQUERY("#flipbook").turn({
		width: 400,
		height: 300,
		autoCenter: true
	});

}
