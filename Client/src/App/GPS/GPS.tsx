import React, {useState, useEffect, useRef} from "react";
import mapBoxToken  from '../../../../tokens'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './GPSS.scss'




interface IProps {

}

const useGps = () => {

  const [result, setResult] = useState<any>({})

  const start = [-122.662323, 45.523751];
  const end = [-122.303707, 45.612333]

  useEffect(()=> {

      async function getGpsDirection() {
        const query = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
          { method: 'GET' }
        );
        const json = await query.json();
        const data = json.routes[0];
        const route = data.geometry.coordinates;
        const geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        };
        setResult({
          data: data,
          geojson: geojson
        });
        console.log(geojson)
      }
     getGpsDirection();

  },[])

  return result
}


const useMap = () => {

  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState<number>(-70.9);
  const [lat, setLat] = useState<number>(42.35);
  const [zoom, setZoom] = useState<number>(9);
  const [result, setResult] = useState<any>({})
  const start = [-122.662323, 45.523751];
  const end = [-122.303707, 45.612333]

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

      map.current.addControl(new mapboxgl.NavigationControl());
      map.current.addControl( new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
        }))

        map.current.addControl(new mapboxgl.FullscreenControl({container: document.getElementById('root')}));

    },[]);

    useEffect(() => {

      async function getGpsDirection() {

        const query = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
          { method: 'GET' }
        );

        const json = await query.json();
        const data = json.routes[0];
        const route = data.geometry.coordinates;

        const geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        };

        setResult({
          data: data,
          geojson: geojson
        });

        // console.log(geojson)
      }
     getGpsDirection();

  },[])

  return { mapContainer, map, result }

}

const GPS: React.FC = () => {

  const {mapContainer, map, result} = useMap();

  if (map.current) {
    if (map.current.getSource('route')) {
      // console.log(map.current.getSource('route'), 'here' )
      map.current.getSource('route').setData(result.data);
    } else {
      map.current.on('load', ()=> {
          console.log(map.current.getSource('route'), 'herewwww ' )
          map.current.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: result.data
            },

            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },

            paint: {
              'line-color': '#3887be',
              'line-width': 5,
              'line-opacity': 0.75
            }});//

        });
    }
  }
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div ref={mapContainer} className="map-container"/>
    </div>
  );

}

export default GPS


