import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  mapboxgl.accessToken = "pk.eyJ1IjoiZmN1aXNpbiIsImEiOiJjazJnZ3R0YjQwaTBwM21xZzNtMjlybXpvIn0.ver5lOt8ggHRJZ5-KFmW4g";

  useEffect(() => {
    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });
  }, []);

  return <div id="mapContainer" className="map"></div>;
};

export default Map;
