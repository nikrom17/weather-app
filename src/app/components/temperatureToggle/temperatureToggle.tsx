import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'src/redux/rootReducer';
import * as forecastActions from 'src/redux/actions/forecastActions';
import { Switch } from 'antd';
import './TemperatureToggle.less';

interface StateProps {
  tempScaleF: boolean;
}

interface Props extends StateProps {
  toggleTempScale(): void;
}

const TemperatureToggle: React.FC<Props> = ({
  tempScaleF,
  toggleTempScale,
}) => (
  <div className="toggleContainer">
    <Switch
      checked={tempScaleF}
      checkedChildren={<span>F&deg;</span>}
      className="ant-switch"
      onClick={toggleTempScale}
      unCheckedChildren={<span>C&deg;</span>}
    />
  </div>
);

const mapStateToProps = (state: AppState): StateProps => ({
  tempScaleF: state.forecast.tempScaleF,
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleTempScale: () => dispatch(forecastActions.toggleTempScale()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TemperatureToggle);
