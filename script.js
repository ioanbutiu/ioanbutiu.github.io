var dark = false;
var viewHidden = true;
var projectsHidden = true;

$(document).ready(function(){

  /*$("#filter-links-view").css("display", "none");
  $("#filter-links-projects").css("display", "none");


  $("#view-button").on("click", function () {
    if (viewHidden) {
      $("#filter-links-view").css("display", "inline-block");
      $("#view-button").css("margin-left", "2rem");
      viewHidden = false;
    } else {
      $("#filter-links-view").css("display", "none");
      $("#view-button").css("margin-left", "0.75rem");
      viewHidden = true;
    }
  });

  $("#projects-button").on("click", function () {
    if (projectsHidden) {
      $("#filter-links-projects").css("display", "inline-block");
      $("#projects-button").css("margin-left", "2rem");
      projectsHidden = false;
    } else {
      $("#filter-links-projects").css("display", "none");
      $("#projects-button").css("margin-left", "0.75rem");
      projectsHidden = true;
    }
  });*/

  $("#project-link-preview-team").hover(function() {
    $("#project-hover-image-team").css("display", "block");
  }, function() {
    $("#project-hover-image-team").css("display", "none");
  });

  $("#light-switch").on("click", function () {
    if (dark == false) {
      darkMode();
      dark = true;
    } else {
      lightMode ();
      dark = false;
    }
  });
});

function darkMode () {
  $("body").css("background-color", "black");
  $("#nav-bar").css("background-color", "black");
  $("#project-list-heading-container").css("background-color", "black");
  $("*").css("color", "white");
  $("*").css("border-color", "white");
  $(".nav-links").css("background-color", "black")

  $(".nav-links").hover(function(){
    $(this).css({"background-color":"white", "color":"black"});
  }, function(){
    $(this).css({"background-color":"black", "color":"white"});
  });
  $("#light-switch").css("background-color", "white");
  $("#light-switch").css("color", "black");

  $("#light-switch").html("LIGHT");
}

function lightMode () {
  $("body").css("background-color", "white");
  $("#nav-bar").css("background-color", "white");
  $("#project-list-heading-container").css("background-color", "white");
  $("*").css("color", "black");
  $("*").css("border-color", "black");
  $(".nav-links").css("background-color", "white")

  $(".nav-links").hover(function(){
    $(this).css({"background-color":"black", "color":"white"});
  }, function(){
    $(this).css({"background-color":"white", "color":"black"});
  });
  $("#light-switch").css("background-color", "black");
  $("#light-switch").css("color", "white");

  $("#light-switch").html("DARK");
}
