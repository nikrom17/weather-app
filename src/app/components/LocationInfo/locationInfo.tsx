import React from "react";
import * as forecastTypes from "src/redux/types/forecastTypes";
import * as styles from "./LocationInfo.module.less";
import locationPin from './locationPin.svg'

interface Props {
  location: forecastTypes.Location;
}

const LocationInfo: React.FC<Props> = ({ location }) => {
  const date = new Date(location.localtime);

  return (
    <>
      <div className={styles.cityContainer}>
        <img className={styles.icon }src={locationPin} alt="location pin" />
        <span className={styles.city}>{`${location.name}, ${location.region}`}</span>
      </div>
      <p>
        {/* todo convert into different format */}
        {date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}
      </p>
    </>
  );
}

export default LocationInfo;
