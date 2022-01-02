import React from 'react';
import Progress from '../';
import '../style';
import './index.less';

class ProgressDemo extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="rows">
        <Progress percent={30} />
      </div>
    );
  }
}

export default ProgressDemo;
