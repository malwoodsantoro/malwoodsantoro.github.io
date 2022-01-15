import * as React from "react"
import { CopyBlock, nord } from "react-code-blocks";

export default function ProfileCodeSnippet({lng, lat, zoom, profile}) {

let header = '';
let addControl;

 if (profile.includes("directions")) {
   header += '<script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js"></script>\n                <link rel ="stylesheet" href ="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.css" type ="text/css" >'
  }
  if (profile.includes("geocoding")) {
    header += '\n               <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.min.js"></script>\n                <link rel ="stylesheet" href ="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css" type ="text/css" >'
  }
  if (profile.includes("draw")) {
    header += '\n                <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.min.js"></script>\n                <link rel ="stylesheet" href ="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css" type ="text/css" >'
  }
  if (profile.includes("minimap")) {
    header += '\n                 <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.min.js"></script>\n                <link rel ="stylesheet" href ="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css" type ="text/css" >'
  }

  return (
  < CopyBlock
    text={`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
             <div></div>
            <title>Display a map on a webpage</title>
            <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
              <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet">
                <script src="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js"></script>
                // plugin libraries
                ${header}
                <style>
                  body {margin: 0; padding: 0; }
                  #map {position: absolute; top: 0; bottom: 0; width: 100%; }
                </style>
              </head>
              <body>
                <div id="map"></div>
                <script>
                  mapboxgl.accessToken = 'pk.eyJ1IjoibWFsd29vZCIsImEiOiJjajB5ODExNDgwMjczMzNvMnRtbGJscDRtIn0.Ua3fOk4G2fq_mW3jsGSa4g';
                  const map = new mapboxgl.Map({
                    container: 'map', // container ID
                    style: 'mapbox://styles/mapbox/streets-v11', // style URL
                    center: [${lng}, ${lat}], // starting position [lng, lat]
                    zoom: ${zoom} // starting zoom
                });
                
                ${addControl}
            </script>
              </body>
            </html>`}
    theme={nord}
    language="html"
  />
  )
              }