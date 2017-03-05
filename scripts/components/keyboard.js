app.enableKeyboardEvents = function() {
	function onKeyDown( event ) {
		switch ( event.keyCode ) {
			case 38:
			case 87:
				app.move.forward = true;
				break;
			case 37:
			case 65:
				app.move.left = true;
				break;
			case 40:
			case 83:
				app.move.backward = true;
				break;
			case 39:
			case 68:
				app.move.right = true;
				break;
			case 32:
				if (app.move.jump === true) app.move.velocity.y += 350;
				app.move.jump = false;
				break;
		}
	}

	function onKeyUp( event ) {
		switch ( event.keyCode ) {
			case 38:
			case 87:
				app.move.forward = false;
				break;
			case 37:
			case 65:
				app.move.left = false;
				break;
			case 40:
			case 83:
				app.move.backward = false;
				break;
			case 39:
			case 68:
				app.move.right = false;
				break;
		}
	}

	document.addEventListener('keydown', onKeyDown, false);
	document.addEventListener('keyup'  , onKeyUp  , false);
};
