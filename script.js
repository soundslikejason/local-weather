$(document).ready(function() {
  function weather() {
    $.ajax({
      url: "http://ip-api.com/json",
      type: 'GET',
      dataType: 'jsonp',
      success: function(data) {}


    });
  }
});
