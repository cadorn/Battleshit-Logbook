
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
				width: 1300,
				height: 800,
				when: {
					turned: function(e, page) {
						/*console.log('Current view: ', $(this).turn('view'));*/
					}
				}
			});
		});
		
		JQUERY(window).bind('keydown', function(e) {		
			if (e.keyCode==37) {
				JQUERY('#magazine').turn('previous');
			} else
			if (e.keyCode==39) {
				JQUERY('#magazine').turn('next');	
			}
		});

	} catch (err) {
		console.error(err.stack);		
	}

}
