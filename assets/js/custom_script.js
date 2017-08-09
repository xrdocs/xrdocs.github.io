$(window).keyup(function (e) {
  var key = e.which;
  if(key == 13 || key == 39) { // the enter key code or right arrow
    $('#myCarousel').carousel('prev');
    return false;  
  } else if(key == 37) { // left arrow
    $('#myCarousel').carousel('next');
    return false;  
  } else if(key == 38) { // up arrow
    $('#myCarousel').carousel('pause');
    return false;
 }
});
