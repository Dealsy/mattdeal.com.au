

$(document).ready(function(){
   var title_element = $("#site_title");

   setTimeout( function() {
		// modify this one line below, and see the result !
		var logoTitle = 'LEARNINGBLOCKCHAINS.COM ';
		var logoRandom = '';

		var possible = "0xA4f74HJK584b35E7F2EDFGHJc24388FFd6c907AE2B3";

		function generateRandomTitle(i, logoRandom) {
			setTimeout( function() {
				title_element.html("<span>" + logoRandom + "</span>");
				$("#site_title").textfill({
                    maxFontPixels: 72
                });
                console.debug("resizing2");
			}, i*170 );
		}

		for( var i=0; i < logoTitle.length+1; i++ ) {
			logoRandom = logoTitle.substr(0, i);
			for( var j=i; j < logoTitle.length; j++ ) {
				logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			generateRandomTitle(i, logoRandom);
			logoRandom = '';
		}


	}, 500 );

});