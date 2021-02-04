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
import useWindowDimensions from 'src/app/hooks/useWindowDimensions';

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
  const { height, width } = useWindowDimensions();

  React.useEffect(() => {
    fetchForecast('Houston');
  }, [fetchForecast]);

  return (
    <div className={styles.frame}>
      <div className={styles.locationInfo}>
        <LocationInfo location={location} />
        {width < 600 && <TemperatureToggle />}
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.cityImage}>
          <CurrentForecast current={current} tempScaleF={tempScaleF} />
          {width > 600 && <TemperatureToggle />}
        </div>
        {height > 900 && (
          <img src="/dallas.svg" alt="Dallas" width="100%" height="auto" />
        )}
      </div>
      <div className={styles.fiveDayForecast}>
        <DailyForecast
          future={future}
          tempScaleF={tempScaleF}
          height={height}
          width={width}
        />
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
