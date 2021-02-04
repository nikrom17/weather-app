import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'src/redux/rootReducer';
import LocationInfo from '@components/LocationInfo/LocationInfo';
import TemperatureToggle from '@components/TemperatureToggle/TemperatureToggle';
import CurrentForecast from '@components/CurrentForecast/CurrentForecast';
import * as forecastTypes from 'src/redux/types/forecastTypes';
import * as forecastActions from 'src/redux/actions/forecastActions';
import * as styles from './HomePage.module.less';
import DailyForecast from '@components/DailyForecast/DailyForecast';

interface StateProps {
  current: forecastTypes.CurrentForecast;
  future: forecastTypes.FutureForecast;
  location: forecastTypes.Location;
  tempScaleF: boolean;
}

interface Props extends StateProps {
  fetchForecast: forecastTypes.FetchForecast;
}

const PageHeader: React.FC<Props> = ({
  current,
  fetchForecast,
  future,
  location,
  tempScaleF,
}) => {
  React.useEffect(() => {
    fetchForecast('Houston');
  }, [fetchForecast]);

  return (
    <div className={styles.frame}>
      <div className={styles.locationInfo}>
        <LocationInfo location={location} />
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.cityImage}>
          <CurrentForecast current={current} tempScaleF={tempScaleF} />
          <TemperatureToggle />
        </div>
        <img src="/dallas.svg" alt="Dallas" width="100%" />
      </div>
      <div className={styles.fiveDayForecast}>
        <DailyForecast future={future} tempScaleF={tempScaleF} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  current: state.forecast.current,
  future: state.forecast.future,
  tempScaleF: state.forecast.tempScaleF,
  location: state.forecast.location,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchForecast: (city: string) =>
    dispatch(forecastActions.fetchForecast(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
