import * as React from "react";
import * as forecastTypes from "src/redux/types/forecastTypes";
import * as styles from './CurrentForecast.module.less';

interface Props {
  current: forecastTypes.CurrentForecast;
  tempScaleF: boolean;
}
//todo can I move redux further up?

const CurrentForecast: React.FC<Props> = ({ current, tempScaleF }) => {
  const { temp_c, temp_f, condition, wind_mph } = current;
  const temp = tempScaleF ? temp_f : temp_c;

  return (current.condition ? (
    <div className={styles.currentForecast}>
      <div className={styles.temp}>
        {Math.round(temp)}&deg;
      </div>
      <div className={styles.weatherIcon}>
        <img src={condition.icon} alt={condition.text} />
      </div>
      <div className={styles.forecastDescription}>
        <span>{condition.text}</span>
        <span>{Math.round(wind_mph)} mph</span>
      </div>
    </div>
  ) : null
  );
};

export default CurrentForecast;