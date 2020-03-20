import React, { useState } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import ApiService from '../../services/api'

function MapView(props) {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 42,
    longitude: -71,
    zoom: 8
  });

  const {logs} = props
  console.log(logs[0])

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
    >
      {
        logs.map(log => (
        <div key={log.id}>{log.latitude}</div>
        ))       
      }
      {
        logs.map(log => (
          <Marker   
          key={log.id}         
          latitude={42.2} 
          longitude={-71.7} 
          >
            <div>{log.latitude}</div>
          </Marker>
        ))       
      }

    </ReactMapGL>
  );
}


export default MapView;