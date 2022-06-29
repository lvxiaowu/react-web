import React from 'react';
import Empty from '..';
import './style.less';
import '../style';

export default (): React.ReactNode => {
  return (
    <>
      <Empty
        image="https://static-venus.shandiantech.com/skio/20220629/1656499583289.png"
        description="描述文字"
        className="custom-empty"
      />
    </>
  );
};
