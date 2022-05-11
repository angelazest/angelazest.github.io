
  $('svg').on('click', function() {
    $('svg').find('.colorful').attr('fill', 'url(#grad1)');
    $(this).find('.colorful').attr('fill', '#58c8ed');
  });

var color = document.getElementById('color-one');
var offsetColor =  color.getAttribute('style');

var colorTwo = document.getElementById('color-two');
var offsetColorTwo =  colorTwo.getAttribute('style');

var colorThree = document.getElementById('color-three');
var offsetColorThree =  colorThree.getAttribute('style');

setTimeout(function(){
  var offsetColor =  color.setAttribute('style', 'stop-color:#58c8ed;');
  var offsetColorTwo =  colorTwo.setAttribute('style', 'stop-color:#58c8ed;'); 
  var offsetColorThree =  colorThree.setAttribute('style', 'stop-color:#58c8ed;'); 
  
}, 4000);