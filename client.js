
const JQUERY = require("jquery/dist/jquery");
const TURN = require("turn/turn");


exports.main = function () {

	try {

		JQUERY("<STYLE></STYLE>").appendTo("HEAD").html(require("./client.css"));
		JQUERY("BODY").html(require("./client.html"));

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
