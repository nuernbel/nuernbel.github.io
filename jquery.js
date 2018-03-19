$("#button").click(function(event) {
  var text = $("#input").val();
  $("#list").append('<li>' + text + '</li>');
});
