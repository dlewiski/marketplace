$(document).ready(function(){
  $("form#name").submit(function(event){
    var name = $("#name").val();
    $("#nameOutput").text(name);
    event.preventDefault(event);
  });

});
