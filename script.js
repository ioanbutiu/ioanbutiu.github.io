
setInterval(makeRainbowBackground,3000);

function makeRainbowBackground(){

var r = getRandomInt(200, 255);
var g = getRandomInt(200, 255);
var b = getRandomInt(200, 255);

var r2 = getRandomInt(200, 255);
var g2 = getRandomInt(200, 255);
var b2 = getRandomInt(200, 255);

document.body.style.backgroundImage = "linear-gradient(rgb("+r+","+g+","+b+"), rgb("+r2+","+g2+","+b2+")";

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



    /*$("body").children().each( function (i) {

      if ($(this).prop("id") === "light-switch") {

      } else {
        console.log( $(this).prop("tagName"));
        $(this).hide();
      }
    });*/
    /*for (i = 0; i <= $("*").length; i++ ) {
      if ($("*")[i] === $("#light-switch")) {
      } else {
        $("this").hide();
      }
    }
  }*/

  var hidden = false;

$(document).ready(function(){

  $("#light-switch").html("<img src='images/zap-off.svg'>");

  $("#light-switch").on("click", function () {
    if (hidden == false) {
      hideSite();
    } else {
      showSite ();
    }
  });
});

function hideSite () {
    console.log( "the page is hidden" );
    hidden = true;

    var elements = $("body").children();

    elements.each( function (i) {

      if ($(this).prop("id") === "light-switch") {

      } else {
        $(this).hide();
      }

    });

    $("#light-switch").html("<img src='images/zap.svg'>");

  }


function showSite () {
    console.log( "the page is shown" );
    hidden = false;

    var elements = $("body").children();

    elements.each( function (i) {

      if ($(this).prop("id") === "light-switch") {

      } else {
        $(this).show();
      }

    });

    $("#light-switch").html("<img src='images/zap-off.svg'>");

  }

/*$(document).ready(function(){
  console.log($("title-container"));

  console.log($("li"));
  console.log("There are " + $("li").length + " li tags");
});*/



/*$(document).ready(function(){
  console.log($("title-container"));

  console.log($("li"));
  console.log("There are " + $("li").length + " li tags");
});*/



/*var elem = document.getElementsByTagName('div');
console.log(elem);

window.onload = function(){

  for(i = 0; i < elem.length; i++) {
    elem[i].classList.add('hidden-div')
    console.log(i + ' div hidden');
  }

  for(let i = 0; i < elem.length; i++) {
    setTimeout(function() {elem[i].classList.remove('hidden-div')}, i * 500);
    console.log(i + ' div revealed');
  }

};


function revealDiv(i) {
  elem[i].classList.remove('hidden-div')
}*/

/*setInterval(makeRainbowBackground,2000);


function makeRainbowBackground(){
var r = getRandomInt(200, 255);
var g = getRandomInt(200, 255);
var b = getRandomInt(200, 255);

document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";

}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}*/
