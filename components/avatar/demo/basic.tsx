import React from 'react';
import Avatar from '../';
import '../style';
import './index.less';

export default () => (
  <>
    <div className="rows">
      <Avatar size="xl">xl</Avatar>
      <Avatar size="lg">lg</Avatar>
      <Avatar>md</Avatar>
      <Avatar size="sm">sm</Avatar>
      <Avatar size="xs">xs</Avatar>
    </div>
    <div className="rows">
      <Avatar shape="square" size="xl">
        xl
      </Avatar>
      <Avatar shape="square" size="lg">
        lg
      </Avatar>
      <Avatar shape="square">md</Avatar>
      <Avatar shape="square" size="sm">
        sm
      </Avatar>
      <Avatar shape="square" size="xs">
        xs
      </Avatar>
    </div>
  </>
);
