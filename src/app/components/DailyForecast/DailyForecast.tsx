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
        return (
          <>
          <div className={styles.card}>
            <div>
              <p>{date}</p>
              <div><img src={condition.icon} alt={condition.text}/></div>
              <div>{temp}&deg;</div>
            </div>
          </div>
          {id !== 4 && <Divider type="vertical" style={{height: "auto",}}/>}
          </>
        )})
      }
    </>
)};

export default DailyForecast;
