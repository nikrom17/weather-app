import { combineReducers } from 'redux';
import {
  initialForecastState,
  forecastReducer,
} from 'src/redux/reducers/forecastReducer';
import { ForecastState } from 'src/redux/types/forecastTypes';

export interface AppState {
  forecast: ForecastState;
}

export const initialAppState: AppState = {
  forecast: { ...initialForecastState },
};

export const rootReducer = combineReducers({
  forecast: forecastReducer,
});
