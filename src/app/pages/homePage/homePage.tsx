import React from "react";
import { connect } from "react-redux";
import { AppState } from "src/redux/rootReducer";
import * as forecastActions from "src/redux/actions/forecastActions";
import { FetchForecast, ForecastState } from "src/redux/types/forecastTypes";
import PageFrame from "@components/pageFrame/pageFrame";

interface StateProps {
  forecast: ForecastState;
}

interface Props extends StateProps {
  fetchForecast: FetchForecast
}

const Home: React.FC<Props> = ({ fetchForecast}) => {

  React.useEffect(() => {
    fetchForecast("Houston");
  }, [fetchForecast]);

  return (
    <PageFrame />
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  forecast: state.forecast,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchForecast: (city: string) => dispatch(forecastActions.fetchForecast(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
