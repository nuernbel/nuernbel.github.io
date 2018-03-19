$("#button").click(function(event) {
  var text = $("#ingredient").val();
  $("#list").append('<li>' + text + '</li>');
});

$(document).keypress(function(e) {
    if(e.which == 13) {
      var text = $("#ingredient").val();
      $("#list").append('<li>' + text + '</li>');
    }
});
