import { ThunkType, DefaultSchema } from './commonTypes';

// ------ COMMON INTERFACES ------ //
interface Condition {
  text: string;
  icon: string;
}

export interface CurrentForecast {
  last_updated: string;
  temp_c: number;
  temp_f: number;
  condition: Condition;
  wind_mph: number;
}

interface FutureForecastObject {
  date: string;
  day: {
    avgtemp_c: number;
    avgtemp_f: number;
    condition: Condition;
  };
}

export interface FutureForecast extends DefaultSchema<FutureForecastObject> {}

export interface Location {
  country: String;
  name: string;
  region: string;
  localtime: string;
}

export interface ForecastState {
  current: CurrentForecast;
  future: FutureForecast;
  location: Location;
  tempScaleF: boolean;
}

// ------ THUNK ACTION TYPES ------ //
export type FetchForecast = (city: string) => ThunkType;

// ------ CONSTANTS ------ //
export const FETCH_FORECAST_START = 'FETCH_FORECAST_START';
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';
export const FETCH_FORECAST_FAILED = 'FETCH_FORECAST_FAILED';

export const TOGGLE_TEMP_SCALE = 'TOGGLE_TEMP_SCALE';

// ------ TYPES ------ //
interface FetchForecastSuccess {
  type: typeof FETCH_FORECAST_SUCCESS;
  data: any;
}

interface ToggleTempScale {
  type: typeof TOGGLE_TEMP_SCALE;
}

export type Types = FetchForecastSuccess | ToggleTempScale;
