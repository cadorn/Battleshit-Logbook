
const JQUERY = require("jquery/dist/jquery");
const TURN = require("turn/turn");


exports.main = function () {

	try {

		JQUERY("<STYLE></STYLE>").appendTo("HEAD").html(require("./client.css"));
		var pages = [];
		var number;
		for (var i=1 ; i <= 33 ; i++) {
			number = ("" + i);
			if (number.length === 1) {
				number = "0" + number;
			}
			pages.push('<div class="page" style="background-image:url(pages/page_' + number + '.jpg);"></div>');
		}
		JQUERY("BODY").html([
			'<div align="center">',
				'<div id="pages">',
					pages.join("\n"),
				'</div>',
			'</div>'
		].join("\n"));

		JQUERY(window).ready(function() {

			JQUERY('#pages').turn({
				display: 'double',
				acceleration: true,
				gradients: !JQUERY.isTouch,
				elevation: 50,
				width: 1100,
				height: 700,
				when: {
					turned: function(e, page) {
						/*console.log('Current view: ', $(this).turn('view'));*/
					}
				}
			});
		});
		
		JQUERY(window).bind('keydown', function(e) {		
			if (e.keyCode==37) {
				JQUERY('#pages').turn('previous');
			} else
			if (e.keyCode==39) {
				JQUERY('#pages').turn('next');	
			}
		});

	} catch (err) {
		console.error(err.stack);		
	}

}
