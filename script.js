$(document).ready(function(){

  $(".project-link").hover(function(){
    $('.project-link a').css("filter", "blur(16px)");
    $('.project-link a').css("opacity", "0.5");
    $(this).find('a').css("opacity", "")
    $(this).find('a').css("filter", "")
    //$(this).css("box-shadow", "0px 0px 10px 0px #dddddd")
  }, function(){
    $('.project-link a').css("filter", "");
    $('.project-link a').css("opacity", "");
    //$(this).css("box-shadow", "")
  });

  var prevHover = false;

  $('.project-link').hover(function(){
    $('#top-default').fadeOut(100);
  }, function(){

    setTimeout(function() {
      if(!prevHover){
    $('.project-details').fadeOut(100);
    setTimeout(function() {$('#top-default').fadeIn(200);}, 150);
  } else {

  }
}, 100);
    //setTimeout(function() {
      //if(!prevHover){
        //  $('#top-default').fadeIn(200);
    //} else {

    //  }
//}, 100);
    //if(prevHover){} else {setTimeout(function() {$('#top-default').fadeIn(200);}, 100);}

});

  $("#immu-link").hover(function(){
    prevHover = true;

    $('.nav-multiple').fadeOut(100);

    //$('.nav-multiple').fadeOut(100, function(){
    //    $('#immu-details').fadeIn(200);
    //});

    setTimeout(function() {$('#immu-details').fadeIn(200);}, 150);

  }, function(){
    prevHover = false;
    //$('.nav-multiple').fadeOut(100);
  });

  $("#awe-link").hover(function(){
    prevHover = true;
    $('.nav-multiple').fadeOut(100);
    //$('.nav-multiple').fadeOut(100, function(){
    //  $('#awe-details').fadeIn(200);
    //});
    setTimeout(function() {$('#awe-details').fadeIn(200);}, 150);
  }, function(){
    prevHover = false;
    //$('.nav-multiple').fadeOut(100);
  });

  $("#iavi-link").hover(function(){
    prevHover = true;
    setTimeout(function() {
      $('#iavi-details').fadeIn(200);
    }, 100);
  }, function(){
    prevHover = false;
    $('.project-details').fadeOut(100);
  });

  $("#catalyst-link").hover(function(){
    prevHover = true;
    setTimeout(function() {
      $('#catalyst-details').fadeIn(200);
    }, 100);
  }, function(){
    prevHover = false;
    $('.project-details').fadeOut(100);
  });

  $("#bb-link").hover(function(){
    prevHover = true;
    setTimeout(function() {
      $('#bb-details').fadeIn(200);
    }, 100);
  }, function(){
    prevHover = false;
    $('.project-details').fadeOut(100);
  });

  $("#diyh-link").hover(function(){
    prevHover = true;
    setTimeout(function() {
      $('#diyh-details').fadeIn(200);
    }, 100);
  }, function(){
    prevHover = false;
    $('.project-details').fadeOut(100);
  });

  $("#dd-link").hover(function(){
    prevHover = true;
    setTimeout(function() {
      $('#dd-details').fadeIn(200);
    }, 100);
  }, function(){
    prevHover = false;
    $('.project-details').fadeOut(100);
  });

  $("#vapor-link").hover(function(){
    prevHover = true;
    setTimeout(function() {
      $('#vapor-details').fadeIn(200);
    }, 100);
  }, function(){
    prevHover = false;
    $('.project-details').fadeOut(100);
  });

});


//http://jsfiddle.net/ye259/5/

/*
var scroller = {};
scroller.e = document.getElementById("scroll-y");

if (scroller.e.addEventListener) {
    scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
    scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
} else scroller.e.attachEvent("onmousewheel", MouseWheelHandler);
*/

function MouseWheelHandler(e) {

    // cross-browser wheel delta
    var e = window.event || e;
    var delta = - 25 * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));

    var pst = $('#scroll-y').scrollLeft() + delta;

    //var pst = $('#scroll-y').scrollLeft($('.project-link').width());


    if (pst < 0) {
        pst = 0;
    } else if (pst > $('#project-links-container ').width()) {
        pst = $('#project-links-container ').width();
    }

    $('#scroll-y').scrollLeft();

    return false;
}
