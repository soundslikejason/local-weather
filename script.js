$(document).ready(function() {

  var latitude;
  var longitude;

  weather();

  function weather() {
    $.ajax({
      url: "http://ip-api.com/json",
      type: 'GET',
      dataType: 'jsonp',
      success: function(data) {
        latitude = data.lat;
        longitude = data.lon;
        $ajax({
          url:,
          data:,
          cache:,
          dataType:,
          success: function(data) {}
        });
      }


    });
  }
});
