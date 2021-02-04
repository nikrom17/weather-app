// import { cloneDeep } from "lodash";
import * as forecastTypes from '../types/forecastTypes';

export const initialForecastState: forecastTypes.ForecastState = {
  current: {} as forecastTypes.CurrentForecast,
  future: {
    allIds: [0, 1, 2, 3, 4],
    byId: {},
  },
  location: {} as forecastTypes.Location,
  tempScaleF: true,
};

export const forecastReducer = (
  state = initialForecastState,
  action: forecastTypes.Types
): forecastTypes.ForecastState => {
  switch (action.type) {
    case forecastTypes.FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        current: { ...action.data.current },
        future: {
          allIds: [0, 1, 2, 3, 4],
          byId: {
            ...action.data.forecast.forecastday,
          },
        },
        location: { ...action.data.location },
      };
    case forecastTypes.TOGGLE_TEMP_SCALE:
      return {
        ...state,
        tempScaleF: !state.tempScaleF,
      };
    default:
      return state;
  }
};
