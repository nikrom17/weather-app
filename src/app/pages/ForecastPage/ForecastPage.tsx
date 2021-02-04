import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'src/redux/rootReducer';
import LocationInfo from '@components/LocationInfo/LocationInfo';
import TemperatureToggle from '@components/TemperatureToggle/TemperatureToggle';
import CurrentForecast from '@components/CurrentForecast/CurrentForecast';
import DailyForecast from '@components/DailyForecast/DailyForecast';
import * as forecastTypes from 'src/redux/types/forecastTypes';
import * as styles from './ForecastPage.module.less';

interface StateProps {
  current: forecastTypes.CurrentForecast;
  future: forecastTypes.FutureForecast;
  location: forecastTypes.Location;
  tempScaleF: boolean;
}

interface Props extends StateProps {
  screenHeight: number;
  screenWidth: number;
}

const ForeCastPage: React.FC<Props> = ({
  current,
  future,
  location,
  screenHeight,
  screenWidth,
  tempScaleF,
}) => {
  return (
    <div className={styles.frame}>
      <div className={styles.locationInfo}>
        <LocationInfo location={location} />
        {screenWidth <= 600 && <TemperatureToggle />}
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.cityImage}>
          <CurrentForecast current={current} tempScaleF={tempScaleF} />
          {screenWidth > 600 && <TemperatureToggle />}
        </div>
        {screenHeight > 900 && (
          <img src="/dallas.svg" alt="Dallas" width="100%" height="auto" />
        )}
      </div>
      <div className={styles.fiveDayForecast}>
        <DailyForecast
          future={future}
          height={screenHeight}
          tempScaleF={tempScaleF}
          width={screenWidth}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  current: state.forecast.current,
  future: state.forecast.future,
  location: state.forecast.location,
  tempScaleF: state.forecast.tempScaleF,
});

export default connect(mapStateToProps)(ForeCastPage);
