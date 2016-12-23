$(document).ready(function() {

  var city;

  weather();

  function weather() {
    $.ajax({
      url: "http://ip-api.com/json",
      type: 'GET',
      dataType: 'jsonp',
      success: function(data) {
        city = data.city;
        $ajax({
          url: 'http://api.openweathermap.org/data/2.5/weather',
          data: {
            q = city;
            units: 'imperial',
            APPID:,
          },
          cache: false,
          dataType: 'jsonp',
          success: function(data) {}
        });
      }
    });
  }
});
