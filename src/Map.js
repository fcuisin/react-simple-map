import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoiZmN1aXNpbiIsImEiOiJjazJnZ3R0YjQwaTBwM21xZzNtMjlybXpvIn0.ver5lOt8ggHRJZ5-KFmW4g";

const Map = (props) => {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [props.long,props.lat],
      zoom: 12,
    });
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    map.on(new mapboxgl.Marker().setLngLat([props.long,props.lat]).addTo(map));
  });

  return <div id="mapContainer" className="map"></div>;
};

export default Map;
