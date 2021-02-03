import React from "react";
import * as forecastTypes from "src/redux/types/forecastTypes";
import locationPin from './locationPin.svg'

interface Props {
  location: forecastTypes.Location;
}

const LocationInfo: React.FC<Props> = ({ location }) => (
  <div>
    <p>
      <img src={locationPin} alt="location pin" />
      <span style={{marginLeft: "1rem"}}>{`${location.name}, ${location.region}`}</span>
    </p>
    <p>
      {/* todo convert into different format */}
      {location.localtime}
    </p>
  </div>
);

export default LocationInfo;
