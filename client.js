
const JQUERY = require("jquery/dist/jquery");

console.log("JQUERY", JQUERY);

const TURN = require("turn/turn");


exports.main = function () {

	try {

	console.log("1");

		JQUERY("<STYLE></STYLE>").appendTo("HEAD").html(require("./client.css"));

	console.log("2");

		JQUERY("BODY").html(require("./client.html"));

	console.log("3");

		JQUERY(window).ready(function() {

	console.log("4");

	console.log("DOM", JQUERY('#magazine'));

			JQUERY('#magazine').turn({
				display: 'double',
				acceleration: true,
				gradients: !JQUERY.isTouch,
				elevation:50,
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
