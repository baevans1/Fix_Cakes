$(document).ready(function(){
  $(".button-cakes").click(function() {
    $(".cake-types.other").hide();
    $(".cake-types.cakes").show();
    $(".button-cakes").children().removeClass("disabled").addClass("highlighted");
    $(".button-other").children().removeClass("highlighted").addClass("disabled");
  });
  $(".button-other").click(function() {
    $(".cake-types.cakes").hide();
    $(".cake-types.other").show();
    $(".button-other").children().removeClass("disabled").addClass("highlighted");
    $(".button-cakes").children().removeClass("highlighted").addClass("disabled");
  });
});
