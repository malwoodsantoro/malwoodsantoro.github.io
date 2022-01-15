import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import ProfileCodeSnippet from './profile-code-snippet';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFsLXdvb2QiLCJhIjoiY2oyZ2t2em50MDAyMzJ3cnltMDFhb2NzdiJ9.X-D4Wvo5E5QxeP7K_I3O8w'

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -98.644739,
      lat: 39.160083,
      zoom: 3
    };
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    this.mapOverview = new mapboxgl.Map({
      container: this.mapOverviewContainer, // container id
      style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
      center: [-151.881303, 64.503260], // starting position [lng, lat]
      zoom: 0.3, // starting zoom
      attributionControl: false
    });

    this.directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });

    this.geocoding = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    })

    this.draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      },
      defaultMode: 'draw_polygon'
    });

    this.map.on('move', () => {
      this.setState({
        lng: this.map.getCenter().lng.toFixed(4),
        lat: this.map.getCenter().lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      });
    });

    this.map.addControl(this.directions, 'top-left');
    this.map.addControl(this.geocoding);

    document.getElementsByClassName("mapOverviewContainer")[0].style.visibility = 'hidden';
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.profile.includes('directions') && this.props.profile.includes('directions')) {
      this.map.addControl(this.directions, 'top-left');
    } else {
      if (prevProps.profile.includes('directions') && !this.props.profile.includes('directions'))
      this.map.removeControl(this.directions)
    }
    if (!prevProps.profile.includes('geocoding') && this.props.profile.includes('geocoding')) {
      this.map.addControl(this.geocoding)
    } else {
      if (prevProps.profile.includes('geocoding') && !this.props.profile.includes('geocoding'))
        this.map.removeControl(this.geocoding)
    }
    if (!prevProps.profile.includes('draw') && this.props.profile.includes('draw')) {
      this.map.addControl(this.draw, 'bottom-left')
    } else {
      if (prevProps.profile.includes('draw') && !this.props.profile.includes('draw'))
        this.map.removeControl(this.draw)
    }
    if (!prevProps.profile.includes('minimap') && this.props.profile.includes('minimap')) {
      document.getElementsByClassName("mapOverviewContainer")[0].style.visibility = 'visible';
    } else {
      if (prevProps.profile.includes('minimap') && !this.props.profile.includes('minimap'))
      document.getElementsByClassName("mapOverviewContainer")[0].style.visibility = 'hidden';
    }
  }

  render() {
    return (
      <div>
        <div id='container' className='w-full' style={{ position: "relative", height: 400}}>
          <div ref={el => (this.mapWrapper = el)} className="mapWrapper w-full" style={{ position: "absolute", height: 400, width: "100%"}} />
          <div ref={el => (this.mapOverviewContainer = el)} className="mapOverviewContainer" style={{position: "absolute", bottom: 50, right: 50, height: 100, width: 100, zIndex: 2}}></div>
        </div>
        <ProfileCodeSnippet lng={this.state.lng} lat={this.state.lat} zoom={this.state.zoom} profile={this.props.profile} style={{display: "block"}} />
      </div>
    );
  }
}

export default Map;