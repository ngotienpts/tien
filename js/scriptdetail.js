// menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("sideNav").style.display = "block";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("sideNav").style.display = "none";
}
//ham reset style
    function resetStyle(){
      document.getElementById("img1").removeAttribute("style");
      document.getElementById("img2").removeAttribute("style");
      document.getElementById("img3").removeAttribute("style");
      document.getElementById("img4").removeAttribute("style");
    };
    // bat su kien click cua id = img1;
    document.getElementById("img1").addEventListener("click", function(){
      // lay gia tri cua thuoc tinh src cua id = img1
      var srcImg1 = document.getElementById("img1").getAttribute("src");
      // thay doi gia tri cua thuoc tinh src cua id = imgShow
      var srcImg1 = document.getElementById("imgShow").setAttribute("src", srcImg1);
      // reset duong vien cua tat ca cac anh
      resetStyle();
      // tac dong vao thuoc tinh style cua id=img1, dat gia tri diuong vien
      document.getElementById("img1").setAttribute("style", "border:1px solid red;");
    
    });
    // bat su kien click cua id = img2;
    document.getElementById("img2").addEventListener("click", function(){
      // lay gia tri cua thuoc tinh src cua id = img2
      var srcImg2 = document.getElementById("img2").getAttribute("src");
      // thay doi gia tri cua thuoc tinh src cua id = imgShow
      var srcImg2 = document.getElementById("imgShow").setAttribute("src", srcImg2);
      // reset duong vien cua tat ca cac anh
      resetStyle();
      // tac dong vao thuoc tinh style cua id=img2, dat gia tri diuong vien
      document.getElementById("img2").setAttribute("style", "border:1px solid red;");
    
    });
    // bat su kien click cua id = img3;
    document.getElementById("img3").addEventListener("click", function(){
      // lay gia tri cua thuoc tinh src cua id = img3
      var srcImg3 = document.getElementById("img3").getAttribute("src");
      // thay doi gia tri cua thuoc tinh src cua id = imgShow
      var srcImg3 = document.getElementById("imgShow").setAttribute("src", srcImg3);
      // reset duong vien cua tat ca cac anh
      resetStyle();
      // tac dong vao thuoc tinh style cua id=img3, dat gia tri diuong vien
      document.getElementById("img3").setAttribute("style", "border:1px solid red;");
    
    });
    // bat su kien click cua id = img4;
    document.getElementById("img4").addEventListener("click", function(){
      // lay gia tri cua thuoc tinh src cua id = img4
      var srcImg4 = document.getElementById("img4").getAttribute("src");
      // thay doi gia tri cua thuoc tinh src cua id = imgShow
      var srcImg4 = document.getElementById("imgShow").setAttribute("src", srcImg4);
      // reset duong vien cua tat ca cac anh
      resetStyle();
      // tac dong vao thuoc tinh style cua id=img4, dat gia tri diuong vien
      document.getElementById("img4").setAttribute("style", "border:1px solid red;");
    
    });
  
    $(document).ready(function(){
    $('#qty_input').prop('disabled', true);
    $('#plus-btn').click(function(){
      $('#qty_input').val(parseInt($('#qty_input').val()) + 1 );
          });
        $('#minus-btn').click(function(){
      $('#qty_input').val(parseInt($('#qty_input').val()) - 1 );
      if ($('#qty_input').val() == 0) {
      $('#qty_input').val(1);
    }

          });
 });



// sanphamtuongtu

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayTimeout:1000,
  autoplayHoverPause: true,
  responsive: {
     0:{
            items:2,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
  }
})
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
// dang ky
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// dang nhap
var modal = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// main_left
function openLeft() {
  document.getElementById("mySideLeft").style.width = "300px";
  document.getElementById("sideNav").style.display = "block";
}
function closeLeft() {
  document.getElementById("mySideLeft").style.width = "0";
  document.getElementById("sideNav").style.display = "none";
}