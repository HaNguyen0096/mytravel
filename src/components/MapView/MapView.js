import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import  moment  from 'moment-timezone'
import AddLog from '../AddLog/AddLog'
import './MapView.css'
import 'mapbox-gl/dist/mapbox-gl.css'

function MapView(props) {
  const [showPopup, setShowPopup] = useState({})
  const [addLogLocation, setAddLogLocation] = useState(null)
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 42,
    longitude: -71,
    zoom: 8
  });

  const showAddMarkerPopup = (event) => {
    const [ longitude, latitude ] = event.lngLat;
    setAddLogLocation({
      latitude,
      longitude,
    });
  };

  const {logs, viewPath} = props
  const checkPath = viewPath.substring(1,7)

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
      onDblClick={showAddMarkerPopup}
    >
      {
        logs.map(log => (
          <React.Fragment key={log.id}>
            <Marker   
              key={log.id}         
              latitude={Number(log.latitude)} 
              longitude={Number(log.longitude)} 
              offsetLeft={-12}
              offsetTop={-24}
            >
              <div
                onClick={() => setShowPopup({
                  [log.id]:true,
                })}
              >
                <svg 
                  className='marker'
                  style={{
                    height: `24px`,
                    width: `24px`,
                  }}
                  stroke='currentColor' 
                  strokeWidth='2' fill='none' 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                >
                    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                    <circle cx='12' cy='10' r='3'></circle>
                </svg>
              </div>
            </Marker>
            {
              showPopup[log.id] ? (
                <Popup
                  latitude={Number(log.latitude)}
                  longitude={Number(log.longitude)}
                  closeButton={true}
                  closeOnClick={false}
                  dynamicPosition={true}
                  onClose={() => setShowPopup({})}
                  anchor='top' >
                  <div className='popup'>
                    <h3>{log.title}</h3>
                    <small>Visited on: {moment(log.visited_day).tz('America/New_York').format('MMMM Do YYYY')}</small>
                    {log.image && <img className='mapImage' src={log.image} alt={log.title} />}
                  </div>
                </Popup>
              ) : null
            }
          </React.Fragment>
        ))       
      }

      {
        (checkPath === 'mylogs') && addLogLocation ? (
          <div>
          <Marker
            latitude={addLogLocation.latitude}
            longitude={addLogLocation.longitude}
          >
            <div>
              <svg 
                className='marker'
                style={{
                  height: `24px`,
                  width: `24px`,
                }}
                stroke='currentColor' 
                strokeWidth='2' fill='none' 
                strokeLinecap='round' 
                strokeLinejoin='round' 
              >
                <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                <circle cx='12' cy='10' r='3'></circle>
              </svg>
            </div>
          </Marker>
          <Popup
            latitude={addLogLocation.latitude}
            longitude={addLogLocation.longitude}
            closeButton={true}
            closeOnClick={false}
            dynamicPosition={true}
            onClose={() => setAddLogLocation(null)}
            anchor='top' >
            <div className='popup'>
              <AddLog onClose={() => {
                setAddLogLocation(null);
              }} location={addLogLocation} />
            </div>
          </Popup>
          </div>
        ) : null
      }

    </ReactMapGL>
  );
}


export default MapView;