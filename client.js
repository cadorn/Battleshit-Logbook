
const JQUERY = require("jquery/dist/jquery");
const TURN = require("turn/turn");


exports.main = function () {

	JQUERY("<STYLE></STYLE>").appendTo("HEAD").html(require("./client.css"));
	JQUERY("BODY").html(require("./client.html"));

	JQUERY(window).ready(function() {

console.log("DOM", JQUERY('#magazine'));

		JQUERY('#magazine').turn({
			display: 'double',
			acceleration: true,
			gradients: !$.isTouch,
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
			$('#magazine').turn('previous');
		} else
		if (e.keyCode==39) {
			$('#magazine').turn('next');	
		}
	});

}
