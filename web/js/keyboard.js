var SEQ = false;
var r = 0;
var c = 0;

document.addEventListener('keydown', function(event) {
	
	var character = event.keyCode;
	var y = String.fromCharCode(character);

    if (character >= 65 & character<=73) {        
        SEQ = true;
        r = character - 64;
    }
    else if (character == 76) {
        SEQ = true;
        r = character - 66;
    }
    else if (character >= 49 & character <=57 & SEQ == true){
        c = character - 48; 
    	SEQ = false;
		shoot(r, c);
    }
    else if (character == 48 & SEQ == true) {
     
        c = character - 38;
        SEQ = false;
        shoot(r, c);    
    }
    else {
    	SEQ = false;
   		r = 0;
   		c = 0;
    }
    

}, true);