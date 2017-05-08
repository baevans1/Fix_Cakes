$(document).ready(function(){
  $("header").html("<nav>" +
        "<p><a href='fix_menu.html'>menu</a></p>" +
        "<p><a href='fix_custom.html'>custom</a></p>" +
        "<p><a href='index.html'>" +
            "<img class='nav-img' src='assets/images/fix-logo.png'>" +
          "</a>" +
        "</p>" +
        "<p><a href='fix_about.html'>about</a></p>" +
        "<p><a href='fix_hours.html'>hours</a></p>" +
      "</nav>");
  $("footer").html("<div class='footer-address'>" +
            "<p>27 maryland plaza</p>" +
            "<p>saint louis, mo 63108</p>" +
            "<div class='footer-hours'>" +
              "<p>tues-sat 7am-7pm, sun 11am-4pm</p>" +
            "</div>" +
          "</div>" +
        "<img class='footer-image' src='assets/images/fix-logo-white.png'>" +
        "<div class='footer-contact'>" +
          "<div class='footer-social'>" +
            "<img src='assets/images/fix-fbicon.png'>" +
            "<img src='assets/images/fix-twittericon.png'>" +
            "<img src='assets/images/fix-instaicon.png'>" +
          "</div>" +
          "<p>314-930-3103</p>" +
      "</div>");
  $(window).scroll(function() {
      var topOffset = $(window).scrollTop();
      if(topOffset == 0){
        $(".nav-img").removeClass("shrink-nav");
        $("nav").removeClass("scroll-nav");
    } else {
        $(".nav-img").addClass("shrink-nav");
        $("nav").addClass("scroll-nav");
    }
  });

  $(".button-cakes").on('click', 'h1', function() {
    $(".button-cakes").children().removeClass("disabled").addClass("highlighted");
    $(".button-other").children().removeClass("highlighted").addClass("disabled");
    $(".cake-types.other").hide();
    $(".cake-types.cakes").show();
  });
  $(".button-other").click(function() {
    $(".button-other").children().removeClass("disabled").addClass("highlighted");
    $(".button-cakes").children().removeClass("highlighted").addClass("disabled");
    $(".cake-types.cakes").hide();
    $(".cake-types.other").show();
  });



  $("form").submit(function() {
    var name = document.getElementsByName("firstname")[0].value;
    $("#after-form").show();
    $("form").hide();

    alert("Thank you for your order, " + name + ". " +
    "We will get back to you shortly!");
   });
   $("form").submit(function(event){
      event.preventDefault();
    });

  var requestURL = "https://raw.githubusercontent.com/baevans1/web_group_project_2/master/inventory.json";
  $.getJSON( requestURL, function(bakeryItem) {
    var cakeItems = [];
    var otherItems = [];
    $.each(bakeryItem, function (i, val) {
      if (bakeryItem[i].type == "Cake") {
        cakeItems.push(bakeryItem[i])
      }  else {
        otherItems.push(bakeryItem[i])
      };
    });
  cakeItems = $.map(cakeItems, function( a, i ) {
   return ("<div class='cake-selection'>" +
    "<h3>" + cakeItems[i].name + "</h3>" +
    "<p>" + cakeItems[i].description + "</p>" +
    "</div>" );
   });
  $( ".test" ).html(cakeItems);
  otherItems = $.map(otherItems, function( a, i ) {
   return ("<div class='cake-selection'>" +
    "<h3>" + otherItems[i].name + "</h3>" +
    "<p>" + otherItems[i].description + "</p>" +
    "</div>" );
   });
  $( ".test2" ).html(otherItems);
  });
});
