
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
			'</div>',
			'<a href="https://github.com/cadorn/Battleshit-Logbook"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"></a>'
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
