import { handelError } from "@utils/errorHandling";
import { weatherApiKey } from "apiKey";

const BASEURL = "https://api.weatherapi.com/v1/forecast.json";

const throwError = (response: any) => {
  throw response;
};

const getForecast: any = async (cityName: string) => {
  try {
    let response: any = await fetch(`${BASEURL}?q=${cityName}&days=5&key=${weatherApiKey}`);
    response = await response.json();
    return response.error ? throwError(response) : response;
  } catch (error) {
    handelError(error.error);
    throw new Error("api error");
  }
};

export default {
  getForecast,
};
