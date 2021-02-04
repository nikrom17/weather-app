import React from 'react';
import * as forecastTypes from 'src/redux/types/forecastTypes';
import * as styles from './LocationInfo.module.less';
import locationPin from './locationPin.svg';

interface Props {
  location: forecastTypes.Location;
}

const LocationInfo: React.FC<Props> = ({ location }) => {
  const date = new Date(location.localtime);

  return (
    <div className={styles.locationContainer}>
      <div className={styles.cityContainer}>
        <img
          alt="location pin"
          className={styles.icon}
          height="30"
          src={locationPin}
        />
        <span className={styles.city}>
          {`${location.name}, ${location.region}`}
        </span>
      </div>
      <p>
        {date.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          weekday: 'long',
          year: 'numeric',
        })}
      </p>
    </div>
  );
};

export default LocationInfo;
