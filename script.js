$(document).ready(function() {

  var city;
  var temp;
  var icon;

  weather();

  function weather() {
    $.ajax({
      url: 'http://ip-api.com/json',
      type: 'GET',
      dataType: 'jsonp',
      success: function(data) {
        city = data.city;
        $.ajax({
          url: 'http://api.openweathermap.org/data/2.5/weather',
          data: {
            q: city,
            units: 'imperial',
            APPID: '963d72389b606357f6ebf1e3e06bf292'
          },
          cache: false,
          dataType: 'jsonp',
          success: function(data) {
            temp = {
              fah: data.main.temp,
              cel: (data.main.temp - 32) * 5/9
            };
            temp.fah = Math.floor(temp.fah);
            temp.fah = temp.fah + '\xB0';
            temp.cel = Math.floor(temp.cel);
            temp.cel = temp.cel + '\xB0';
            icon = data.weather;
            city = data.name;

            $('#icon').html('<img src=http://openweathermap.org/img/w/' + icon[0]["icon"] + ".png>");
            $('#temp').text(temp.fah);
            $('#city').text(city);
          }
        });
      }
    });
  }
  $('#toggleTemp').on('click', function(){
    var current = $(this).data('toggleTemp');
    if (current === undefined) {
      current = 'cel';
    }
    $('#temp').text(temp[current]);

    if (current === 'cel') {
      $(this).data('toggleTemp', 'fah');
      $('#toggleTemp').text("C");
    } else {
      $(this).data('toggleTemp', 'cel');
      $('#toggleTemp').text("F");
    }
  });
});
