var map;
var myLatLng = {lat:-36.842997, lng:174.766901};
//var myPlaceLatLng = {lat:-36.901123, lng:174.709217};
window.onload = function(){    
    
    map = new google.maps.Map(document.getElementById('map'), {
    //    center: {lat: -36.841061, lng: 174.767911},
        center: myLatLng,
        scrollwheel: false,
        zoom: 15
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
    
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Ferry Building'
    });
    
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    
    

    
    
    if(geo_position_js.init()){
       geo_position_js.getCurrentPosition(
        function(position);
           console.log(position);
        
        var myPlaceLatLng = {lat: position.coords.latitude, lng:position.coords.longitude};
        var directionsDisplay = new google.maps.DirectionsRender({map: map});
        
        var request = {
            destination: myPlaceLatLng,
            origin: myPlaceLatLng,
            travelMode: google.maps.TravelMode.DRIVING
        };
        
        var directionsService = new google.maps.DirectionsService();
        
    }
    var newContentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">You&apos;re Here</h1>'+
      '</div>';
    
   
    
    var newInfowindow = new google.maps.InfoWindow({
    content: newContentString
  });
    
    var newMarker = new google.maps.Marker({
        map: map,
        position: myPlaceLatLng,
        title: 'You&apos;re Here'
    });
    
    newMarker.addListener('click', function() {
    newInfowindow.open(map, newMarker);
  });
