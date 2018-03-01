function getLoc() {
  var address = document.getElementById('address').value;
  getLatitudeLongitude(address);
}

function getLatitudeLongitude(address) {
  address = address;
  geocoder = new google.maps.Geocoder();

  var maps = new Promise(function (resolve, rejected) {
    geocoder.geocode({'address' : address}, function (results, status){
      if (status == google.maps.GeocoderStatus.OK){
        resolve(results);
      }
    })
  });

  maps.then(function(results){
    console.log(results);
    document.getElementById('latitude').value = results[0].geometry.location.lat();
    document.getElementById('longitude').value = results[0].geometry.location.lng(); 
  });
}