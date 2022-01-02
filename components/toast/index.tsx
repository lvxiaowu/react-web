import React, { Component } from 'react';
import { ToastProps } from './PropsType';


export interface ToastStates {}

class Toast extends Component< ToastProps, ToastStates> {
   render() {
      return <>Toast 组件</>;
   }
}
  
export default Toast;
