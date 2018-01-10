$(document).ready(function() {
  $("#customerInfo").submit(function(event) {

    var name = $("#name").val();
    var address = $("#address").val();

    $("#nameOutput").text(name);
    $("#addressOutput").text(address);

    $("#displayReceipt").show();
    event.preventDefault();
  });

});
