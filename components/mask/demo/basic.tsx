import React from 'react';
import Mask from '../';
import '../style';
import './index.less';

class Demo extends React.Component {
  state = {
    visible: false,
  };
  onChange = () => {
    this.setState({
      visible: true,
    });
  };
  render(): React.ReactNode {
    return (
      <div>
        <Mask visible={this.state.visible} type="normal" />
        <button onClick={this.onChange}>切换</button>
      </div>
    );
  }
}

export default Demo;
