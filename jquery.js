$("#button").click(function(event) {
  var text = $("#ingredient").val();
  $("#list").append('<li>' + text + '</li>');
  
});
