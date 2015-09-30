var map;
var myLatLng = {lat:-36.842997, lng:174.766901};
var myPlaceLatLng = {lat:-36.901123, lng:174.709217};
window.initMap = function(){    
    
    map = new google.maps.Map(document.getElementById('map'), {
//    center: {lat: -36.841061, lng: 174.767911},
    center: myLatLng,
    scrollwheel: false,
    zoom: 15
  });
    
    var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Ferry Building'
  });
    
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Ferry Building</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Ferry Building</b></p>'+
      '<p>99 Quay Street. Located at the end of Queen Street, Queens Wharf is just across the road from Britomart Transport centre and adjacent to the Auckland Ferry terminal.</p>'+
      '</div>'+
      '</div>';
    
    var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
    
    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
    
    var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });

  // Set destination, origin and travel mode.
  var request = {
    destination: myLatLng,
    origin: myPlaceLatLng,
    travelMode: google.maps.TravelMode.DRIVING
  };

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  });
}
