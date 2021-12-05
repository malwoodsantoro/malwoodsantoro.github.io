import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "../styles/map.css"

mapboxgl.accessToken = 'pk.eyJ1IjoibWFsLXdvb2QiLCJhIjoiY2oyZ2t2em50MDAyMzJ3cnltMDFhb2NzdiJ9.X-D4Wvo5E5QxeP7K_I3O8w';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    //if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    let stopSpinner = (e) => {
      console.log('stop spinner')
      document.getElementById("spinner").style.visibility = "hidden";
      map.current.off('idle', stopSpinner)
    }

    map.current.on('sourcedataloading', (e) => {
      if (!e.isSourceLoaded && e.sourceId === "open-cycle-tiles") {
        document.getElementById("spinner").style.visibility = "visible";
        map.current.on('idle', stopSpinner);
      }
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  let addRasterLayer = () => {
    if (!map.current) return;
    map.current.addLayer({
      'id': 'open-cycle-tiles',
      'type': 'raster',
      'source': {
        'type': "raster",
        'tiles': ['https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=9c9153fd548d400faf38239d6ee7ccb4'],
        'tileSize': 256
      },
      "minzoom": 0,
      "maxzoom": 22,
      "paint": {
        "raster-opacity": .5
      }
    }, 'waterway-label')
  }

  return (
    <div>
      <button id="layer"
        onClick={() => {
          addRasterLayer();
        }}>Add layer</button>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div id="spinner"></div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
