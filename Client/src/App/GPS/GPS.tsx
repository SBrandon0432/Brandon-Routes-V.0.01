import React, {useState, useEffect, useRef} from "react";
import mapBoxToken  from '../../../../tokens'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './GPSS.scss'


interface IProps {


}



const useMap = () => {

  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState<number>(-70.9);
  const [lat, setLat] = useState<number>(42.35);
  const [zoom, setZoom] = useState<number>(9);


    useEffect(() => {
      if (map.current) return; // initialize map only once
      async function mapReq() {
        mapboxgl.accessToken = mapBoxToken;
        map.current = await new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
      }
      mapReq();
    },[]);

  return mapContainer
}



const GPS = () => {

  const map = useMap();

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div ref={map} className="map-container"/>
    </div>
  );

}

export default GPS


