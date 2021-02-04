import React from "react";
import { isEmpty } from 'lodash-es';
import * as forecastTypes from "src/redux/types/forecastTypes";
import * as styles from './DailyForecast.module.less';
import { Divider } from "antd";

interface Props {
  future: forecastTypes.FutureForecast;
  tempScaleF: boolean;
}

const DailyForecast: React.FC<Props> = ({ future, tempScaleF }) => {
  return (
    <>
      {!isEmpty(future.byId) && future.allIds.map(id => {
        const {date, day: { avgtemp_c, avgtemp_f, condition } } = future.byId[id];
        const temp = tempScaleF ? avgtemp_f : avgtemp_c;
        const day = new Date(date);

        return (
          <>
          <div className={styles.card}>
            <div>
              <div className={styles.day}>{day.toLocaleDateString("en-US", { weekday: "short"})}</div>
              <div className={styles.icon}>
                <img src={condition.icon.replaceAll("64", "128")} alt={condition.text} height="64" />
              </div>
              <div className={styles.temp} >{Math.round(temp)}&deg;</div>
            </div>
          </div>
          {id !== 4 && <Divider type="vertical" style={{height: "auto", borderLeft: "2px solid #D8D8D8", top: "0" }} />}
          </>
        )})
      }
    </>
)};

export default DailyForecast;
