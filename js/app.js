$(document).ready(function(){
    $(".icolor").css("color","blue");
   $('a[href^="#"]').click(function (event) {
      event.preventDefault();
  
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
  });
    $("form").submit(function(){
      alert("Submitted");
    })
  });
