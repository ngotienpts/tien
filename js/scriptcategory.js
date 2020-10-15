// menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("sideNav").style.display = "block";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("sideNav").style.display = "none";
}
// go to top
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// main_left
function openLeft() {
  document.getElementById("mySideLeft").style.width = "300px";
  document.getElementById("sideNav").style.display = "block";
}
function closeLeft() {
  document.getElementById("mySideLeft").style.width = "0";
  document.getElementById("sideNav").style.display = "none";
}