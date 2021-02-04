import * as React from "react";
import * as forecastTypes from "src/redux/types/forecastTypes";
import * as styles from './CurrentForecast.module.less';

interface Props {
  current: forecastTypes.CurrentForecast;
  tempScaleF: boolean;
}

const CurrentForecast: React.FC<Props> = ({ current, tempScaleF }) => {
  const { temp_c, temp_f, condition, wind_mph } = current;
  const temp = tempScaleF ? temp_f : temp_c;

  return (current.condition ? (
    <div className={styles.currentForecast}>
      <div className={styles.temp}>
        {Math.round(temp)}&deg;
      </div>
      <div className={styles.icon}>
        <img src={condition.icon.replaceAll("64", "128")} alt={condition.text} />
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