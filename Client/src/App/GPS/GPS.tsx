import React, {useState, useEffect, useRef} from "react";
import mapBoxToken  from '../../../../tokens'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './GPSS.scss'


interface IProps {

  // mapContainer?: any;
  // map?: any;
  // lng: number;
  // lat: number;
  // zoom: number;

}

// HTMLDivElement

const useMap = () => {

  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState<number>(-70.9);
  const [lat, setLat] = useState<number>(42.35);
  const [zoom, setZoom] = useState<number>(9);


    useEffect(() => {
      if (map.current) return;
      async function mapReq() {
        mapboxgl.accessToken = mapBoxToken;
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });


      }
      mapReq();
      map.current.addControl( new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
        }))

    },[]);

  return {mapContainer, map}
}


const GPS: React.FC = () => {

  const {mapContainer, map} = useMap();


  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div ref={mapContainer} className="map-container"/>
    </div>
  );

}

export default GPS


