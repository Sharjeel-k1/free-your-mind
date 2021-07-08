(function () {
   
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2s5OTAwIiwiYSI6ImNrcXQ1NWUzbzFvYWUyeHFoNDl2bTRuZ2gifQ.8lEZdwd9z9x5zj88ffO3pA';

  let map = new mapboxgl.Map({
      container: 'map',
      center: [5.793250154245959, 51.9439888616822],
      zoom: 13,
      style: 'mapbox://styles/mapbox/streets-v11'

  });
    
    
  map.scrollZoom.disable();
  
  map.addControl(new mapboxgl.NavigationControl());

  let marker = document.createElement('div');
  marker.id='marker';
marker.innerHTML = '<img src = "media/254221_direction_location_map_pointer_icon.png">';
  let mapMarker = new mapboxgl.Marker(marker);
  mapMarker.setLngLat([5.793250154245959, 51.9439888616822]);

  mapMarker.addTo(map);


  
    
    
    
})();