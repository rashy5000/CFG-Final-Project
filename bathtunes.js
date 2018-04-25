$(document).on("scroll", function(){
  if($(document).scrollTop() > 100)
  {
    $(".header").addClass("shrink");
    $(".heading").addClass("shrink");
    $(".ul").addClass("shrink");
  }
  else
  {
    $(".header").removeClass("shrink");
    $(".heading").removeClass("shrink");
    $(".ul").removeClass("shrink");
  }
});
