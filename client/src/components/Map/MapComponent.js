import React, { useState } from 'react';
import { InfoWindow, Marker, GoogleMap, LoadScript } from '@react-google-maps/api';

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}

const MapComponent = (props) => {

  const {markerPosns, center, defaultZoom, borderBounds, containerStyle} = props;
  
  const init = new Array(Object.keys(markerPosns).length);
  for (let i = 0; i < init.length; ++i) { init[i] = false; }
  const [showInfoArr, setShowInfoArr] = useState(init);

  const showInfoWindow = idx => {
    const showInfoArrCopy = [];
    showInfoArr.forEach(val => {
      showInfoArrCopy.push(val);
    })
    showInfoArrCopy[idx] = true;
    setShowInfoArr(showInfoArrCopy);
  }

  const closeInfoWindow = idx => {
    const showInfoArrCopy = [];
    showInfoArr.forEach(val => {
      showInfoArrCopy.push(val);
    })
    showInfoArrCopy[idx] = false;
    setShowInfoArr(showInfoArrCopy);
  }

  const borderRes = {
    latLngBounds: borderBounds,
    strictBounds: false
  }

  const createMapOptions = {
    minZoom: 4,
    maxZoom: 11,
    restriction: borderRes
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB5oFs3lmvpdAslVHFC_wd98CM9K0qEOPU">
      <GoogleMap
        options={createMapOptions}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={defaultZoom}
      >
            
  {Object.keys(markerPosns).map((key, index) => {
    const curPos = {lat: parseFloat(markerPosns[key][0]), lng: parseFloat(markerPosns[key][1])};
    return (
      <>
        <Marker onClick={() => {showInfoWindow(index)}} position={curPos} />
        {showInfoArr[index] && (<InfoWindow onCloseClick={() => {closeInfoWindow(index)}} position={curPos}>
          <div style={divStyle}>
            <h1>InfoWindow</h1>
          </div>
        </InfoWindow>)}
      </>
    )})}

        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;