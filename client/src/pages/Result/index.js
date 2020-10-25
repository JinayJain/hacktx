import React from 'react';
import Members from '../../components/Card/card';
const Result = () => {
    return(
        <Members
            array={[{"first":"Lamar","last":"Alexander","party":"R","state":"TN","hometown":"Maryville"}]}
        />
    );
}

export default Result;