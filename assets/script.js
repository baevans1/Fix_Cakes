$(document).ready(function(){
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
});
