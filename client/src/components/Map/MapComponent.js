import React, { useEffect, useState } from 'react';
import { InfoWindow, Marker, GoogleMap, LoadScript } from '@react-google-maps/api';
import { Link } from "react-router-dom";

const divStyle = {
  background: `white`,
  padding: 15,
  maxHeight: 200
}

const MapComponent = (props) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('/api/members').then(res => res.json()).then(res => {
      setMembers(res);
    });
  }, []);

  const states_abbrev =
  {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'American Samoa': 'AS',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'District Of Columbia': 'DC',
    'Federated States Of Micronesia': 'FM',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Guam': 'GU',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Marshall Islands': 'MH',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Northern Mariana Islands': 'MP',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Palau': 'PW',
    'Pennsylvania': 'PA',
    'Puerto Rico': 'PR',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY'
  }

  const markerPosns = {
    "Alabama" : [32.806671,	-86.791130],
    "Alaska"  : [61.370716,	-152.404419],
    "Arizona" : [33.729759,	-111.431221],
    "Arkansas": [34.969704,	-92.373123],
    "California": [36.116203,	-119.681564],
    "Colorado" :	[39.059811,	-105.311104],
    "Connecticut": [41.597782,	-72.755371],
    "Delaware": [39.318523,	-75.507141],
    "District of Columbia": [38.897438,	-77.026817],
    "Florida" : [27.766279,	-81.686783],
    "Georgia" :	[33.040619,	-83.643074],
    "Hawaii"  : [21.094318,	-157.498337],
    "Idaho"    : [44.240459,	-114.478828],
    "Illinois" : [40.349457,	-88.986137],
    "Indiana"  : [39.849426,	-86.258278],
    "Iowa"     : [42.011539,	-93.210526],
    "Kansas"   : [38.526600,	-96.726486],
    "Kentucky" : [37.668140,	-84.670067],
    "Louisiana" : [31.169546,	-91.867805],
    "Maine" : [44.693947,	-69.381927],
    "Maryland" : [39.063946,	-76.802101],
    "Massachusetts" : [42.230171,	-71.530106],
    "Michigan" : [43.326618,	-84.536095],
    "Minnesota" : [45.694454,	-93.900192],
    "Mississippi" : [32.741646,	-89.678696],
    "Missouri" : [38.456085,	-92.288368],
    "Montana" : [46.921925,	-110.454353],
    "Nebraska" : [41.125370,	-98.268082],
    "Nevada" : [38.313515,	-117.055374],
    "New Hampshire" : [43.452492,	-71.563896],
    "New Jersey" : [40.298904,	-74.521011],
    "New Mexico" : [34.840515,	-106.248482],
    "New York" : [42.165726,	-74.948051],
    "North Carolina" : [35.630066,	-79.806419],
    "North Dakota" : [47.528912,	-99.784012],
    "Ohio" : [40.388783,	-82.764915],
    "Oklahoma" : [35.565342,	-96.928917],
    "Oregon" : [44.572021,	-122.070938],
    "Pennsylvania" : [40.590752,	-77.209755],
    "Rhode Island" : [41.680893,	-71.511780],
    "South Carolina" : [33.856892,	-80.945007],
    "South Dakota" : [44.299782,	-99.438828],
    "Tennessee" : [35.747845,	-86.692345],
    "Texas" : [	31.054487,	-97.563461],
    "Utah" : [40.150032,	-111.862434],
    "Vermont" : [44.045876,	-72.710686],
    "Virginia" : [37.769337,	-78.169968],
    "Washington" : [47.400902,	-121.490494],
    "West Virginia" : [38.491226,	-80.954453],
    "Wisconsin" : [44.268543,	-89.616508],
    "Wyoming" : [42.755966,	-107.302490]
  }

  const {center, defaultZoom, borderBounds, containerStyle} = props;

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
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap
        options={createMapOptions}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={defaultZoom}
      >
      {/* test */}
      {Object.keys(markerPosns).map((key, index) => {
        const curPos = {lat: parseFloat(markerPosns[key][0]), lng: parseFloat(markerPosns[key][1])};
        return (
          <>
            <Marker onClick={() => {showInfoWindow(index)}} position={curPos} />
            {showInfoArr[index] && (<InfoWindow onCloseClick={() => {closeInfoWindow(index)}} position={curPos}>
              <div style={divStyle}>
                <h1>{key} Representatives:</h1>
                {members.filter(val => {
                  return val.state === states_abbrev[key]}).map(val => {
                    return <>
                    <Link to={`/members/${val.id}`}><h2>({val.party + ") " + val.last_name + ", " + val.first_name}: {val.short_title}</h2></Link>
                    </>;
                  })}
              </div>
            </InfoWindow>)}
          </>
        )})}

      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;