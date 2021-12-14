import React, {useState, useEffect, useRef} from "react";
import mapBoxToken  from '../../../../tokens'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './GPSS.scss'



const GPS = () => {

  const mapContainer = useRef(null)  as any;
  const map = useRef(null) as any;
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);


    useEffect(() => {
      if (map.current) return; // initialize map only once
      async function test() {
        mapboxgl.accessToken = mapBoxToken;
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
      }
      test();
      console.log(map.current)
    });




  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div ref={mapContainer} className="map-container"/>
    </div>
  );

}

export default GPS


