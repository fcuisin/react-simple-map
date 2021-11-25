import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoiZmN1aXNpbiIsImEiOiJjazJnZ3R0YjQwaTBwM21xZzNtMjlybXpvIn0.ver5lOt8ggHRJZ5-KFmW4g";

const Map = (props) => {

  const [currentMarker, setCurrentMarker] = useState(null)

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [props.selectedFlat.lng,props.selectedFlat.lat],
      zoom: 11,
    });
    map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    props.flats.map((flat) => {
      map.current.on(new mapboxgl.Marker().setLngLat([flat.lng,flat.lat]).addTo(map.current));
    })
  });

  useEffect(() => {
    if (currentMarker != null) {
      currentMarker.remove();
    }
    map.current.setCenter([props.selectedFlat.lng,props.selectedFlat.lat]);
    const marker = new mapboxgl.Marker({color:'red'}).setLngLat([props.selectedFlat.lng,props.selectedFlat.lat]);
    map.current.on(marker.addTo(map.current));
    setCurrentMarker(marker);
    console.log(currentMarker)
  },[props.selectedFlat.id])

  return (
    <div ref={mapContainer} className="map"></div>
  );
};

export default Map;
