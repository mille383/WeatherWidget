
$('#form-handler').on('submit', function(e) {

    e.preventDefault();
    
    var location = $('#cityName').val();
    var units = $('#units').val();
    
    // taking the key out due to uploading to github
    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=key`, function(res) {
        
        let ForC;
        if (units == 'imperial') {
            ForC = ' F';
        } else { ForC = ' C'; }
        $('#Description').text(res.weather[0].description.toUpperCase());     
        $('#current_temp').text(parseInt(res.main.temp) + ForC);
        $('#hitemp').text(parseInt(res.main.temp_max) + ForC);
        $('#lowtemp').text(parseInt(res.main.temp_min) + ForC);
        $('#humidity').text(res.main.humidity);
    })

})
