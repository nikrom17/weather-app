import * as forecastTypes from "../types/forecastTypes";
import api from "src/api/api";

// ------ SIMPLE ACTIONS ------ //

// fetch a 5 day forecast
export const fetchForecastStart = () => ({
  type: forecastTypes.FETCH_FORECAST_START,
});

export const fetchForecastSuccess = (data: forecastTypes.ForecastState) => ({
  type: forecastTypes.FETCH_FORECAST_SUCCESS,
  data,
});

export const fetchForecastFailed = () => ({
  type: forecastTypes.FETCH_FORECAST_FAILED,
});

// toggle between F and C
export const toggleTempScale = () => ({
  type: forecastTypes.TOGGLE_TEMP_SCALE,
});

// ------ COMPLEX ACTIONS ------ //

// fetch a 5 day forecast
export const fetchForecast: forecastTypes.FetchForecast = (city: string) => async (
  dispatch
) => {
  try {
    dispatch(fetchForecastStart());
    const response = await api.getForecast(city);
    dispatch(fetchForecastSuccess(response));
  } catch (error) {
    console.log(error);
    dispatch(fetchForecastFailed());
  }
};

