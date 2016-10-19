// To bind button combos, use '+' to request as many keys as you want.
// This way, all the keys have to be pressed at once.
Mousetrap.bind('ctrl+n', function(){ console.log('new'); showBalloon('Ctrl + N'); return false; });
// Returning false works just like e.preventDefault() and stops the usual functionality of the hotkeys.
//Mousetrap.bind('ctrl+z', function(){ console.log('undo'); showBalloon('Ctrl + Z'); return false; });
//Mousetrap.bind('ctrl+shift+z', function(){ console.log('redo'); showBalloon('Ctrl + Shift + Z'); return false; });

// The code below is for our demo.
// Displays a balloon with info on every successful button press. 
var balloon = $('.keyboard-answer'),
    stopTimeout;

$(document).click(function(){
  if(balloon.is(':visible')) {
    balloon.removeClass('active');
  }
});

function showBalloon(data) {
  balloon.addClass('active').find('h3 span').text(data);

  clearTimeout(stopTimeout);
  stopTimeout = setTimeout(function () {
    balloon.removeClass('active');
  }, 1500);
}
