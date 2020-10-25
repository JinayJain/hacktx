import React, { useContext, useEffect, useState } from 'react'
import MapComponent from '../Map/MapComponent'
import { Row, Col } from 'antd';

const Maps = () => {

    const US_BOUNDS = {
        north: 55,
        south: 25,
        east: -60,
        west: -140
    };   

    const ALASKA_BOUNDS = {
        north: 75,
        south: 50,
        east: -135,
        west: -175
    };   
    
    const HAWAII_BOUNDS = {
        north: 25,
        south: 15,
        east: -150,
        west: -165
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
        <Row>
            <Col span={16}>
                <MapComponent containerStyle={containerUSConnected} defaultZoom={4} center={ {  lat: 40.78, lng: -101.76 }} borderBounds={US_BOUNDS}/>
            </Col>
            <Col span={8}>
                <br/><br/><br/>
                <MapComponent containerStyle={containerAlaskaHawaii} defaultZoom={5} center={ {  lat: 61.370716, lng: -152.404419 }} borders={ALASKA_BOUNDS}/>
                <br/>
                <MapComponent containerStyle={containerAlaskaHawaii} defaultZoom={6} center={ {  lat: 21.094318, lng: -157.498337 }} borders={HAWAII_BOUNDS}/>
            </Col>
        </Row>
        </>
    )
}

export default Maps;
