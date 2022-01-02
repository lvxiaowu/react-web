import React from 'react';
import Avatar from '..';
import '../style';
import './index.less';

export default () => (
  <>
    <div className="rows">
      <Avatar
        src={'https://static-venus.shandiantech.com/skio/20211227/1640572420325_state.png'}
        alt="avatar"
      ></Avatar>
      <Avatar style={{ color: 'red', backgroundColor: 'rgb(249, 232, 8)' }}>User</Avatar>
      <Avatar style={{ fontSize: 24 }}>U</Avatar>
    </div>
  </>
);
