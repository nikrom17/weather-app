import * as React from 'react';
import { connect } from 'react-redux';
import HomePage from '@pages/ForecastPage/ForecastPage';
import LoadingPage from '@pages/LoadingPage/LoadingPage';
import useWindowDimensions from 'src/app/hooks/useWindowDimensions';
import * as forecastTypes from 'src/redux/types/forecastTypes';
import * as forecastActions from 'src/redux/actions/forecastActions';
import './App.less';

interface Props {
  fetchForecast: forecastTypes.FetchForecast;
}

const App: React.FC<Props> = ({ fetchForecast }) => {
  const [appLoading, setAppLoading] = React.useState(true);
  setTimeout(() => setAppLoading(false), 3500);
  const { height, width } = useWindowDimensions();

  React.useEffect(() => {
    fetchForecast('Dallas');
  }, [fetchForecast]);

  return (
    <div className="wrapper">
      {appLoading ? (
        <LoadingPage />
      ) : (
        <HomePage screenHeight={height} screenWidth={width} />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchForecast: (city: string) =>
    dispatch(forecastActions.fetchForecast(city)),
});

export default connect(null, mapDispatchToProps)(App);
