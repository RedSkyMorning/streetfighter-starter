$(document).ready(function() {
	$('.ryu').mouseenter(function() {
    	$('.ryu-still').hide();
		$('.ryu-ready').show();
  })
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		console.log('line 10');
	})
.mousedown(function() {
  playHadouken();  
  $('.ryu-ready').hide();
  $('.ryu-throwing').show();
  $('.hadouken').finish().show()
  .animate(
  {'left': '300px'},  //the error is somewhere in here because I had to 
  500,                //change the margins for .hadoukin in my css
  function() {
  $(this).hide();
  $(this).css('left', '-212px');
  }
  );
})
  	.mouseup(function() {
    	$('.ryu-throwing').hide();
    	$('ryu-ready').show();
    	console.log('line 26');
  });
  	$(document).keydown(function() {
  		var keyCode = (event.keycode ? event.keyCode : event.which);
  		console.log(keyCode);
  		if (keyCode == 88) {
  			$('.ryu-ready').hide();
  			$('.ryu-cool').show();
        //.keyup(function) {       And I haven't figured this out
        //  $(.'ryu-cool').hide();  yet either
        //  $('.ryu-ready').show();
        //}
  		}
  	})
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}