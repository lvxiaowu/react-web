import React, { Component } from 'react';
import classnames from 'classnames';
import { MaskProps } from './PropsType';

export interface MaskStates {}

class Mask extends Component<MaskProps, MaskStates> {
  static defaultProps: MaskProps = {
    prefixCls: 'sd-mask',
    visible: false,
    type: 'normal',
  };
  render() {
    const { prefixCls, className, visible, type, ...others } = this.props;
    const markCls = classnames(prefixCls, className, {
      [`${prefixCls}--${type}`]: !!type,
    });
    return visible && <div className={markCls} {...others} />;
  }
}

export default Mask;
