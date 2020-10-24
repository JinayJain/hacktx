import React, { useContext, useEffect, useState } from 'react'
import MapComponent from '../../components/Map/MapComponent'

const Map = () => {

    const US_BOUNDS = {
        north: 55,
        south: 25,
        east: -60,
        west: -140
    };   

    const ALASKA_BOUNDS = {
        north: 72,
        south: 52,
        east: -137,
        west: -177
    };   
    
    const HAWAII_BOUNDS = {
        north: 25,
        south: 16,
        east: -148,
        west: -164
    }

    const containerUSConnected = {
        width: '60vw',
        height: '80vh'
    };

    const containerAlaskaHawaii = {
        width: '30vw',
        height: '30vh'
    };

    return ( <>
        <MapComponent containerStyle={containerUSConnected} defaultZoom={4} center={ {  lat: 40.78, lng: -101.76 }} borderBounds={US_BOUNDS}/>
        <MapComponent containerStyle={containerAlaskaHawaii} defaultZoom={5} center={ {  lat: 61.370716, lng: -152.404419 }} borders={ALASKA_BOUNDS}/>
        <MapComponent containerStyle={containerAlaskaHawaii} defaultZoom={6} center={ {  lat: 21.094318, lng: -157.498337 }} borders={HAWAII_BOUNDS}/>
        </>
    )
}

export default Map;
